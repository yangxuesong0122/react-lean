// 引入 Count 的 UI 组件
import CountUI from '../../components/Count'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'

// mapStateToProps 函数返回的是一个对象
// 返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
// mapStateToProps 用于传递状态
function mapStateToProps(state) {
  return {
    sum: state
  }
}

// mapDispatchToProps 函数返回的是一个对象
// 返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
// mapStateToProps 用于传递操作状态的方法
function mapDispatchToProps(dispatch) {
  return {
    jia: (data) => {
      // 通知 redux 执行加法
      dispatch(createIncrementAction(data))
    },
    jian: data => dispatch(createDecrementAction(data)),
    asyncJia: (data, time) => dispatch(createIncrementAsyncAction(data, time))
  }
}
// 创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)