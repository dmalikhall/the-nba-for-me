import React, { useContext, useEffect, useReducer } from "react";
import { fetchData, liveOptions } from '../api/fetchLiveGames';
import tomorrowsReducer from '../reducers/tomorrowsReducer'

const initialState = {
    tomorrowsGames: [],
    games_loading: false,
    games_error: false,
}

const TomorrowsContext = React.createContext();

export const TomorrowsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(tomorrowsReducer, initialState);

    const tomorrowsYear = new Date().getFullYear()
    const tomorrowsMonth = new Date().getMonth()

    const months = [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
    ];

    const gameMonth = months[tomorrowsMonth];

    const tomorrowsDate = new Date().getDate() + 2;



    const apiDate = `${tomorrowsYear}-${gameMonth}-${tomorrowsDate}`

    const tomorrowsData = async () => {
        dispatch({type:'GET_GAMES_BEGIN'})
        try {
            const tomorrowsGameData = await fetchData(`https://api-nba-v1.p.rapidapi.com/games?season=2022&league=standard&date=${apiDate}`, liveOptions);
            dispatch({ type: 'GET_GAMES_SUCCESS', payload: tomorrowsGameData })

        } catch (error) {
            dispatch({type:'GET_GAMES_ERROR'})

        }
    }

    useEffect(()=> {
        tomorrowsData()

    },[apiDate])

  

    return (
        <TomorrowsContext.Provider value={{ ...state }}>
            {children}
        </TomorrowsContext.Provider>
    )

}

export const useGlobalContext = () => {
    return useContext(TomorrowsContext)
}