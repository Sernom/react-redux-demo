import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import pieReducer from './pie/pieReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({cake: cakeReducer, iceCream: iceCreamReducer, pie: pieReducer, user: userReducer})

export default rootReducer