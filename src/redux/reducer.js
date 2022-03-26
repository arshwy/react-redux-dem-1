import { combineReducers } from 'redux'
import cakeReducer from './cake/reducer'
import icecreamReducer from './icecream/reducer'
import cookieReducer from './cookie/reducer'
import userReducer from './user/reducer'

const reducer = combineReducers ({
  cake: cakeReducer,
  icecream: icecreamReducer,
  cookie: cookieReducer,
  user: userReducer
})


export default reducer
