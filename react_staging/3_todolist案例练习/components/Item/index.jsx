import React, {Component} from 'react'
import './index.css'

export default class Item extends Component {
  state = {
    mouse: false
  }
  // 鼠标移入移出回调
  handleMouse = (flag) => {
    return () => {
      this.setState({
        mouse: flag
      })
    }
  }
  // checkbox 回调
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked)
    }
  }
  // 删除todo的回调
  handleDel = (id) => {
    if (window.confirm('确定删除吗?')) {
      this.props.delTodo(id)
    }
  }
  render() {
    const {todo} = this.props
    const {mouse} = this.state
    return (
      <li style={{backgroundColor: mouse ? '#ddd' : '#fff'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={todo.done} onChange={this.handleCheck(todo.id)}/>
          <span>{todo.name}</span>
        </label>
        <button onClick={() => this.handleDel(todo.id)} className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>删除</button>
      </li>
    )
  }
}