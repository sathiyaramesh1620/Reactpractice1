import {applyMiddleware, createStore} from  'redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {userReducer} from './user.reducer'
import { composeWithDevTools} from "redux-devtools-extension"
let middleware =[logger,thunk]
let store= createStore(userReducer,composeWithDevTools(applyMiddleware(...middleware)))
export {store}