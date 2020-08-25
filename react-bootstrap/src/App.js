import React from "react";
import { Navbar, NavbarBrand }from 'reactstrap'
import "./App.css";
import { DISHES } from './shared/dishes';
import Menu from './components/MenuComponent';

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      dishes:DISHES
    }
  }
  render() {
    return (
      <div className='app'>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='/'>sdf sdff fds</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>  
      </div>
    )
  }
}

export default App;