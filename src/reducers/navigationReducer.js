import { ENABLE_NAVIGATION , DISABLE_NAVIGATION , SET_ACTIVE_TAB} from '../actions/types'

const initialState = {
    show : false ,
    active : 0
}

export default function(state = initialState , action ){
    switch(action.type){
        case ENABLE_NAVIGATION :
            return {
                ...state , show : true
            }
        case DISABLE_NAVIGATION :
            return {
                ...state , show : false
            }
        case SET_ACTIVE_TAB :
            return {
                ...state , active : action.payload
            }
        default :
            return {...state}
    }

}