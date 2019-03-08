import React, { Component , Fragment } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import QrReader from 'react-qr-reader'
import { QRCode } from "react-qr-svg";
import { enable_Navigation ,
         disable_Navigation } from '../../actions/navigationActions'
import {auth_Machine} from '../../actions/handShakeActions'

// eslint-disable-next-line
import { Paper , Dialog , Grid , Typography } from '@material-ui/core'


export class HandShake extends Component {
  static propTypes = {
  }

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }

  handleError = err => {
    alert('something went wrong')
  }

  constructor(props){
      super(props);
      this.state = {
        result : 'No data' 
      }
  }

  componentDidMount(){
    this.props.auth_Machine(this.props.kioskUrl);
    this.props.disable_Navigation()
  }
  componentWillUnmount(){
    this.props.enable_Navigation()
  }

  render() {
    return (
      <Fragment  >
        <Paper style={{textAlign:'center', width:"100%" , height :"100%"}} >
        {
          //#region  QRCode 
        (this.props.session)?( 
          <Fragment>
             <Typography variant='headline'>Please show your QR Code To Machine</Typography>
              <QrReader
                delay={300}
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
  digitalSign : (state.session) ? (state.session.digitalSign) : 'empty'
})

const mapDispatchToProps = {
  enable_Navigation ,
  disable_Navigation ,
  auth_Machine
}

export default connect(mapStateToProps, mapDispatchToProps)(HandShake)
