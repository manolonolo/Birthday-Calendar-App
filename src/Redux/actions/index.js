import axios from 'axios';

export const getAllGifts= () => async(dispatch) => {
    console.log('getAllGifts');
    return await axios.get('/gifts')
    .then((info) => {
        console.log(info.data);
        dispatch({type: 'GET_ALL_GIFTS', payload: info.data});
    })
    .catch((error) => console.log(error));
};

export const getGiftById = (id) => async (dispatch) => {
    return axios.get(`/gifts/${id}`)
    .then(info => dispatch({type: 'GET_GIFT_BY_ID', payload: info.data}))
    .catch(error => dispatch({type:'GET_GIFT_BY_ID', payload: {error}}))
}