import React from "react";
import ReactDOM from "react-dom";
class Home extends React.Component{
   render(){
    const mystyle={
        fontFamily:"cursive",
        color:"red",
    }
    const mystyle2={
        fontFamily:"cursive"
    }
    const mystyle3={
        borderRadius:"10px",
        boxShadow:"20px"
    }
    return(
        <div>
            <center><h1 style={mystyle}>SHOP WITH US</h1></center>
            <center><h2>The Coffee Shop</h2></center>
            <center><img style={mystyle3} src="https://www.whiskaffair.com/wp-content/uploads/2021/04/Chocolate-Cold-Coffee-2-3.jpg" width={300} height={300} /></center>
            <center><p style={mystyle2}>Heal Yourself!!</p></center>
        </div>
    )

   }
  
}

export default Home;