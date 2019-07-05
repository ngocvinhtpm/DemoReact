import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Product from './components/Product';

class App extends Component {
  render() {
    return (
     		<div> 
	     	
	     		<Header></Header>
				
				<Product></Product>
				 <div className="col-xs-12 col-sm-12 col-md-4 ">
					 the loai
				 </div>
	     		

     		</div>  
    );
  }
}

export default App;
