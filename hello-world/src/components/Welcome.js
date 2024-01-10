import React, { Component } from 'react'
class Welcome extends Component {
  render() {

      return(
        <div>
         <h1> name is {this.props.name} belongs to {this.props.dept} </h1>
        </div>
      )
  }
    
}

export default Welcome