// 用于创建redux中最为核心的store对象
import { createStore, applyMiddleware, combineReducers } from 'redux'

// 引入为Count组件服务的reducer
import countReducer from './reducers/count'
// 引入为Person组件服务的reducer
import personReducer from './reducers/person'
// 引入 redux-thunk, 用于支持异步action
import thunk from 'redux-thunk'

// 汇总所有的reducer，combineReducers传入的对象，就是redux帮我们保存总状态对象
const allReducer = combineReducers({
  he: countReducer,
  rens: personReducer
})
// 暴露store
export default createStore(allReducer, applyMiddleware(thunk))
