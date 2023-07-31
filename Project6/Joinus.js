import React from "react";
import ReactDOM from 'react-dom';
class Join extends React.Component{
  constructor(){
    super();
    this.state={username:"",age:null,errmsg:""};

  }
  uservalue=(event)=>
  {
    let n=event.target.name;
    let v=event.target.value;
    let err="";
    if(n==="phn"){
      if(v!==""&&!Number(v))
      {
        err=<strong>invalid,phone number must be number</strong>
      }
          
    }
    this.setState({errmsg:err});
    this.setState({[n]:v});
}
  render()
    {
      return(
        
        <div>
            <center><h1>REGISTRATION FORM</h1></center>
          <br/>
          <form>
          Enter your name:<input type="text" name="username" onChange={this.uservalue}/>
          <br/>
          Address:<input type="textarea" name="address" onChange={this.uservalue}/>
          <br/>
          Enter your Phone number:<input type="text" name="phn" onChange={this.uservalue}/>{this.state.errmsg}
          <br/>
        </form>
        </div>
      )
    }
  
    

}

export default Join;

