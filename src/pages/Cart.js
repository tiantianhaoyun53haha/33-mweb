import React, { Component } from 'react';
import { Icon, NavBar, SwipeAction,Checkbox } from "antd-mobile";
// 1 准备接受store的数据
import { connect } from "react-redux";
const CheckboxItem = Checkbox.CheckboxItem;
class Cart extends Component {
  render() {

    return (
      <div className="cart">
        {/* 导航栏 开始 */}
        <NavBar
          icon={<Icon type="left" />}
          mode="dark"
          onLeftClick={() => this.props.history.go(-1)}
        >购物车</NavBar>
        {/* 导航栏 结束 */}
        {/* 购物车内容 开始 */}
        <div className="cart_content">
          {this.props.carts.map(v =>
            <div key={v.id} className="cart_item">
              <SwipeAction
                style={{ backgroundColor: 'gray' }}
                autoClose
                right={[
                  {
                    text: 'Cancel',
                    onPress: () => console.log('cancel'),
                    style: { backgroundColor: '#ddd', color: 'white' },
                  },
                  {
                    text: 'Delete',
                    onPress: () => console.log('delete'),
                    style: { backgroundColor: '#F4333C', color: 'white' },
                  },
                ]}
                onOpen={() => console.log('global open')}
                onClose={() => console.log('global close')}
              >
              <div className="cart_item_inner">
                {/* 1 复选框 */}
                <div className="chk_wrap">
                <CheckboxItem />
                </div>
                {/* 2 图片 */}
                <div className="goods_img_wrap">
                  <img src={v.img_url} alt=""/>
                </div>
                {/* 3 商品名称+价格 */}
                <div className="goods_info_wrap">
                  <div className="goods_name">{v.title}</div>
                  <div className="goods_price">￥{v.price}</div>
                </div>
                {/* 4 数量编辑工具 */}
                <div className="goods_num_wrap">
                  <div className="nums_operation">-</div>
                  <div className="goods_num">{v.num}</div>
                  <div className="nums_operation">+</div>
                </div>
                </div>
              </SwipeAction>
            </div>
          )}
        </div>
        {/* 购物车内容 结束*/}
      </div>
    );
  }
}

// 3 定义 store的数据 和 组件的props的映射对象
// 这个对象类似 vue中 computed 
const mapStateToProps = (state) => {

  return {
    carts: state.cartReducer.carts
  }
}


// 2 开始连接
export default connect(mapStateToProps, null)(Cart);