import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const electron = window.require('electron');
// eslint-disable-next-line
const fs = electron.remote.require('fs');
const ipcRenderer  = electron.ipcRenderer;

export class Home extends Component {
  static propTypes = {
  }

  constructor(props){
    super(props)
    this.handleNewData = this.handleNewData.bind(this);
    ipcRenderer.send('getData', 'clicked');
  }

  handleNewData(event,data){
    console.log(data)
  }

  componentDidMount(){
    ipcRenderer.on('new_data',this.handleNewData);
  }
  componentWillUnmount(){
    ipcRenderer.removeListener('new_data',this.handleNewData);
  }

  render() {
    return (
      <div>
        Home
        <button style={{color:'blue'}} onClick={
            ()=> 
            (this.props.history.push('/cart'))
            }>Cart</button>
        
        <button style={{color:'blue'}} onClick={
            ()=> 
            (this.props.history.push('/handshake'))
            }>HandShake</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
