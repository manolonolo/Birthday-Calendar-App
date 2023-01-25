const initialState = {
    gifts: [],
    allGifts: []
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_ALL_GIFTS':
            return {
                ...state,
                gifts: action.payload,
                allGifts: action.payload
            };

        case 'GET_GIFT_BY_ID':
            return {
                ...state,
                giftId: action.payload
            };

        default:
            return state;
    }
}

export default rootReducer;