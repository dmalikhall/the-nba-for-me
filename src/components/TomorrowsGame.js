import React from 'react';
import { Card, Typography, Stack, Grid, Container, Box } from '@mui/material';
import { useGlobalContext } from '../helper/tomorrowsContext';
import Loading from '../components/Loading';
import Error from '../components/Error';

const TomorrowsGame = () => {
  const { tomorrowsGames, games_loading: loading, games_error: error } = useGlobalContext();
  if (loading) {
    return (
      <Container>
        <Grid container spacing={2}>
          {tomorrowsGames.map((loadingGames) => {
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
    
  } else if (tomorrowsGames === null) {
    return (
      <h2>No games tomorrow</h2>
    )
  }

  return (
    <Container>
      <Grid container spacing={2}>
        {tomorrowsGames.map((game) => {
          const { id, date } = game;
          const { home, visitors } = game.teams
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

                    </Stack>
                    <Stack direction='row' alignItems='center' padding='8px'>
                      <img src={visitors.logo} alt={visitors.name} height='40px' width='40px' />
                      <Typography variant='p' marginLeft='9px'>{visitors.name}</Typography>
                    </Stack>
                  </Box >
                  <Box borderLeft='1px solid black' textAlign='center' padding='12px' sx={{ width: 1 / 4 }}>
                    <Typography>Tomorrow</Typography>
                    <Typography>{realStartTime}</Typography>
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

export default TomorrowsGame