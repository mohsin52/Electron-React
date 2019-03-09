import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {  login_user } from '../../actions/handShakeActions'
import { load_Race } from '../../actions/raceActions'

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
    console.log(data)
    if(data){
      if(data.type === 'raceresults'){
        this.props.load_Race(data.body.id)
      }
      else if(data.type === 'sessionstatus'){
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
  login_user,
  load_Race
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
