import axios from 'axios';
import { GET_ITEMS, GET_ITEM, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('/api/house')
        .then(res => dispatch({
            type: GET_ITEMS,
            payload: res.data
        }))
};

export const getItem = (id) => dispatch => {
    axios
        .get(`api/house/${id}`)
        .then(res => dispatch({
            type: GET_ITEM,
            payload: id,
        }))
}

export const deleteItem = (id) => dispatch => {
    axios
        .delete(`/api/house/${id}`)
        .then(res => dispatch({
            type: DELETE_ITEM,
            payload: id
        }))
};

export const addItem = (house) => dispatch => {
    axios
        .post('/api/house', house)
        .then(res => dispatch({
            type: ADD_ITEM,
            payload: res.data
        }))
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}