import React, { Component, Fragment } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {load_Race} from '../../actions/raceActions'
import { Table,TableBody, TableCell,  TableRow ,TableHead , Typography , Paper} from '@material-ui/core'
import { black } from 'ansi-colors';

export class Race extends Component {
  static propTypes = {
  }

  constructor(props){
    super(props)

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
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.race.horses.sort((a,b)=>
                  (a.currentRank<b.currentRank)?1:0
                ).map((horse) => (
                  <TableRow >
                    <TableCell align="right">{horse.name}</TableCell>
                    <TableCell align="right">{horse.jockey}</TableCell>
                    <TableCell align="right">{horse.overallRank}</TableCell>
                    <TableCell align="right">{horse.currentRank}</TableCell>
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
  race : state.race.race
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Race)
