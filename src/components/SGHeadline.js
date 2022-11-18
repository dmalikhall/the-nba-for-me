import React, { useEffect, useState } from 'react';
import { Grid, Container} from '@mui/material';
import { fetchTheGameId, gameIdOptions } from '../api/fetchGameId';
import { useParams } from 'react-router-dom'

const SGHeadline = () => {
    const { gameId } = useParams();
    const [gameStatistics, setGameStatitsics] = useState({})

    useEffect(() => {
        const fetchSingleGameId = async () => {
            try {
                const gameIdData = await fetchTheGameId(`https://api-nba-v1.p.rapidapi.com/games?id=${gameId}`, gameIdOptions);
                const data = await gameIdData[0]
                console.log(data);
                if(data) {
                    setGameStatitsics(data)
                }
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleGameId()
    }, [gameId])

    

   console.log(gameStatistics);

    
    
    return (
        <Container>
            <Grid container>
                <Grid item>
                     logo, record of home                   
                </Grid>
                <Grid item>
                    total score
                </Grid>
                <Grid item>
                     logo, record of visitor                   
                </Grid>

            </Grid>

        </Container>
        
       
    )
}

export default SGHeadline

// Card, Typography, Stack,, Box