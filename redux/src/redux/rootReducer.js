import {combineReducers} from 'redux'
import { messageReducer } from './message/messege.reducer'
let rootReducer=combineReducers({message:messageReducer})
export {rootReducer}