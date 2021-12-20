// 用于创建redux中最为核心的store对象
import { createStore } from 'redux'

// 引入为Count组件服务的reducer
import countReducer from './count_reducer'
// 暴露store
export default createStore(countReducer)
