import React from 'react';
// import { fetchData, liveOptions } from '../api/fetchLiveGames';
import { Card, Typography, Stack, Grid, Container, Box } from '@mui/material';
import { useGlobalContext } from '../helper/context';
import Loading from '../components/Loading';
import Error from '../components/Error';

const TodaysGame = () => {
  const { allLiveGames, games_loading: loading, games_error: error } = useGlobalContext();

  if (loading) {
    return (
      <Container>
        <Grid container spacing={2}>
          {allLiveGames.map((loadingGames) => {
            const { id } = loadingGames
            return (
              <Grid item xs={12} md={6} key={id}>
                <Loading />
              </Grid>

            )
          })}

        </Grid>
      </Container>
    )
  }

  if (error) {
    return <Error />

  } else if (allLiveGames === null) {
    return (
      <h2>No games today</h2>
    )
  }


  return (
    <Container>
      <Grid container spacing={2}>
        {allLiveGames.map((game) => {
          const { id, date, status, periods } = game;
          const { home, visitors } = game.teams;
          const { home: homePoints, visitors: visitorPoints } = game.scores;
          const gameTime = new Date(date.start);
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
                      {status.long === 'Finished' && <Typography marginLeft='auto' marginRight='10px'>{homePoints.points}</Typography>}

                    </Stack>
                    <Stack direction='row' alignItems='center' padding='8px'>
                      <img src={visitors.logo} alt={visitors.name} height='40px' width='40px' />
                      <Typography variant='p' marginLeft='9px'>{visitors.name}</Typography>
                      {status.clock && <Typography marginLeft='auto' marginRight='10px'>{visitorPoints.points}</Typography>}
                      {status.halftime && <Typography marginLeft='auto' marginRight='10px'>{visitorPoints.points}</Typography>}
                      {status.long === 'Finished' && <Typography marginLeft='auto' marginRight='10px'>{visitorPoints.points}</Typography>}

                    </Stack>
                  </Box >
                  <Box borderLeft='1px solid black' textAlign='center' padding='12px' sx={{ width: 1 / 4 }}>
                    {status.clock ?
                      <Box>
                        <Typography>Qtr {periods.current}</Typography>
                        {status.clock}
                      </Box>
                      : status.halftime ? <Typography>Halftime</Typography>
                        : periods.endOfPeriod ? <Typography>End of Qtr{periods.current}</Typography>
                          : status.long === 'Finished' ? <Typography>End of Game</Typography>
                            : <Box>
                              <Typography>Today</Typography>
                              <Typography>{realStartTime}</Typography>

                            </Box>

                    }
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

export default TodaysGame

