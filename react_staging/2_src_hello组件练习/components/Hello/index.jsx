import React, {Component} from "react"
import hello from "./index.module.css"
// 创建并暴露Hello组件
export default class Index extends Component {
  render() {
    return (
      <h2 className={hello['bg-color']}>
        hello, react,杨雪松啊
      </h2>
    )
  }
}