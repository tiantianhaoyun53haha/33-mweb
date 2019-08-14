import React from "react";
import { TabBar } from 'antd-mobile';

class MWLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'redTab'
    };
  }


  render() {
    // this.props.history
    // console.log(this.props);
    // this.props.history.push("/")
    // this.props.history.push("/Cart")
    // this.props.history.push("/Mine")
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Home"
            icon={<span className="iconfont icon-home" />}
            selectedIcon={<span style={{ color: "#108ee9" }} className="iconfont icon-home" />}
            selected={this.props.match.url === "/"}
            onPress={() => {
              this.props.history.push("/")
            }}

          >
            {this.props.match.url === "/"&&this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<span className="iconfont icon-gouwuche" />}
            selectedIcon={<span style={{ color: "#108ee9" }} className="iconfont icon-gouwuche" />}
            title="购物车"
            key="Cart"
            badge={'1'}
            selected={this.props.match.url === "/Cart"}
            onPress={() => {
              this.props.history.push("/Cart")
            }}
            data-seed="logId1"
          >
            {this.props.match.url === "/Cart"&&this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<span className="iconfont icon-weibiaoti2fuzhi12" />}
            selectedIcon={<span style={{ color: "#108ee9" }} className="iconfont icon-weibiaoti2fuzhi12" />}
            title="我的"
            key="Mine"
            selected={this.props.match.url === "/Mine"}
            onPress={() => {
              this.props.history.push("/Mine")
            }}
          >
            {this.props.match.url === "/Mine"&&this.props.children}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default MWLayout;