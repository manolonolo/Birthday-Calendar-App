export const getAllGifts = () => (dispatch) => {
    return fetch('http://localhost:3001/gifts')
    .then(res => {
        res.json()
        .then((info) => {
            dispatch({type: 'GET_ALL_GIFTS', payload: info});
        })
    })
    .catch((error) => console.log(error));
};

export const getGiftById = (id) => (dispatch) => {
    return fetch(`http://localhost:3001/gifts/${id}`)
    .then(res => {
        res.json()
        .then((info) => {
            dispatch({type: 'GET_GIFT_BY_ID', payload: info})
        })
    })
    .catch(error => dispatch({type:'GET_GIFT_BY_ID', payload: {error}}))
}

export function showCombo(payload){
    return {
        type: 'SHOW_COMBO',
        payload
    }
}

export function sortByCategory(payload){
    return{
        type: 'SORT_BY_CATEGORY',
        payload
    }
}

export function orderByTitle(payload){
    return{
        type: 'ORDER_BY_TITLE',
        payload
    }
}

export function sortByPrice(payload){
    return{
        type: 'SORT_BY_PRICE',
        payload
    }
}

export const getGiftByTitle = (title) => (dispatch) => {
    return fetch(`http://localhost:3001/gifts?title=${title}`)
    .then(res => {
        res.json()
        .then((info) => {
            dispatch({ type: 'GET_GIFT_TITLE', payload: info })
        })
    })
    .catch((error) => dispatch({ type: 'GET_GIFT_TITLE', payload: {error} }))
};