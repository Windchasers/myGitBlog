import {BrowserRouter,Route} from 'react-router-dom'
import React,{Component} from 'react';
import Home from './pages/home'

export default class App extends Component{
    render (){
      return (
      		<BrowserRouter>
      			<Route path='/' component={Home}></Route>
      			</BrowserRouter>
      	)
    }
}
