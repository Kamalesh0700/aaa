import React, { Component } from 'react'
class Message extends Component {

  constructor(){
    super()
    this.state={
      message: "welcome visitor"
    }
  }

  changemessage(){
    this.setState({
      message:"thank u for subscribing"
    })
  }


  render() {
      return (
      <div>
        
      <h1> message is {this.state.message}  </h1>
      <button onClick={ () => this.changemessage()}>subscribe</button>

      </div>
      )
  }
    
}

export default Message