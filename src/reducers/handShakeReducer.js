import { AUTH_MACHINE , AUTH_USER_FAIL  ,AUTH_USER_SUCCESS ,GET_USER_DATA } from '../actions/types'

const initialState = {
    active  : false ,
    kioskUrl : '521996',
    digitalSign : "dYik2aO5UXZY/95AJ1K+AR/J2giHCX+x0DIRWBR7grQAw1dYCp99Cu8t6l8hst3zA8Nk1DAJnX4ZW3SzJSZMDQ==",
    user : null
}

export default function(state = initialState , action ){
    switch(action.type){
        case AUTH_MACHINE :
        return {
            ...state ,
            digitalSign : action.payload.dS,
            kioskUrl : action.payload.kId
        }
        case AUTH_USER_FAIL:
            return {
                ...state ,
                active : false
            }
        case AUTH_USER_SUCCESS :
            return {
                ...state ,
                active : action.payload
            }
        case GET_USER_DATA :
            return {
                ...state ,
                user : action.payload
            }
        default :
            return {...state}
    }

}