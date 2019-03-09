import {LOAD_RACE ,RACE_UPDATE} from './types'
import api from '../api'

export const load_Race = (id)=>dispatch => {
    api('GET' , `https://stghorserace3.azurewebsites.net/races/${id}`).then(
        res=>{
            if(res){
                dispatch({
                    type : LOAD_RACE,
                    payload : res
                })
            }
        }
    )
};

export const update_Race = (data)=>dispatch =>{
    dispatch({
        type : RACE_UPDATE,
        payload : data
    })
}
