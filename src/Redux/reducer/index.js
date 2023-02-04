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

        case 'SHOW_COMBO':
            const comboGifts = action.payload === 'combo' ? state.gifts.filter((g) => {return g.isCombo === true})
            : state.gifts.filter((g) => {return g.isCombo === false})
            console.log(comboGifts)
            return{
                ...state,
                gifts: comboGifts
            };

        case 'SORT_BY_CATEGORY':
            const allGifts = state.allGifts
            const filteredStatus = action.payload === 'All'?
            allGifts:
            allGifts.filter(g => g.category === action.payload)
            console.log(filteredStatus)
            return {
                ...state,
                gifts: filteredStatus
            };

        case 'ORDER_BY_TITLE':
            const giftsByTitle = action.payload === 'asc'?
            state.gifts.sort((a, b) => {
                if(a.title > b.title) return 1;
                if(a.title < b.title) return -1;
                return 0;
            }):
            state.gifts.sort((a, b) => {
                if(a.title < b.title) return 1;
                if(a.title > b.title) return -1;
                return 0;
            })
            console.log(giftsByTitle);
            return {
                ...state,
                allGifts: giftsByTitle
            };
    
        case 'SORT_BY_PRICE':
            const lowerToHighest = action.payload === 'Lower price'
            ? state.gifts.sort((a, b) => a.price - b.price)
            : state.gifts.sort((a, b) => b.price - a.price)
            console.log(lowerToHighest);
            return {
                ...state,
                allGifts: lowerToHighest
            };

        default:
            return state;
    }
}

export default rootReducer;