import React, { Component, Fragment } from 'react';
import { NavBar, Icon, Carousel } from 'antd-mobile';
import { getGoodsInfo } from "../request";
class GoodsDetail extends Component {
  state = {
    // 商品详情对象
    goodsinfo: {},
    // 轮播图数组
    imglist: [],
    imgHeight: 146
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    getGoodsInfo(id)
      .then(res => {
        console.log(res);
        const { goodsinfo, imglist } = res;
        this.setState({ goodsinfo, imglist });
      })
  }
  render() {
    const { goodsinfo, imglist } = this.state;
    return (
      <div className="goods_detail">
        {/* 导航栏 开始 */}
        <NavBar
          icon={<Icon type="left" />}
          mode="dark"
          onLeftClick={() => this.props.history.go(-1)}
        >商品详情</NavBar>
        {/* 导航栏 结束 */}
        {/* 轮播图 开始 */}
        <Carousel
          autoplay
          infinite

        >
          {imglist.map(val => (
            <div
              key={val.id}
              className="detail_swiper"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val.original_path}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </div>
          ))}
        </Carousel>
        {/* 轮播图 结束 */}
        {/* 商品的名称 开始 */}
        <div className="goods_name">
          {goodsinfo.title}
        </div>
        {/* 商品的名称 结束 */}
        {/* 商品名称 二级 开始 */}
        <div className="goods_subname">{goodsinfo.sub_title}</div>
        {/* 商品名称 二级 结束 */}
        {/* 商品的价格 开始 */}
        <div className="goods_price">
          <span className="news_price">￥{goodsinfo.sell_price}</span>
          <span className="before_price">￥{goodsinfo.market_price}</span>
        </div>
        {/* 商品的价格 结束 */}

        {/* 商品的详情 开始 */}
        <div className="goods_des">
          <div className="goods_des_title">商品详情</div>
          <div className="goods_no">
            <span className="goods_no_text">商品编号</span>
            <span className="goods_no_val">{goodsinfo.goods_no}</span>
          </div>
          <div className="goods_num">
            <span className="goods_num_text">库存</span>
            <span className="goods_num_val">{goodsinfo.stock_quantity}件</span>
          </div>
          <div className="goods_time">
            <span className="goods_time_text">上架时间</span>
            <span className="goods_time_val">{(new Date(goodsinfo.add_time)).toLocaleString()}</span>
          </div>
        </div>
        {/* 商品的详情 结束 */}

        {/* 图文详情 开始 */}
        <div dangerouslySetInnerHTML={{ __html: goodsinfo.content }} className="goods_introduce">

        </div>
        {/* 图文详情 结束 */}
        {/* 底部工具栏 开始 */}
        <footer className="btm_tool">
          <div className="tool_item">
            <div className="iconfont icon-kefu"></div>
            <div className="tool_item_name">客服</div>
          </div>
          <div className="tool_item">
            <div className="iconfont icon-gouwuche"></div>
            <div className="tool_item_name">购物车</div>
          </div>
          <div className="tool_item cart_add">
            加入购物车
          </div>
          <div className="tool_item buy_now">
            立即购买
          </div>
        </footer>
        {/* 底部工具栏 结束 */}
        <style jsx>{`
          .goods_detail{
            padding-bottom:45px;
          }
          .goods_introduce{
            font-size:0;
          }
        .goods_name {
background-color: #fff;
padding: 5px;
font-weight: 600;
font-size: 18px;
display: -webkit-box;
overflow: hidden;
-webkit-box-orient: vertical;
-webkit-line-clamp:2;
}

.goods_subname {
  background-color: #fff;
  padding: 5px;
  font-weight: 600;
  font-size: 14px;
  color: #666;
}

.goods_price {
display: flex;
padding: 5px;
justify-content: space-between;  
background-color: #fff;
  .news_price {
    color: orangered;
    font-size: 16px;
    font-weight: 600;
  }

  .before_price {
    color: #666;
    text-decoration: line-through;
  }
}

.goods_des {
  >div{
    border-bottom: 1px dashed #ccc;
  }
  .goods_des_title{
    background-color: #fff;
    padding: 10px;
    font-size: 17px;
    font-weight: 600;
  }
  .goods_no {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 10px;
    font-size: 15px;
    .goods_no_text {

    }

    .goods_no_val {

    }
  }

  .goods_num {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 10px;
    font-size: 15px;
    .goods_num_text {

    }

    .goods_num_val {

    }
  }

  .goods_time {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 10px;
    font-size: 15px;
    .goods_time_text {

    }

    .goods_time_val {

    }
  }
}
.btm_tool {
  width: 100%;
  height: 45px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: #fff;
  display: flex;
  border-top: 1px solid #ccc;
  .tool_item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .iconfont.icon-kefu {

    }

    .tool_item_name {

    }
  }

  .tool_item.cart_add {
    flex: 2;
    background-color: #ff976a;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
  }

  .tool_item.buy_now {
    flex: 2;
    background-color: red;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
  }
}
          `}</style>
      </div>

    );
  }
}
export default GoodsDetail;