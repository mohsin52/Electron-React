import React, { Component,Fragment } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {UpdateCart} from '../../actions/cartActions'
import { Table,TableBody, TableCell,  TableRow ,TableHead , Typography , Paper, Button, TableFooter} from '@material-ui/core'

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
                  <Paper >         
            <Table >
              <TableHead>
                <TableRow >
                  <TableCell style={{background : 'black',color: 'white'}} align="right">RaceId</TableCell>
                  <TableCell  style={{background : 'black',color: 'white'}} align="right">HorseId</TableCell>
                  <TableCell style={{background : 'black',color: 'white'}} align="right">Bet Amount</TableCell>
                  <TableCell style={{background : 'black',color: 'white'}} align="right">Jockey</TableCell>
                  <TableCell style={{background : 'black',color: 'white'}} align="right">Horse Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.cart.map((bet) => (
                  <TableRow >
                    <TableCell align="right">{bet.raceId}</TableCell>
                    <TableCell align="right">{bet.horseId}</TableCell>
                    <TableCell align="right">{bet.betAmount}</TableCell>
                    <TableCell align="right">{bet.jockey}</TableCell>
                    <TableCell align="right">{bet.horseName}</TableCell>
                  </TableRow>
                ))}
                 <TableRow >
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">Total Amount</TableCell>
                    <TableCell align="right">{(this.props.cart.reduce((a,b) => a + Number(b.betAmount), 0))}</TableCell>
                  </TableRow>
                  
                 <TableRow >
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell color='primary' align="right"><Button variant="extendedFab"  onClick={()=>{ 
                      this.props.UpdateCart([]) ;
                       alert('Purchased');
                       this.props.history.push('/home')
                       }}>Make Purchase</Button></TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </Paper>
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
  UpdateCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
