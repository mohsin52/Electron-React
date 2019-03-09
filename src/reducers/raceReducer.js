import { LOAD_RACE ,RACE_UPDATE } from '../actions/types'

const initialState = {
   race : null
}

export default function(state = initialState , action ){
    switch(action.type){
        case LOAD_RACE :
            return {
                ...state , 
                race : action.payload[0]
            }
        case RACE_UPDATE :
         return {
             ...state,
             race : {
                 ...state.race,
                 horses : [
                     ...state.race.horses,
                     ...action.payload
                 ]
             }
         }
       
        default :
            return {...state}
    }

}