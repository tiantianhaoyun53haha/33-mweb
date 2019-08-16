import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
class MWLoadding extends Component {
  render() {
    return (
      <div className="mw_loadding">
        <div className="mw_loadding_icon">
        <Icon  type="loading"/>
        </div>

        <style jsx>{`
          .mw_loadding{
            position: fixed;
            width: 100%;
            height: 100%;
            background-color: #000;
            opacity: 0.5;
            z-index: 1000;
            .mw_loadding_icon{
              position: absolute;
              left: 50%;
              transform: translateX(-50%) scale(3);
              top:30%;
              z-index: 100001;
            }
          }
          `}</style>
      </div>
    );
  }
}
export default MWLoadding;