import { BUY_PIE } from './pieTypes'

const initialState = {
  numOfPies: 14
}

const pieReducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_PIE: return {
      ...state,
      numOfPies: state.numOfPies -1
    }
    default: return state
  }
}

export default pieReducer