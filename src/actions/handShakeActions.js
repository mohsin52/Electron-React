import {AUTH_USER_FAIL} from './types'

export const logout_user =()=> dispatch =>{
    dispatch({
        type : AUTH_USER_FAIL,
        payload : false
    })
}