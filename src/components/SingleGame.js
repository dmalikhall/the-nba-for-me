import React from 'react';
// import { fetchData, liveOptions } from '../api/fetchLiveGames';
import { Card, Typography, Stack, Grid, Container, Box } from '@mui/material';
import { useGlobalContext } from '../helper/context';

const SingleGame = () => {
  const { allLiveGames } = useGlobalContext();
  return (
    <Container>
      <Grid container spacing={2}>
        {allLiveGames.map((game) => {
          console.log(game);
          const { id, date, status, periods } = game;
          const { home, visitors } = game.teams;
          const { home: homePoints, visitors: visitorPoints } = game.scores;

          // const showHalftime = () => {
          //   if (status.halftime) {
          //     `${<Typography>halftime</Typography>}`
          //   }
          // }

          // const showTime = () => {
          //   if (status.clock) {
          //     <Box>
          //       <Typography>Qtr {periods.current}</Typography>
          //       {status.clock}
          //     </Box>
          //   } else {
          //     <Box>
          //       <Typography>Today</Typography>
          //       <Typography>{realStartTime}</Typography>
          //     </Box>
          //   }
          // }

          const gameTime = new Date(date.start);
          // const month = gameTime.getMonth();
          const theDate = gameTime.getTime();
          const gameStart = new Date(theDate)
          const gameStartString = gameStart.toLocaleTimeString('en-US')
          const mainTime = gameStartString.slice(0, 4);
          const amOrPm = gameStartString.slice(7, gameStartString.length);
          const realStartTime = `${mainTime}${amOrPm}`
          return (
            <Grid item xs={12} md={6} key={id} >
              <Card>
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                  <Box sx={{ width: '75%' }}>
                    <Stack direction='row' alignItems='center' padding='8px'>
                      <img src={home.logo} alt={home.name} height='40px' width='40px' />
                      <Typography variant='p' marginLeft='9px'>{home.name}</Typography>
                      {status.clock && <Typography marginLeft='auto' marginTop='7px' marginRight='10px'>{homePoints.points}</Typography>}
                      {status.halftime && <Typography marginLeft='auto' marginRight='10px'>{homePoints.points}</Typography>}

                    </Stack>
                    <Stack direction='row' alignItems='center' padding='8px'>
                      <img src={visitors.logo} alt={visitors.name} height='40px' width='40px' />
                      <Typography variant='p' marginLeft='9px'>{visitors.name}</Typography>
                      {status.clock && <Typography marginLeft='auto' marginRight='10px'>{visitorPoints.points}</Typography>}
                      {status.halftime && <Typography marginLeft='auto' marginRight='10px'>{visitorPoints.points}</Typography>}

                    </Stack>
                  </Box >
                  <Box borderLeft='1px solid black' textAlign='center' padding='12px' sx={{ width: 1 / 4 }}>
                    {status.clock ?
                      <Box>
                        <Typography>Qtr {periods.current}</Typography>
                        {status.clock}
                      </Box>
                      :
                      <Box>
                        <Typography>Today</Typography>
                        <Typography>{realStartTime}</Typography>
                      </Box>
                      
                    }
                    



                    {/* {status.halftime && <Typography>Halftime</Typography>} */}

                    {/* {`${!periods.endOfPeriods ? 'Qtr' {periods.current} : 'nav-container'}`} */}
                    {/* {!periods.endOfPeriods ? Qtr {periods.current}: <Typography>End of {periods.current}</Typography>} */}
                    {/* <Typography>Today</Typography>
                    <Typography>{realStartTime}</Typography> */}
                  </Box>
                </Stack>
              </Card>
            </Grid>
          )
        })}
      </Grid>

    </Container>
  )
}

export default SingleGame

// `{!periods.endOfPeriods ? Qtr {periods.current}: <Typography>End of {periods.current}}`