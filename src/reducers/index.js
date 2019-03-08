import { combineReducers } from 'redux'
import homeReducer from './homeReducer'
import navigationReducer from './navigationReducer'
import handShakeReducer from './handShakeReducer'

const rootReducer = combineReducers({
    home : homeReducer,
    navigation : navigationReducer,
    session :handShakeReducer
})

export default rootReducer