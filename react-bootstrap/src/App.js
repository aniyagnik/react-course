import React from "react";
import { Navbar, NavbarBrand }from 'reactstrap'
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props); 
  }
  render() {
    return (
      <div className='app'>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='/'>sdf sdff fds</NavbarBrand>
          </div>  
        </Navbar>
      </div>
    )
  }
}

export default App;