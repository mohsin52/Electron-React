import React from 'react'
import {Switch , Route  } from 'react-router'
import {BrowserRouter}  from 'react-router-dom'
import Home from '../components/Home';
import Cart from '../components/Cart'
import HandShake from '../components/HandShake'
import Race from '../components/Race'

export default function Routes() {
  
    return (
        <BrowserRouter>   
            <Switch>
                <Route exact path="/" component = {Home} />
                <Route path="/cart" component={Cart} />
                <Route path="/home" component = {Home} />
                <Route path='/race' component={Race} />
                <Route path="/handshake" component= {HandShake} />
                <Route path="**" component={HandShake} />
            </Switch> 
          </BrowserRouter>
    )
  }