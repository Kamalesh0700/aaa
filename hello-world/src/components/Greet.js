import React from 'react'

//function Greet(){
//  return <h1>hi kamalesh</h1>
//}


//arrow function 
const Greet = props =>{
  console.log(props)
  return (  
    <div>
  <h1>hello {props.name} welcome to {props.dept} </h1> 
  {props.children}
  </div>
  )
}
export default Greet  