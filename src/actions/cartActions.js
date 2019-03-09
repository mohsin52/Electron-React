import {UPDATE_CART} from './types'


export const UpdateCart =(data)=>dispatch=>{
        dispatch({
            type : UPDATE_CART,
            payload : data 
        }) 
}