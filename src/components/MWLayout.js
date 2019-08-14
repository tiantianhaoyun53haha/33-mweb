import React from "react";
import { TabBar } from 'antd-mobile';

class MWLayout  extends React.Component {
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
      <div style={ { position: 'fixed', height: '100%', width: '100%', top: 0 } }>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Home"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            badge={10}
            selected={this.props.match.url==="/"}
            onPress={() => {
             this.props.history.push("/")
            }}
     
          >
          {this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="购物车"
            key="Cart"
            badge={'new'}
            selected={this.props.match.url==="/Cart"}
            onPress={() => {
             this.props.history.push("/Cart")
            }}
            data-seed="logId1"
          >
          {this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="我的"
            key="Mine"
            dot
            selected={this.props.match.url==="/Mine"}
            onPress={() => {
             this.props.history.push("/Mine")
            }}
          >
            {this.props.children}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default MWLayout;