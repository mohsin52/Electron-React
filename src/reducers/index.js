import { combineReducers } from 'redux'
import homeReducer from './homeReducer'
import navigationReducer from './navigationReducer'
import handShakeReducer from './handShakeReducer'
import cartReducer from './cartReducer'
import raceReducer from './raceReducer';

const rootReducer = combineReducers({
    home : homeReducer,
    navigation : navigationReducer,
    session :handShakeReducer,
    cart : cartReducer ,
    race : raceReducer
})

export default rootReducer