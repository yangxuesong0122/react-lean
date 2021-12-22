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
      // preState.unshift(data) // 此处不可以这样写，这样会导致preState被改写了，personReducer 就不是纯函数了，redux 也就不能识别状态的改变了
      return [data, ...preState]
    default:
      return preState
  }
}
/*
* 纯函数
  1.一类特别的函数: 只要是同样的输入(实参)，必定得到同样的输出(返回)
  2.必须遵守以下一些约束
    1)不得改写参数数据
    2)不会产生任何副作用，例如网络请求，输入和输出设备
    3)不能调用Date.now()或者Math.random()等不纯的方法
  3.redux的reducer函数必须是一个纯函数
* */