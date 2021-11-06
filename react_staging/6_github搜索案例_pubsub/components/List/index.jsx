import React, {Component} from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
  // 初始化状态
  state = {
    dataList: [],
    isFirst: true, // 是否第一次打开页面
    isLoading: false, // 是否加载中
    err: '' // 请求相关错误信息
  }
  componentDidMount() {
    // 订阅消息
    this.ps = PubSub.subscribe('getData', (_, stateObj) => {
      this.setState(stateObj)
    })
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.ps)
  }

  render() {
    const {dataList, isFirst, isLoading, err} = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用，输入关键词查询</h2> : isLoading ? '正在加载中。。。' : err ? <h2 color={{color: 'red'}}>{err}</h2> :
          dataList.map(item => {
            return (
              <div key={item.id} className="card">
                <a rel="noreferrer" href={item.html_url} target="_blank">
                  <img alt="head_protrait" src={item.avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{item.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}