import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';

const initialState = {
    houses: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                houses: action.payload,
                loading: false
            }
        case DELETE_ITEM:
            return {
                ...state,
                houses: state.houses.filter(house => house._id !== action.payload)
            }
        case ADD_ITEM:
            return {
                ...state,
                houses: [action.payload, ...state.houses]
            }
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
        return state;
    }
}