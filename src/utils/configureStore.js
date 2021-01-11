import {combineReducers,createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import postsReducer from '../redux/reducers/rootReducer'
const initialState = {}
const middleware = [thunk]
const combinedReducers = combineReducers({data:postsReducer})
export  const store = createStore(combinedReducers,initialState, compose(
  applyMiddleware(...middleware)
))
