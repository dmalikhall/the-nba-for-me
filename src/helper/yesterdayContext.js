import React, { useContext, useEffect, useReducer } from "react";
import { fetchData, liveOptions } from '../api/fetchLiveGames';
import yesterdayReducer from "../reducers/yesterdayReducer";


const initialState = {
    yesterdayGames: [],
    games_loading: false,
    games_error: false,
}

const YesterdayContext = React.createContext();

export const YesterdayProvider = ({ children }) => {
    const [state, dispatch] = useReducer(yesterdayReducer, initialState);

    const yesterdayYear = new Date().getFullYear()
    const yesterdayMonth = new Date().getMonth()

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

    const gameMonth = months[yesterdayMonth];

    const yesterdayDate = new Date().getDate();
    


    const apiDate = `${yesterdayYear}-${gameMonth}-${yesterdayDate}`

    const yesterdayData = async () => {
        dispatch({type:'GET_GAMES_BEGIN'})
        try {
            const yesterdayGameData = await fetchData(`https://api-nba-v1.p.rapidapi.com/games?season=2022&league=standard&date=${apiDate}`, liveOptions);
            dispatch({ type: 'GET_GAMES_SUCCESS', payload: yesterdayGameData })

        } catch (error) {
            dispatch({type:'GET_GAMES_ERROR'})

        }
    }

    useEffect(() => {
        yesterdayData()

    }, [])

    return (
        <YesterdayContext.Provider value={{ ...state }}>
            {children}
        </YesterdayContext.Provider>
    )

}

export const useGlobalContext = () => {
    return useContext(YesterdayContext)
}