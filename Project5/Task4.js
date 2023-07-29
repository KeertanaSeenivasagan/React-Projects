

class Demo{
  method(n){
    var n,res,s=0;
    while(n)
    {
      res=n%10;
      s=s+res;
      n=Math.floor(n/10);
    }
    document.getElementById('root').innerHTML=s;
  }

}
var obj=new Demo();
obj.method(777);