/*
* 该文件式用于创建一个为Count组件服务的reducer，本质就是一个函数
* reducer 函数会接到两个参数，分别为：之前的状态（preState）  动作对象（action）
* */
const initState = 0 // 初始化状态
export default function countReducer(preState = initState, action) {
  // if (preState === undefined) {
  //   preState = 0
  // }
  // 从 action 对象中获取
  const { type, data } = action
  // 根据 type 决定如何加工数据
  switch (type) {
    case 'increment':
      return preState + data
    case 'decrement':
      return preState - data
    default:
      return preState
  }
}