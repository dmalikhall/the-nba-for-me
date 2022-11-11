import React, { useContext, useEffect, useReducer } from "react";
import { fetchData, liveOptions } from '../api/fetchLiveGames';
import reducer from "../reducers/liveGameReducer";


const initialState = {
    allLiveGames: []

}
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);


    const fetchLiveData = async () => {
        try {
            const liveGameData = await fetchData('https://api-nba-v1.p.rapidapi.com/games?season=2022&league=standard&date=2022-11-11', liveOptions);
            dispatch({ type: 'GET_GAMES_SUCCESS', payload: liveGameData })

        } catch (error) {
            console.log(error);

        }

    }

    useEffect(() => {
        fetchLiveData()

    }, [])
    return (
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}