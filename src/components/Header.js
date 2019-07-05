import React, { Component } from 'react';
class Header extends Component {
  render() {
    return (
    	<nav className="navbar navbar-inverse">
    		<div className="container-fluid">
    			<ul className="nav navbar-nav">
    				<li className="active">
    					<a href="#">Trang chủ </a>
    				</li>
    				<li className="active">
    					<a href="">Liên hệ </a>
    				</li>
				
    			</ul>
    		</div>
    	</nav>
    );
  }
}

export default Header;
