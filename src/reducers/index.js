import { combineReducers } from 'redux'
import homeReducer from './homeReducer'
import navigationReducer from './navigationReducer'

const rootReducer = combineReducers({
    home : homeReducer,
    navigation : navigationReducer
})

export default rootReducer