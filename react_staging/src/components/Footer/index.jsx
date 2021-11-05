import React, {Component} from 'react'
import './index.css'

export default class Footer extends Component {
  handleAllCheck = (event) => {
    this.props.checkAllTodos(event.target.checked)
  }
  handleDelAll = () => {
    this.props.delAllDone()
  }
  render() {
    const {todos} = this.props
    // 计算已完成个数
    const doneCount = todos.reduce((pre, current) => {
      return pre + (current.done ? 1 : 0)
    }, 0)
    // 总数
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input onChange={this.handleAllCheck} type="checkbox" checked={doneCount === total && total !== 0 ? true : false}/>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleDelAll}>清除已完成任务</button>
      </div>
    )
  }
}