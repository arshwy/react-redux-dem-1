import { combineReducers } from 'redux'
import cakeReducer from './cake/reducer'
import icecreamReducer from './icecream/reducer'
import cookieReducer from './cookie/reducer'

const reducer = combineReducers ({
  cake: cakeReducer,
  icecream: icecreamReducer,
  cookie: cookieReducer
})


export default reducer
