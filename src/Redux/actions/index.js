export const getAllGifts= () => (dispatch) => {
    console.log('getAllGifts');
    return fetch('http://localhost:3001/gifts')
    .then(res => {
        res.json()
        .then((info) => {
            dispatch({type: 'GET_ALL_GIFTS', payload: info});
        })
    })
    .catch((error) => console.log(error));
};

/*
export const getGiftById = (id) => (dispatch) => {
    return fetch(`http://localhost:3000/gifts/${id}`)
    .then((res) => res.json())
    .then((info) => dispatch({type: 'GET_GIFT_BY_ID', payload: info.data}))
    .catch(error => dispatch({type:'GET_GIFT_BY_ID', payload: {error}}))
}
*/