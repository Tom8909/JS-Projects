console.log("ALL NUMBERS BETWEEN -10 && 19");
var num = -10;

while(num < 20)
{
	console.log(num)
	num++;
}

console.log("EVEN NUMBERS BETWEEN 10 & 40");

var num = 10;

while(num <40)
{
	if (num  % 2===0) 
		{console.log(num);}
	
	num++;
}


console.log("ODD NUMBERS BETWEEN 300 & 333");

var num = 300;

while(num <334)
{
	if (num  % 2===1) 
		{console.log(num);}
	
	num++;
}


console.log("NUMBERS DIVS BY 5 AND 3 BETWEEN 5 AND 50");

var num = 5;

while(num <=50)
{
	if (num  % 5===0 && num % 3===0) 
		{console.log(num);}
	
	num++;
}