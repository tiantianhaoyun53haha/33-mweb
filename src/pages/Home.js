import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import Axios from "axios";
class Home extends Component {
  state = {
    // 轮播图的数组
    sliderlist: [],
    imgHeight: 176,
    // 推荐商品
    toplist: []
  }

  // 获取轮播图数据&推荐商品的数据
  getSliderList() {
    Axios.get("http://react.zbztb.cn/site/goods/gettopdata/goods")
      .then(res => {
        this.setState({
          sliderlist: res.data.message.sliderlist,
          toplist: res.data.message.toplist
        })
      })
  }

  componentDidMount() {
    // 组件加载完毕 就会触发
    this.getSliderList();

  }

  render() {
    return (
      <div className="mw_home" >
        {/* 轮播图 开始 */}
        <div className="mw_swiper">
          <Carousel
            autoplay
            infinite
          >
            {this.state.sliderlist.map(val => (
              <a
                key={val.id}
                href="http://www.alipay.com"
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
              </a>
            ))}
          </Carousel>
        </div>
        {/* 轮播图 结束 */}
        {/* 推荐商品 开始 */}
        <div className="top_wrap">
          <div className="top_title">推荐商品</div>
          <div className="top_content">
            {this.state.toplist.map(v => (
              <a key={v.id} href="#">
                {/* 左侧的图片容器 */}
                <div className="top_img_wrap">
                  <img src={v.img_url} alt="" />
                </div>
                {/* 右侧的商品名称 */}
                <div className="top_goods_name">  <div>{v.title}</div> </div>
              </a>
            )
            )}
          </div>
        </div>
        {/* 推荐商品 结束 */}


        <style jsx>{`
          .top_wrap{
            padding: 0 10px;
            .top_title{
            padding: 15px 0;
            }
            .top_content{
              a{
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
                  // 定死了父项的宽度等于flex 4
                  // 不加它的话 父项的宽度可以被子项撑开
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
          `}</style>
      </div>
    );
  }
}
export default Home;