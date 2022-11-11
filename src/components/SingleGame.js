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
          const { id, date } = game;
          const { home, visitors } = game.teams

          const gameTime =  new Date(date.start);
          // const month = gameTime.getMonth();
          // const day = gameTime.getDay();
          const hours = gameTime.getHours();
          const hour = ((hours + 11) % 12 + 1);
          const minutes = gameTime.getMinutes()
          // console.log(hour);

          // console.log(gameTime.getTime());
          // console.log(`${hour}:${minutes}`);
          const months = [
            'Jan',
            'Feb',
            'March',
            'April',
            'May',
            'June',
            'July',
            'Aug',
            'Sept',
            'Oct',
            'Nov',
            'Dec',
          ];

          const days = [
            'Sun',
            'Mon',
            'Tues',
            'Wed',
            'Thurs',
            'Fri',
            'Sat',
          ];

          // console.log(months[month]);
          // console.log(days[day]);
          // console.log(gameTime.getDate());
          

          return (
            <Grid item xs={12} key={id} >
              <Card >
                <Stack direction='row' alignItems='center' padding='8px'>
                  <img src={home.logo} alt={home.name} height='40px' width='40px' />
                  <Typography variant='p' marginLeft='9px'>{home.name}</Typography>
                  <Box border='1px solid black'>
                    <Typography>Today</Typography>
                    <Typography>{date.start}</Typography>
                  </Box>
                </Stack>
                <Stack direction='row' alignItems='center' padding='8px'>
                  <img src={visitors.logo} alt={visitors.name} height='40px' width='40px' />
                  <Typography variant='p' marginLeft='9px'>{visitors.name}</Typography>
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


