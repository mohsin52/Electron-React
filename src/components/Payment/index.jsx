import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Payment extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>
        Payment
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)
