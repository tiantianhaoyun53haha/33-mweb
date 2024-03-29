import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';

import { getSliderList, getCatesList } from "../request";

class Home extends Component {
  state = {
    // 轮播图的数组
    sliderlist: [],
    imgHeight: '176',
    // 推荐商品
    toplist: [],
    // 分类数据
    cateslist: []
  }

  // 获取轮播图数据&推荐商品的数据
  getSliderList() {
    getSliderList()
      .then(res => {
        this.setState({
          sliderlist: res.sliderlist,
          toplist: res.toplist
        })

      })

  }
  // 获取商品分类数据
  getCatesList() {
    getCatesList()
      .then(res => {
        this.setState({ cateslist: res });
      })
  }

  componentDidMount() {
    // 组件加载完毕 就会触发
    this.getSliderList();
    this.getCatesList();

  }

  render() {

    /* 
    1 请求还没有回来 标签已经渲染 正确
    2 数据回来 标签重新渲染 
    3 轮播图经过以上流程之后 自己不会重新触发轮播图的轮播 轮播图封装的问题！！！
      1 数据还没有回来 我就不渲染标签
      2 数据回来了 我再渲染标签 
    
     */
    return (
      <div className="mw_home" >
        {/* 轮播图 开始 */}
        <div className="mw_swiper">
          {this.state.sliderlist.length && <Carousel
            autoplay
            infinite
          >
            {this.state.sliderlist.map(val => (
              <div
                key={val.id}
                onClick={() => { this.props.history.push("/GoodsDetail/" + val.id) }}
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={val.img_url}
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
          </Carousel>}

        </div>
        {/* 轮播图 结束 */}
        {/* 推荐商品 开始 */}
        <div className="top_wrap">
          <div className="top_title">推荐商品</div>
          <div className="top_content">
            {this.state.toplist.map(v => (
              <div className="goods_top_item" key={v.id} onClick={() => { this.props.history.push("/GoodsDetail/" + v.id) }}>
                {/* 左侧的图片容器 */}
                <div className="top_img_wrap">
                  <img src={v.img_url} alt="" />
                </div>
                {/* 右侧的商品名称 */}
                <div className="top_goods_name">  <div>{v.title}</div> </div>
              </div>
            )
            )}
          </div>
        </div>
        {/* 推荐商品 结束 */}
        {/* 分类商品 开始 */}
        <div className="mw_home_cate">
          {this.state.cateslist.map(v1 => (
            <div key={v1.level1cateid} className="cate_group">
              <div className="cate_group_title">{v1.catetitle}</div>
              <div className="cate_group_content">
                {v1.datas.map(v2 => (
                  <div onClick={() => { this.props.history.push("/GoodsDetail/" + v2.artID) }} className="goods_detail" key={v2.artID}>
                    <img src={v2.img_url} alt="" />
                    <div className="goods_name">{v2.artTitle}</div>
                    <div className="goods_price_wrap">
                      <span className="news_price">￥{v2.sell_price}</span>
                      <span className="before_price">￥{v2.market_price}</span>
                    </div>
                    <div className="goods_num_wrap">
                      <span>  热卖中</span>
                      <span className="goods_num">{v2.stock_quantity}件</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* 分类商品 结束 */}


        <style jsx>{`
          .top_wrap{
            padding: 0 10px;
            .top_title{
            padding: 15px 0;
            }
            .top_content{
             .goods_top_item{
                display: flex;
                background-color: #fff;
                padding: 5px;
                border-bottom: 1px solid #ccc;
                .top_img_wrap{
                  flex: 1;
                  img{
                    width: 100%;
                  }
                }
                .top_goods_name{
                  flex: 4;
                  color: #666;
                  display: flex;
                  align-items: center;
                  overflow: hidden;
                  padding-left: 5px;
                  >div{
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                  }
                }
              }
            }
          }
          .mw_home_cate {

            .cate_group {
              .cate_group_title {
                padding: 15px;
                background-color: #dedede;
                color: #000;

              }
          
              .cate_group_content {
                display: flex;
                flex-wrap: wrap;
                .goods_detail {
                  width: 50%;
                  background-color: #fff;
                  padding: 0 5px;
                  border-bottom: 1px solid #ccc;
                  &:nth-child(odd){
                    border-right: 1px solid #ccc;
                  }
                  img {
                    width: 80%;
                    display: block;
                    margin: 0 auto;
                  }
          
                  .goods_name {
                    margin: 5px 0;
                    color: #666;
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp:2;
                  }
          
                  .goods_price_wrap {
                    display: flex;
                    justify-content: space-between;
                    padding: 5px 0;
                    .news_price {
                      font-size: 18px;
                      color: orangered;
                    }
          
                    .before_price {
                      text-decoration: line-through;
                      color: #ccc;
                    }
                  }
          
                  .goods_num_wrap {
                    display: flex;
                    justify-content: space-between;
                    padding: 5px 0;
                    color: #666;
                    span {
                      
                    }
          
                    .goods_num {
                      font-size: 16px;
                      color: orangered;
                    }
                  }
                }
              }
            }
          }
        
          `}</style>
      </div>
    );
  }
}
export default Home;