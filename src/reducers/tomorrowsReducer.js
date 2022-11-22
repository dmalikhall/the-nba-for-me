const tomorrowsReducer = (state, action) => {
    if(action.type === 'GET_GAMES_BEGIN') {
        return {...state, games_loading:true}
    }

    if(action.type === 'GET_GAMES_SUCCESS') {
        return {
            ...state,
            games_loading:false,
            tomorrowsGames: action.payload
        }
    }

    if(action.type === 'GET_GAMES_ERROR'){
        return {...state, games_loading:false, games_error:true}       
    }

}

export default tomorrowsReducer