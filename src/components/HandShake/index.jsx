import React, { Component , Fragment } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import QrReader from 'react-qr-reader'
import { QRCode } from "react-qr-svg";
import { enable_Navigation ,
         disable_Navigation } from '../../actions/navigationActions'
import {auth_Machine , get_user_data } from '../../actions/handShakeActions'

// eslint-disable-next-line
import { Paper , Dialog , Grid , Typography } from '@material-ui/core'


export class HandShake extends Component {
  static propTypes = {
  }

  handleScan = data => {
    if (data) {
      this.setState({
        result: data,
        delay : 60000
      })
      this.props.get_user_data({ value : data }) 
    }
  }

  handleError = err => {
    alert('something went wrong')
  }

  constructor(props){
      super(props);
      this.state = {
        result : null,
        delay : 3000
      }
  }

  componentDidMount(){
    this.props.auth_Machine(this.props.kioskUrl);
    this.props.disable_Navigation()
    
  }
  componentDidUpdate(){
    
  }
  componentWillUnmount(){
    this.props.enable_Navigation()
  }

  render() {
    
    return (
      <Fragment  >
        {
          (this.props.user)?(this.props.history.push('/home'))
            :(console.log('no user still'))
        } 
        <Paper style={{textAlign:'center', width:"100%" , height :"100%"}} >
        {
          //#region  QRCode 
        (this.props.session)?( 
          <Fragment>
             <Typography variant='headline'>Please show your QR Code To Machine</Typography>
              <QrReader
                delay={this.state.delay}
                
                onError = {this.HandleError}
                onScan={this.handleScan}
                style={{ width: '300px' , height :'300px' , margin : '0 auto' }}
              />
          </Fragment>
        )
        :(
            <Fragment>
              <Typography variant='headline'>Scan the Following QR code to Proceed</Typography>
              <QRCode 
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="Q"
                style={{ width: 256  }}
                value= { JSON.stringify({
                  data : this.props.kioskUrl,
                  digitalSignature : this.props.digitalSign
                })}
              />
            </Fragment>
        )
         //#endregion
        }
        </Paper>
        <Typography variant='display1'>{this.state.result}</Typography>
        <button onClick={()=>{this.props.history.push('/home')}}>home</button>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  session : (state.session) ? state.session.active : false,
  kioskUrl : (state.session) ? (state.session.kioskUrl) : 'Infosys Kiosk Machine',
  digitalSign : (state.session) ? (state.session.digitalSign) : 'empty',
  user : (state.session.user) ? (state.session.user) : null
})

const mapDispatchToProps = {
  enable_Navigation ,
  disable_Navigation ,
  auth_Machine,
  get_user_data
}

export default connect(mapStateToProps, mapDispatchToProps)(HandShake)
