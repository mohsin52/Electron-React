import {UPDATE_CART} from '../actions/types'
const initialState = {
    bets : []
}
export default function(state = initialState , action ){
    switch(action.type){
        case UPDATE_CART :
            return { ...state , bets : action.payload}
        default :
            return {...state}
    }
}