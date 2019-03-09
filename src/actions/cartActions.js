import {UPDATE_CART} from './types'


export const UpdateCart =(data)=>dispatch=>{
    console.log(data)
        dispatch({
            type : UPDATE_CART,
            payload : data 
        }) 
}