import React, { useContext, useEffect, useReducer } from "react";
import { fetchData, liveOptions } from '../api/fetchLiveGames';
import reducer from "../reducers/liveGameReducer";


const initialState = {
    allLiveGames: [],
    games_loading: false,
    games_error: false,

}
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const todaysYear = new Date().getFullYear()


    const todaysMonth = new Date().getMonth()



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

    const gameMonth = months[todaysMonth];

    const todaysDate = new Date().getDate() + 1;


    const apiDate = `${todaysYear}-${gameMonth}-${todaysDate}`

    const fetchLiveData = async () => {
        dispatch({type:'GET_GAMES_BEGIN'})
        try {
            const liveGameData = await fetchData(`https://api-nba-v1.p.rapidapi.com/games?season=2022&league=standard&date=${apiDate}`, liveOptions);
            dispatch({ type: 'GET_GAMES_SUCCESS', payload: liveGameData })

        } catch (error) {
            dispatch({type:'GET_GAMES_ERROR'})
        }
    }

    useEffect(() => {
        fetchLiveData()

    }, [])
    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}