import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Product from './components/Product';

class App extends Component {
  render() {
    return (
     		<div> 
	     	
	     		<Header></Header>
				
				 <div class="col-xs-12 col-sm-12 col-md-8 ">
					<div className="row">
						<div className="col-xs-12 col-sm-6 col-md-4">
							<Product
							name ="Iphone 6"
							Price ="15000000"
							image = "https://cdn.tgdd.vn/Files/2018/05/10/1087515/ro-ri-hinh-anh-chiec-dien-thoai-gap-man-hinh-doc-dao-cua-samsung-3.jpg"
							/>	
								
							
						</div>

						<div className="col-xs-12 col-sm-6 col-md-4">
							<Product
							name ="Iphone 7"
							Price ="25000000"
							image="https://phatthanhmobile.vn/wp-content/uploads/2014/05/samsung-mat-den-man-hinh.jpg"
							/>
							
							
						</div>
						<div className="col-xs-12 col-sm-6 col-md-4">
							<Product
								name ="Iphone 8"
								Price ="55000000"
								image ="http://imgt.taimienphi.vn/cf/Images/2017/1/ddt/1/7-mau-dien-thoai-chup-anh-dep-ngay-tet.jpg"
							/>
							
							
						</div>
					
					</div>
				 </div>
				 <div class="col-xs-12 col-sm-12 col-md-4 ">
					 the loai
				 </div>

     		</div>  
    );
  }
}

export default App;
