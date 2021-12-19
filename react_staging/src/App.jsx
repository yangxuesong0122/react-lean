import React, {Component} from 'react'
import { Button, DatePicker } from 'antd'
// import 'antd/dist/antd.css'
import { WechatOutlined } from '@ant-design/icons';

export default class App extends Component {
  onChange = () => {

  }
  render() {
    return (
      <div>
				App...
        <Button type="primary">Primary</Button>
        <Button type="dashed">Primary Button</Button>
        <WechatOutlined />
        <DatePicker onChange={this.onChange} />
      </div>
    );
  }
}