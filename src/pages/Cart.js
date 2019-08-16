import React, { Component } from 'react';
import { Icon, NavBar, SwipeAction, Checkbox, Modal } from "antd-mobile";

// 1 准备接受store的数据
import { connect } from "react-redux";
import { itemChange, itemAllCheck, itemNumUpdate, itemRemove } from "../store/actionCreator";
const CheckboxItem = Checkbox.CheckboxItem;
const alert = Modal.alert;
class Cart extends Component {
  render() {
    console.log(this.props);
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
                    text: '取消',
                    onPress: () => console.log('cancel'),
                    style: { backgroundColor: '#ddd', color: 'white' },
                  },
                  {
                    text: '删除',
                    onPress: () => this.props.handleItemRemove(v.id),
                    style: { backgroundColor: '#F4333C', color: 'white' },
                  },
                ]}
              >
                <div className="cart_item_inner">
                  {/* 1 复选框 */}
                  <div className="chk_wrap">
                    <CheckboxItem checked={v.checked} onChange={this.props.itemCheck.bind(this, v.id)} />
                  </div>
                  {/* 2 图片 */}
                  <div className="goods_img_wrap">
                    <img src={v.img_url} alt="" />
                  </div>
                  {/* 3 商品名称+价格 */}
                  <div className="goods_info_wrap">
                    <div className="goods_name">{v.title}</div>
                    <div className="goods_price">￥{v.price}</div>
                  </div>
                  {/* 4 数量编辑工具 */}
                  <div className="goods_num_wrap">
                    <div>
                      <div onClick={this.props.handleItemNumUpdate.bind(this, -1, v.id, v.num)} className="nums_operation">-</div>
                      <div className="goods_num">{v.num}</div>
                      <div onClick={this.props.handleItemNumUpdate.bind(this, 1, v.id, v.num)} className="nums_operation">+</div>
                    </div>
                  </div>
                </div>
              </SwipeAction>
            </div>
          )}
        </div>
        <div className="footer_tool">
          <div className="all_chk_wrap">
            <CheckboxItem onChange={this.props.itemAllCheck} checked={this.props.allChecked}>全选</CheckboxItem>
          </div>
          <div className="tota_price_wrap">
            合计 <span>￥{this.props.totalPrice}</span>
          </div>
          <div className="pay_wrap">
            去结算({this.props.totalNums})
            </div>

        </div>
        {/* 购物车内容 结束*/}
        <style jsx>{`.cart_content {
  .cart_item {
    .cart_item_inner {
      padding: 10px 3px;
      border-bottom: 1px solid #ccc;
      display: flex;

      .chk_wrap {
        flex: 1;
      }
      .goods_img_wrap {
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 80%;
        }
      }
      .goods_info_wrap {
        flex: 3;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        overflow: hidden;
        .goods_name {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        .goods_price {
          color: red;
        }
      }

      .goods_num_wrap {
        flex: 3;
        display: flex;
        align-items: flex-end;
        > div {
          display: flex;
          .nums_operation {
            color: #666;
            font-size: 28px;
            width: 25px;
            height: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .goods_num {
            width: 25px;
            height: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 22px;
          }
        }
      }
    }
  }
}
.footer_tool {
  position: fixed;
  width: 100%;
  height: 45px;
  bottom: 50px;
  left: 0;
  background-color: #fff;
  border-top: 1px solid #ccc;
  display: flex;

    .all_chk_wrap {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      checkboxitem {

      }
    }

    .tota_price_wrap {
      flex: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        color: orangered;
      }
    }

    .pay_wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      background-color: orangered;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
    }
}
`}</style>
      </div>
    );
  }
}


// 计算购物车的总价格
const countAll = (arr) => {
  // 1 总价格
  let totalPrice = 0;
  arr.forEach(v => {
    if (v.checked) {
      totalPrice += v.num * v.price;
    }
  })
  return totalPrice;
}

const countNumsAll = (arr) => {
  // 1 总价格
  let sum = 0;
  arr.forEach(v => {
    if (v.checked) {
      sum += v.num;
    }
  })
  return sum;
}


// 3 定义 store的数据 和 组件的props的映射对象
// 这个对象类似 vue中 computed 
const mapStateToProps = (state) => {
  let carts = state.cartReducer.carts;
  return {
    carts: carts,
    // 全选状态 every方法的注意 空数组的时候 直接返回true
    allChecked: carts.length && carts.every(v => v.checked),
    // 总价格
    // totalPrice:countAll(carts),
    // 总数量
    // totalNums:countNumsAll(carts)
    // [].reduce  计算总和  
    totalPrice: carts.reduce((beforeSum, v) => (v.checked ? (beforeSum + (v.price * v.num)) : beforeSum), 0),
    totalNums: carts.reduce((beforeSum, v) => (v.checked ? (beforeSum + v.num) : beforeSum), 0)

  }
}

// 将action映射到 props里面
const mapDispatchToProps = (dispatch) => {
  return {
    itemCheck: (id) => {
      // 就会跳转到 购物车管理员中了！
      dispatch(itemChange(id))
    },
    itemAllCheck: (e) => {
      // 1 获取自己的当前的选中状态  点击之后的状态的值 
      let { checked } = e.target;
      // 2 取反
      // checked=!checked;
      // 3 传递管理员中
      dispatch(itemAllCheck(checked))
      // 4 遍历购物车的商品 让他们的选中状态 都等于取反后的状态
    },
    handleItemNumUpdate: (unit, id, num) => {
      // console.log(unit,id);
      // 1 当 当前的数量=1 同时 用户点击 “-” 弹窗询问是否要删除
      if (unit === -1 && num === 1) {
        // 弹窗询问是否要删除
        alert('警告', '您确定删除吗？', [
          { text: '取消', onPress: () => console.log('cancel') },
          {
            text: '删除', onPress: () => {
              // 2 准备删除
              dispatch(itemRemove(id));
            }
          },
        ])
      } else {

        dispatch(itemNumUpdate(unit, id))
      }

    },
    // 点击删除按钮
    handleItemRemove: (id) => {
      // 1 弹出确认框 询问用户是否要删除 
      alert('警告', '您确定删除吗？', [
        { text: '取消', onPress: () => console.log('cancel') },
        {
          text: '删除', onPress: () => {
            // 2 准备删除
            dispatch(itemRemove(id));
          }
        },
      ])
    }
  }
}


// 2 开始连接
export default connect(mapStateToProps, mapDispatchToProps)(Cart);