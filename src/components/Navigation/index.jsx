import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { set_Active_Tab  } from '../../actions/navigationActions'
import { AppBar , Tabs , Tab, Typography} from '@material-ui/core'
import {logout_user} from '../../actions/handShakeActions'



export class Navigation extends Component {
  static propTypes = {
  }

  constructor(props){
    super(props)
    this.handleActive = this.handleActive.bind(this)
  }

  handleActive(num,path){
    this.props.set_Active_Tab(num)
    if(path === '/logout'){
    }
    window.location.href = path;
  }

  render() {
    
    return (
      <div>
        {
          (this.props.show) ?(
            <AppBar position="static">
            <Tabs value={this.props.active}>
              <Tab label="Home" onClick={()=> { this.handleActive(0,'/home');}} />
              <Tab label={'Cart'+this.props.cartCount}  onClick={() => {this.handleActive(1 ,'/cart');}} />
              <Tab label="Logout" onClick={()=>{this.handleActive(2 ,'/logout'); }} />
            </Tabs>
            </AppBar>  )
          :
            ''
        }
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  show : (state.navigation) ? state.navigation.show : false,
  active : (state.navigation) ? state.navigation.active : 0 ,
  cartCount : (state.cart) ? state.cart.count : 0
})

const mapDispatchToProps = {
  set_Active_Tab,
  logout_user
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
