import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Link, Route } from "react-router-dom";
import MWLayout from "./components/MWLayout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Mine from "./pages/Mine";
import GoodsDetail from "./pages/GoodsDetail";
import MWLoadding from "./components/MWLoadding";
import { connect  } from "react-redux";
class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
         
          {this.props.showLoadding&&<MWLoadding/>}
          <Router>
            <Route path="/" render={(props) => <MWLayout {...props}> <Home {...props} /> </MWLayout>} exact />
            <Route path="/Cart" render={(props) => <MWLayout {...props}><Cart {...props} /></MWLayout>} />
            <Route path="/Mine" render={(props) => <MWLayout {...props}><Mine /></MWLayout>} />
            <Route path="/GoodsDetail/:id" component={GoodsDetail} />
          </Router>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps=(state)=>{
  console.log(state.commonReducer.showLoadding);
  
  return {
    showLoadding:state.commonReducer.showLoadding
  }
}

export default connect(mapStateToProps,null)(App);