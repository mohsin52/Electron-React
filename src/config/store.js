import rootReducer from '../reducers'
import { createStore ,applyMiddleware ,compose } from 'redux'
import thunk from 'redux-thunk'


const middleWares = [thunk]


const kioskStore = createStore(rootReducer  , {},
    compose(applyMiddleware (...middleWares))
     )

export default kioskStore