import React, {Component} from 'react'
import './App.css'
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"

class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里
  // 初始化状态
  state = {
    todos: [
      {id: '001', name: '吃饭', done: true},
      {id: '002', name: '睡觉', done: false},
      {id: '003', name: '打代码', done: true}
    ]
  }
  // 添加一个 todo
  addTodo = (todo) => {
    const {todos} = this.state
    // 追加todo
    const newTodo = [todo, ...todos]
    this.setState({
      todos: newTodo
    })
  }
  // 更新todo的选中状态
  updateTodo = (id, done) => {
    const {todos} = this.state
    // todos.forEach(item => {
    //   if (item.id === id) {
    //     item.done = done
    //   }
    // })
    const newTodos = todos.map(item => {
      if (item.id === id) return {...item, done}
      else return item
    })
    this.setState({
      todos: newTodos
    })
  }
  // 删除一个todo
  delTodo = (id) => {
    const {todos} = this.state
    // const index = todos.findIndex(item => item.id === id)
    // todos.splice(index, 1)
    const newTodos = todos.filter(item => item.id !== id)
    this.setState({
      todos: newTodos
    })
  }
  // 全选/全不选
  checkAllTodos = (done) => {
    const {todos} = this.state
    const newTodos = todos.map(item => {
      return {...item, done}
    })
    this.setState({
      todos: newTodos
    })
  }
  // 清除已完成
  delAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter(item => !item.done)
    this.setState({
      todos: newTodos
    })
  }
  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} delTodo={this.delTodo}/>
          <Footer todos={todos} checkAllTodos={this.checkAllTodos} delAllDone={this.delAllDone}/>
        </div>
      </div>
    )
  }
}

export default App