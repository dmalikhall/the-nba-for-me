const tomorrowsReducer = (state, action) => {
    if(action.type === 'GET_GAMES_SUCCESS') {
        return {
            ...state,
            tomorrowsGames: action.payload
        }
    }

}

export default tomorrowsReducer