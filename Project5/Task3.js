



function getSum(n)
{
	var sum = 0;
	while (n != 0) {
		sum = sum + n % 10;
		n = parseInt(n / 10);
	}
	return sum;
}
var n = 77;
document.getElementById('root').innerHTML=getSum(n);

