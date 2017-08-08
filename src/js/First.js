import React, { Component } from 'react';

import '../App.css';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class First extends Component {
    constructor(){
      super()
      this.state={
        cont:[]
      }
    }

    componentDidMount(){
      $.ajax({
          type:"get",
          url:"http://localhost:8005/news/news",
          async:true, 
         /* data:{
            id:window.location.href.split('?')[1]
          },   */
          success:function(e){
            console.log(e)
            this.setState({
               cont:e[0]
            })
          }.bind(this)
        })
  }
  render() {
    return (
      <div>
         <div className="main">{this.state.cont.content}</div>      
      </div> 

    );
  }
}

export default First;
