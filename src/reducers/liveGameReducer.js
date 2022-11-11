const reducer = (state, action) => {
    if(action.type === 'GET_GAMES_SUCCESS') {
        return {
            ...state,
            allLiveGames: action.payload
        }
    }

}

export default reducer