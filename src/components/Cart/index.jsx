import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Cart extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>
        Cart 
        <button style= {{ color : 'red'}} onClick={
            ()=> (this.props.history.push('/home'))}>Home</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
