import React, {Component} from 'react';
import Logo from '../Pictures/Logo.png';
import './App.css';
import NavBar from '../Design/navbar';
import Jumbo from '../Design/jumbo';


class App extends Component{
  render() {
    return (
      <section className="website">
        <NavBar/>
        <div className="App">
          <div className="jumbo">
            <Jumbo/>
          </div>
        </div>
      </section> 
      
    );
  }
}

export default App;
