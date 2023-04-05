import React from 'react'

/*export default class DerivedState extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={myName:"Panvith"}
    }
    shouldComponentUpdate(){
          return false;
    }
    changeName =()=>{this.setState({myName:"veraku"});}
    componentDidMount()
    {
        setTimeout(() => {this.setState({myName:"Ranjith kumar"})},5000);
    }
    /*static getDerivedStateFromProps(props,state)
    {
        return({myName:props.newName})
    }

    render()
    {
        return(
            <>
            <p>{this.state.myName}</p>
            </>
        )
    }
}

 export default class Header extends React.Component {
    constructor(props)
    {
     super(props)
     this.state={myName:"veraku"}
    }
 
    componentDidMount()
    {
     setTimeout(()=>{this.setState({myName:"Ranjith"})},5000)
    }
 
    getSnapshotBeforeUpdate(pProps,pState)
    {
     document.getElementById("id1").innerHTML="Before updating my name is "+pState.myName;
    }
 componentDidUpdate()
    {
     document.getElementById("id2").innerHTML="After Updating my name is "+this.state.myName
    }
    render()
    {
     return(
         <>
         My name is {this.state.myName}
         <div id="id1"></div>
         <div id="id2"></div>
         </>
     )
    }
 }


 export default class DerivedState extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={myName:"Veraku"}
    }

    shouldComponentUpdate()
    {
        return true;
    }
   changeName=()=>{ this.setState({myName: "Ranjith kumar V"});}

    render()
    {
        return(
            <>
            <p>My name is {this.state.myName}</p>
            <button type='button' onClick={this.changeName}>Click me</button>
            </>
        )
    }
}*/


export default class App1 extends React.Component {
    constructor() {
       super();
       this.state = {
          delete: false,
       };
    }
    render() {
       return (
          <div>
             <h1>User List</h1>
             <button onClick={() => this.setState({ delete: true })}>
                Delete Users
             </button>
             {this.state.delete ? null : <User />}
          </div>
       );
    }
 }
 class User extends React.Component {
    componentWillUnmount() {
       alert('Deleted User successfully');
    }
    render() {
       return (
          <div>
             <h3>Username: VERAKU</h3>
             <h3>Email: veragu464@gmail.com</h3>
             
          </div>
       );
    }
 }