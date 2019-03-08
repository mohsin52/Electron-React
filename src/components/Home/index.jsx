import React, { Component ,Fragment } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'


export class Home extends Component {
  static propTypes = {
  }

  constructor(props){
    super(props)
  }

  componentDidMount(){
    if(!this.props.session){
      window.location.href = '/handShake'
    }
  }
  
  componentWillUnmount(){
    
  }

  render() {
    return (
      <Fragment>

        <button onClick={ ()=> {this.props.history.push('/handshake')}} >
        handShake
        </button>
        </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  session : state.session.active
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
