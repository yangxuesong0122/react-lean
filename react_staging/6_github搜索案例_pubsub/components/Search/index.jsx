import React, {Component} from 'react'
import axios from "axios"
import PubSub from 'pubsub-js'

export default class Search extends Component {
  handleSearch = () => {
    // 获取用户输入
    const {inputElement: {value: keyWord}} = this
    // 通知List更新状态
    PubSub.publish('getData', {isFirst: false, isLoading: true})
    // 查询搜索数据
    axios.get(`/api1/search/users2?q=${keyWord}`).then(res => {
      // 请求成功，更新状态
      PubSub.publish('getData', {dataList: res.data.items, isLoading: false})
    }, err => {
      PubSub.publish('getData', {err: err.message, isLoading: false})
    })
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