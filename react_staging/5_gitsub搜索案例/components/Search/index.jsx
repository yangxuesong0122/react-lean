import React, {Component} from 'react'

export default class Search extends Component {
  handleSearch = () => {
    // 获取用户输入
    // const {value} = this.inputElement
    const {inputElement: {value: keyWord}} = this
    // 调用父组件方法
    this.props.getGithubUserList(keyWord)
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c => this.inputElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
          <button onClick={this.handleSearch}>Search</button>
        </div>
      </section>
    )
  }
}