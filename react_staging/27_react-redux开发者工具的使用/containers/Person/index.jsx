import React, {Component} from 'react'
import {nanoid} from 'nanoid'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {
  addPerson = () => {
    const name = this.inputName.value
    const age = this.inputAge.value
    const personObj = {
      id: nanoid(),
      name,
      age
    }
    this.props.addPersonFunc(personObj)
    this.inputName.value = ''
    this.inputAge.value = ''
  }
  render() {
    const { personList, sum } = this.props
    return (
      <div>
        <h2>我是person组件,上方组件的求和为{sum}</h2>
        <input ref={c => this.inputName = c} type="text" placeholder="输入名字"/>
        <input ref={c => this.inputAge = c} type="text" placeholder="输入年龄"/>
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            personList.map(item => {
              return <li key={item.id}>名字：{item.name}----年龄：{item.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({ sum: state.he, personList: state.rens }), // 映射状态
  { // 映射操作状态的方法
    addPersonFunc: createAddPersonAction
  }
)(Person)