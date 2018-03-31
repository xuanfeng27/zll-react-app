/**
 * Created by zll on 2018/3/31.
 */
import {applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import counter from './reducer'



const middleware = applyMiddleware(thunk)
const store = createStore(counter,middleware)

export default store;