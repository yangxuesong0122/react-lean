/*
* 为Count组件生成action对象
* */
import { INCREMENT, DECREMENT } from './constant'

// 同步 action,就是指action的值为Object类型的一般对象
export const createIncrementAction = data => ({ type: INCREMENT, data })
export function createDecrementAction(data) {
  return {
    type: DECREMENT,
    data
  }
}

// 异步 action,也就是action的值为函数，异步action中一般都会调用同步action，异步action不是必须要用的
export function createIncrementAsyncAction(data, time) {
  // store 帮我们调的这个函数
  return () => {
    setTimeout((dispatch) => {
      dispatch(createIncrementAction(data))
    }, time)
  }
}