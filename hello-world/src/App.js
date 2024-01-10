import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

class App extends Component {
  render(){
  return (
    <div className="App">
     {/* <Greet name="a" dept="IT" />
      <Greet name="b" dept="ece"> 
      <button>click!!</button>
      <p>hello </p>
      </Greet>
  <Welcome name="kamalesh" dept="IT"/> 
   <Message/> */}
   <Counter/>
    </div>
   );
}
}
export default App;
