import ReactDOM from "react-dom";
import React from "react";
import kdl from './kdl.jpg';
import kdl2 from './kdl2.jpg';
import kdl4 from './kdl4.jpg';
import kdl5 from './kdl5.jpg';
import styles from './demo.module.css';
import './App.css';
class Task4 extends React.Component{
  render(){
    const mystyle={
      fontFamily:"cursive",
      textAlign:"center"
    };
    const imgstyle={
      marginLeft:"20px",
      borderRadius:"10px"
    };
    const imgstyle2={
      float:"right",
      borderRadius:"10px"
    };
    const imgstyle3={
      float:"bottom",
      borderRadius:"10px",
      marginLeft:"20px"
    };
    const imgstyle4={
      float:"right",
      borderRadius:"10px"
    };
    return(
      <div>
        <h1 style={{color:'pink',textAlign:'center'}}>HAPPY MORNING TO ALL!</h1>
        <h2 style={mystyle}>Enjoy ur life</h2>
        <h2 className={styles.heading}>:)</h2>
        <img src={kdl} alt="logo" width="300" height={"300"} style={imgstyle}></img>
        <img src={kdl2} alt="logo" width="300" height="300" style={imgstyle2}></img>
        <center><video width="300" height="300" controls src="vdo.mp4"></video></center>
        <br/>
        <img src={kdl4} style={imgstyle3} width={"300"} height={300}></img>
        <img src={kdl5} style={imgstyle4} width={300} height={300}></img>
      </div>
    )
  }
}
ReactDOM.render(<Task4/>,document.getElementById('root'));
export default Task4;