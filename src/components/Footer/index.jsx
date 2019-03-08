import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {  login_user } from '../../actions/handShakeActions'

const electron = window.require('electron');
// eslint-disable-next-line
const fs = electron.remote.require('fs');
const ipcRenderer  = electron.ipcRenderer;


export class Footer extends Component {
  static propTypes = {

  }
  constructor(props){
    super(props)
    this.handleNewData = this.handleNewData.bind(this);
  }

  componentDidMount(){
    ipcRenderer.on('new_data',this.handleNewData);
  }
  componentWillUnmount(){
    ipcRenderer.removeListener('new_data',this.handleNewData);
  }
  handleNewData(event,data){
    if(data){
      if(data.type === 'raceresults'){

      }
      else if(data.type === 'sessionstatus' && data.body.kioskId === this.props.kisokId){
        this.props.login_user(data.body.isActive)
      }
      else {

      }
    }
    
    console.log(data)
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  kioskId : (state.session) ? (state.session.kioskUrl) : 'Infosys Kiosk Machine',
})

const mapDispatchToProps = {
  login_user
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
