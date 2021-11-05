import React, {Component} from 'react'
import PropTypes from 'prop-types'
// 生成唯一id
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {
  // 对接收的props进行类型/必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  // 键盘事件回调
  handleKeyUp = (e) => {
    const {keyCode, target} = e
    // 判断是否是回车按键
    if (keyCode !== 13) return
    // 非空判断
    if (!target.value.trim()) {
      alert('输入不能为空')
      return
    }
    const todo = {
      id: nanoid(),
      name: target.value,
      done: false
    }
    // 给父组件传递数据
    this.props.addTodo(todo)
    // 清空输入
    target.value = ''
  }
  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}