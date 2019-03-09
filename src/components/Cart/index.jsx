import React, { Component,Fragment } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {List , ListItem , ListItemText, Typography  } from '@material-ui/core'


export class Cart extends Component {
  static propTypes = {
  }

  componentDidMount(){
    
  }
  render() {
    return (
      
      <Fragment>
        
          {
            (!this.props.session)?( this.props.history.push('/handshake')) :(
            (this.props.cart && this.props.cart.length >0)?(
              <Fragment>
                <Typography variant='headline'>
                  Items in your cart are
                  </Typography>
                  <List>
                        {
                        this.props.cart.map(bet =>(
                        'HII'
                        )) 
                        }
                  </List>
                </Fragment>
               
            ):(
              <Typography variant='headline'>Oops.. Looks like you have not selected any bets</Typography>
            ))
          }
        
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  session : state.session.active,
  cart : state.cart.bets
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
