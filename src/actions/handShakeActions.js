import {AUTH_USER_FAIL ,AUTH_MACHINE , AUTH_USER_SUCCESS} from './types'
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
            console.log(res)
            if(res){
                dispatch ({
                    type : AUTH_MACHINE,
                    payload : res.digitalSignature
        }
           )
    }
}
    )}
export const login_user = (data)=> dispatch =>[
    dispatch({
        type : AUTH_USER_SUCCESS ,
        payload : data
    })
]