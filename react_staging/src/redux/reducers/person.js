/*
* 该文件式用于创建一个为Person组件服务的reducer，本质就是一个函数,用于初始化状态和加工状态
* reducer 函数会接到两个参数，分别为：之前的状态（preState）  动作对象（action）
* */
import { ADD_PERSON } from '../constant'

const initState = [{ id: '001', name: 'yxs', age: 18 }] // 初始化状态
export default function personReducer(preState = initState, action) {
  // 从 action 对象中获取
  const { type, data } = action
  // 根据 type 决定如何加工数据
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState]
    default:
      return preState
  }
}