import React, {Component} from 'react'
// 用于获取redux中保存的状态
import store from '../../redux/store'

export default class Count extends Component {
  state = {
    carName: '奥拓'
  }
  // componentDidMount() {
  //   // 监测redux中状态的变化，只要变化，就调用render
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }

  increment = () => {
    const {value} = this.selectNum
    // 通知 redux 加 value
    store.dispatch({
      type: 'increment',
      data: value * 1
    })
  }
  decrement = () => {
    const {value} = this.selectNum
    // 通知 redux 减 value
    store.dispatch({
      type: 'decrement',
      data: value * 1
    })
  }
  incrementIfOdd = () => {
    const {value} = this.selectNum
    const sum = store.getState()
    if (sum % 2 !== 0) {
      store.dispatch({
        type: 'increment',
        data: value * 1
      })
    }
  }
  incrementAsync = () => {
    const {value} = this.selectNum
    setTimeout(() => {
      store.dispatch({
        type: 'increment',
        data: value * 1
      })
    }, 1000)
  }
  render() {
    return (
      <div>
        <h2>当前求和为: {store.getState()}</h2>
        <select ref={c => this.selectNum = c}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}