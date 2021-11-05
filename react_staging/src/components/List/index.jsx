import React, {Component} from 'react'
import Item from "../Item"
import './index.css'
import PropTypes from "prop-types"

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
  }
  render() {
    const {todos, updateTodo, delTodo} = this.props
    return (
      <ul className="todo-main">
        {
          todos.map(todo => {
            return <Item key={todo.id} todo={todo} updateTodo={updateTodo} delTodo={delTodo}/>
          })
        }
      </ul>
    )
  }
}