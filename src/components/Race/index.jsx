import React, { Component, Fragment } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {load_Race} from '../../actions/raceActions'
import {UpdateCart} from '../../actions/cartActions'
import { Table,TableBody, TableCell,  TableRow ,TableHead , Typography , Paper, Button ,OutlinedInput as Input} from '@material-ui/core'
import { black } from 'ansi-colors';

export class Race extends Component {
  static propTypes = {
  }

  constructor(props){
    super(props)
    this.addBet = this.addBet.bind(this)
    this.onChange = this.onChange.bind(this)
    this.setState({})
  }
  onChange(e){
    e.preventDefault();
    this.setState({[e.target.name]:e.target.value})
  }
  addBet(horse,raceId){
    const bet = {
      horseId : horse.id,
      horseName : horse.name,
      jockey : horse.jockey ,
      betAmount : (this.state[`${horse.id}`])? (this.state[`${horse.id}`]):50,
      raceId : raceId
    }
    
    if(this.props.cart.filter(x=>x.horseId === bet.horseId && x.raceId === bet.raceId).length ===0){
      var cart = this.props.cart;
      cart.push(bet);
      this.props.UpdateCart(cart)
      console.log(cart)
    }
    else{
      alert('you already have bet in this. You can update it in the cart');
    }
    console.log(bet)
  }
  render() {  
    console.log(this.props.race)
    return (
      <Fragment>
        <br/>
        {
          (this.props.race)?(
            <Fragment>
            <Typography align='center' variant='headline'>
              Race Details for {this.props.race.name}
            </Typography>
            <Paper >         
            <Table >
              <TableHead>
                <TableRow >
                  <TableCell style={{background : 'black',color: 'white'}} align="right">Horse Name</TableCell>
                  <TableCell  style={{background : 'black',color: 'white'}} align="right">Jockey Name</TableCell>
                  <TableCell style={{background : 'black',color: 'white'}} align="right">Overall Rank</TableCell>
                  <TableCell style={{background : 'black',color: 'white'}} align="right">Current Rank</TableCell>
                  <TableCell style={{background : 'black',color: 'white'}} align="right">Bet Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.race.horses.sort((a,b)=>
                  (a.currentRank > b.currentRank )?1:0
                ).map((horse) => (
                  <TableRow >
                    <TableCell align="right">{horse.name}</TableCell>
                    <TableCell align="right">{horse.jockey}</TableCell>
                    <TableCell align="right">{horse.overallRank}</TableCell>
                    <TableCell align="right">{horse.currentRank}</TableCell>
                    <TableCell align="right">
                      <form>
                        <Input  style={{width:'80px' }} name={`${horse.id}`} defaultValue={0}  type='number' onChange={this.onChange} min={0} ></Input>
                        &nbsp; &nbsp;
                        <Button variant='fab'   color='primary' onClick={()=>this.addBet(horse , this.props.race.id)}>Bet</Button>
                      </form>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          </Fragment>
          ):('Something Went Wrong')
        }
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  race : state.race.race,
  cart : state.cart.bets
})

const mapDispatchToProps = {
  UpdateCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Race)
