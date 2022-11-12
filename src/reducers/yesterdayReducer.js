const yesterdayReducer = (state, action) => {
    if(action.type === 'GET_GAMES_SUCCESS') {
        return {
            ...state,
            yesterdayGames: action.payload
        }
    }

}

export default yesterdayReducer