import React from 'react';
import { Card, Typography, Stack, Grid, Container, Box } from '@mui/material';
import { useGlobalContext } from '../helper/yesterdayContext';
import Loading from '../components/Loading';
import Error from '../components/Error';


const YesterdayGame = () => {
  const { yesterdayGames, games_loading: loading, games_error: error } = useGlobalContext();
  if (loading) {
    return (
      <Container>
        <Grid container spacing={2}>
          {yesterdayGames.map((loadingGames) => {
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
    
  } else if (yesterdayGames === null) {
    return (
      <h2>No games yesterday</h2>
    )
  }
  return (
    <Container>
      <Grid container spacing={2}>
        {yesterdayGames.map((game) => {
          const { id } = game;
          const { home, visitors } = game.teams;
          const { home: homePoints, visitors: visitorPoints } = game.scores

          return (
            <Grid item xs={12} md={6} key={id} >
              <Card>
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                  <Box sx={{ width: '90%' }}>
                    <Stack direction='row' alignItems='center' padding='8px'>
                      <img src={home.logo} alt={home.name} height='40px' width='40px' />
                      <Typography variant='p' marginLeft='9px'>{home.name}</Typography>
                      <Typography marginLeft='auto'>{homePoints.points || 'N/A'}</Typography>
                    </Stack>

                    <Stack direction='row' alignItems='center' padding='8px'>
                      <img src={visitors.logo} alt={visitors.name} height='40px' width='40px' />
                      <Typography variant='p' marginLeft='9px'>{visitors.name}</Typography>
                      <Typography marginLeft='auto'>{visitorPoints.points || 'N/A'}</Typography>
                    </Stack>
                  </Box >
                </Stack>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

export default YesterdayGame