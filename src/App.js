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
							image = "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiy45f8rp3jAhUL73MBHd36CQYQjRx6BAgBEAU&url=https%3A%2F%2Fwww.dienmayxanh.com%2Fkinh-nghiem-hay%2Fro-ri-hinh-anh-chiec-dien-thoai-gap-man-hinh-doc-d-1087515&psig=AOvVaw2AXJ7dDkNB6A4WAefM-cfw&ust=1562401921320269"
							/>	
								
							
						</div>

						<div className="col-xs-12 col-sm-6 col-md-4">
							<Product
							name ="Iphone 7"
							Price ="25000000"
							image="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj82Nntrp3jAhXx63MBHeu9BAUQjRx6BAgBEAU&url=https%3A%2F%2Fcongnghe.tuoitre.vn%2F10-smartphone-chup-anh-dep-nhat-hien-nay-20181103105042132.htm&psig=AOvVaw2AXJ7dDkNB6A4WAefM-cfw&ust=1562401921320269"
							/>
							
							
						</div>
						<div className="col-xs-12 col-sm-6 col-md-4">
							<Product
								name ="Iphone 8"
								Price ="55000000"
								image ="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiLtIqIr53jAhWt6nMBHQmDCwUQjRx6BAgBEAU&url=http%3A%2F%2Fvuanhiepanh.com%2Fnews%2FChup-anh-bang-dien-thoai%2FCac-che-do-chup-anh-tren-smartphone-1190.html&psig=AOvVaw2AXJ7dDkNB6A4WAefM-cfw&ust=1562401921320269"
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
