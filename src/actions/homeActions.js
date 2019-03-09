import {LOAD_RACES} from './types'
import api from '../api'

export const load_Races = ()=>dispatch => {
    api('GET' , 'https://stghorserace3.azurewebsites.net/races').then(
        res=>{
            if(res){
                dispatch({
                    type : LOAD_RACES,
                    payload : res
                })
            }
        }
    )
};
