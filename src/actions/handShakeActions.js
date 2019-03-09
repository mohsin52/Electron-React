import {AUTH_USER_FAIL ,AUTH_MACHINE , AUTH_USER_SUCCESS, GET_USER_DATA} from './types'
import api from '../api'

export const logout_user =()=> dispatch =>{
    dispatch({
        type : AUTH_USER_FAIL,
        payload : false
    })
}
export const auth_Machine = (mId) => dispatch => {
    const data = {data : mId}
    console.log(data)
    api('POST' ,`http://stgdigitalsign.azurewebsites.net/api/DigiSign`, data )
    .then(
        res=>
        {
            if(res){
                dispatch ({
                    type : AUTH_MACHINE,
                    payload : { dS: res.digitalSignature , kId : mId }
        }
           )
    }
}
    )}
export const login_user = (data)=> dispatch =>{
    dispatch({
        type : AUTH_USER_SUCCESS ,
        payload : data
    })
}

export const get_user_data = (data) => dispatch => {
    dispatch({
        type : GET_USER_DATA,
        payload : data
    })
    // api('GET',`url.json`)
    // .then(res=>{
    //     if(res){
    //         dispatch({
    //             type : GET_USER_DATA,
    //             payload : {data : data}
    //         })
    //     }
    //     else{
    //         dispatch
    //     }
    // }
    // ).catch((err)=>(
    //     dispatch({
    //         type : GET_USER_DATA,
    //         payload : null
    //     })
    // )
    // )
}