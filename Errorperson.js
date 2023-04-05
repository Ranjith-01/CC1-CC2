import React from 'react'

 /*class ErrorHandling extends React.Component {
    constructor(props){
        super(props)
        this.state={counter:0}
    }
    hanle(){this.setState(({counter})=>({counter:counter+1}))}
  render() {
    if(this.state.counter==5){
        throw new Error("Counter reached 5")
    }
    return (
      <div>
      <p>counter:{this.state.counter }</p>
      <button type="button" onClick={this.handle.bind(this)}>click</button>
      </div>
    )
  }
}*/

 function Student(props)
 {
     if(props.name === "Ajay")
     {
         throw new Error("Ajay student is not accepted")
     }
     return(
         <>
         <p>{props.name}</p>
         </>
     )
 }
 export default Student;
