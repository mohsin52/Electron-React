import rootReducer from '../reducers'
import { createStore ,applyMiddleware ,compose } from 'redux'
import thunk from 'redux-thunk'


const middleWares = [thunk]


function saveToLocalStorage(state) {
    try {
      const serializedState = JSON.stringify(state)
      localStorage.setItem('state', serializedState)
    } catch(e) {
      console.log(e)
    }
  }
  
function loadFromLocalStorage() {
    try {
      const serializedState = localStorage.getItem('state')
      if (serializedState === null) return undefined
      return JSON.parse(serializedState)
    } catch(e) {
      console.log(e)
      return undefined
    }
  }


const persistedState = loadFromLocalStorage()

const kioskStore = createStore(rootReducer  ,persistedState,
    compose(applyMiddleware (...middleWares))
     )
kioskStore.subscribe(() => saveToLocalStorage(kioskStore.getState()))

export default kioskStore