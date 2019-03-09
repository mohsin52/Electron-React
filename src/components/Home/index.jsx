import React, { Component ,Fragment } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {load_Races} from '../../actions/homeActions'
import {List , ListItem , ListItemText, Typography , Button ,Divider  } from '@material-ui/core'
import {load_Race} from '../../actions/raceActions'


export class Home extends Component {
  static propTypes = {
  }

  constructor(props){
    super(props)
  }

  componentDidMount(){
   this.props.load_Races()
  }
  
  componentWillUnmount(){
    
  }

  render() {
    return (
      <Fragment>
        
          {
            (!this.props.session)?( this.props.history.push('/handshake')) :(
            (this.props.races && this.props.races.length >0)?(
              <Fragment>
                <Typography variant='headline'>
                  Available Races Are
                  </Typography>
                  <List>
                        {
                        this.props.races.map(race =>(
                          <Fragment>
                            <ListItem>
                          <ListItemText> 
                            {race.name}
                          </ListItemText>
                            <Button variant='default' onClick={()=> {this.props.load_Race(race.id); this.props.history.push('/race')} } >More Details</Button>
                            </ListItem>
                            <Divider/>
                          </Fragment>
                        
                        
                        )) 
                        }
                  </List>
                </Fragment>
               
            ):(
              <Typography variant='headline'>Oops.. something went wrong</Typography>
            ))
          }
        
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  session : state.session.active,
  races : state.home.races
})

const mapDispatchToProps = {
  load_Races,
  load_Race
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
