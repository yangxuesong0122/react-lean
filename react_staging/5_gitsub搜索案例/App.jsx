import React, {Component} from 'react'
import Search from "./components/Search"
import List from "./components/List"
import axios from "axios"

export default class App extends Component {
  // 初始化状态
  state = {
    dataList: [],
    isFirst: true, // 是否第一次打开页面
    isLoading: false, // 是否加载中
    err: '' // 请求相关错误信息
  }
  // 查询搜索数据
  getGithubUserList = (keyWord) => {
    // 发送请求前
    this.setState({
      isLoading: true,
      isFirst: false
    })
    axios.get(`/api1/search/users2?q=${keyWord}`).then(res => {
      // 请求成功，更新状态
      this.setState({
        isLoading: false,
        dataList: res.data.items
      })
    }, err => {
      this.setState({
        err: '请求出错了！！！',
        isLoading: false
      })
    })
  }
  render() {
    const {dataList} = this.state
    return (
      <div className="container">
        <Search getGithubUserList={this.getGithubUserList}/>
        <List {...this.state}/>
      </div>
    )
  }
}