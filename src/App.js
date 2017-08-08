import React, { Component } from 'react';
import { Carousel ,Icon} from 'antd';
import './App.css';
import $ from 'jquery';
import First from './js/First';
import Second from './js/Second';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
	constructor(){
	    super()
	    this.state={
	      con:[]	  
	    }
	 }
	 componentDidMount(){
	 	$.ajax({
	        type:"get",
	        url:"http://localhost:8005/news/news",
	        async:true,
	        contentType:false,
	        processData:false,
	        success:function(data){
	        	console.log(data)
	          this.setState({
	           con:data	     	           
	          })  
	        }.bind(this)      	         
	    })
	    // $('.boxF').css(" display","none");
	    // $('.boxS').css(" display","none");
	 	$('.add').click(function(){
	 		$('.boxF').css("display","block");
	 		$.ajax({
		        type:"post",
		        url:"http://localhost:8005/news/xiugai",
		        async:true,
		        contentType:false,
		        processData:false,
		        success:function(data){
		        	console.log(data)
		          this.setState({
		           con:data	     	           
		          })  
		        }.bind(this)      	         
		    })
	 	})
	 	$('.delete').click(function(){
	 		$('.boxS').css("display","block");
	 		$.ajax({
		        type:"post",
		        url:"http://localhost:8005/news/delete",
		        async:true,
		        contentType:false,
		        processData:false,
		        success:function(data){
		        	console.log(data)
		          this.setState({
		           con:data	     	           
		          })  
		        }.bind(this)      	         
		    })
	 	})
	 }	
  render() {
    return (
    	<Router>
          <div>
              <div className="wrap">
              	<ul className="app">
	                  {this.state.con.map(function(con,i){
	                  		return(
	                  		<li key={i}>
			                    <Link to={`${con.to}?${con.id}`} >{con.title}</Link>
			                    <span className="delete"><Icon type="close" /></span><span className="add"><Icon type="edit" /></span>
			                </li>
	                  		)
	                  })}
	                  
	              </ul>
	              <div className="boxF">
	              		<input type="text" placeholder="请输入标题"/><br/>
	              		<input type="text" placeholder="请输入内容"/><br/>
	              		<button>添加</button>
	              </div>
	              <div className="boxS">
	              		<input type="text" placeholder="请输入标题"/><br/>
	              		<input type="text" placeholder="请输入内容"/><br/>
	              		<button>删除</button>
	              </div>
              </div>
       		<Route exact path="/First" component={First}/>
          	<Route path="/Second" component={Second}/>
          </div>
        </Router>
    );
  }
}

export default App;
