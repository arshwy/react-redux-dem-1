import { BUY_CAKE } from './types.js'

const initialState = {
  number: 10
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
        ...state,
        number: state.number > 0 ? state.number -1 : 0
    }
    default: return state
  }
}


export default reducer
