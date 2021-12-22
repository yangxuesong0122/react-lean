// 引入combineReducers，用于汇总多个reducer
import { combineReducers } from 'redux'
// 引入为Count组件服务的reducer
import countReducer from './count'
// 引入为Person组件服务的reducer
import personReducer from './person'

// 汇总所有的reducer，combineReducers传入的对象，就是redux帮我们保存总状态对象
export default combineReducers({
  count: countReducer,
  persons: personReducer
})