import React from 'react';
import Image from './baileyandsammy.png';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';


function App() {
  return (
    <section className="App">
      <div class={Jumbotron}>
        <h1>I love you Sammy!</h1>
        <p className="App"><img src={Image}/></p>
      </div>
    </section>
  )
}

export default App;
