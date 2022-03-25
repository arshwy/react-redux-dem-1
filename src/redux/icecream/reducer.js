import { BUY_ICECREAM } from './types.js'

const initialState = {
  number: 20
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM: return {
        ...state,
        number: state.number > 0 ? state.number -1 : 0
    }
    default: return state
  }
}


export default reducer
