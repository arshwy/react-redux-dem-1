import { BUY_COOKIE } from './types.js'

const initialState = {
  number: 30
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_COOKIE: return {
        ...state,
        number: state.number > 0 ? state.number -1 : 0
    }
    default: return state
  }
}


export default reducer
