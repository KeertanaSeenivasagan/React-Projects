
import React from "react";
import ReactDOM from 'react-dom';
var a=(x) =>
{
  var a=121;
  var b=11;
  if((a%b)==0){
    a="divisible by 11";
  }
  else{
    a="not divisible by 11";
  }
  document.getElementById('root').innerHTML=a;
}
a(30);

