import { ENABLE_NAVIGATION , DISABLE_NAVIGATION , SET_ACTIVE_TAB} from '../actions/types'

export const disable_Navigation = () => dispatch =>{
    dispatch({
        type : DISABLE_NAVIGATION,
        payload : null
    })
}


export const enable_Navigation = () => dispatch =>{
    dispatch({
        type : ENABLE_NAVIGATION,
        payload : null
    })
}

export const set_Active_Tab = (num) => dispatch => {
    dispatch({
        type : SET_ACTIVE_TAB,
        payload : num
    })
}