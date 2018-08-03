var age = prompt("Please enter your age: ");
if (age<18) 
	{console.log("Sorry, you're not old enough to enter")}
	else if (age<21) 
		{console.log("You can enter but you can't drink")}
	else 
		{console.log("You can enter and drink")};

if (age < 0) 
	{console.log("Error")} //age is a negative number i.e. less than 0
else if (age == 21) 
	{console.log("Happy Birthday Bitch")} //if user enters 21
else if ((age%2)== 1)
	{console.log("Your age is odd")}//if age is odd, not evenly divisible by 2
else if (age % Math.sqrt(age) === 0) 
	{console.log("Perfect Square")} //age = perfect square
else
	{console.log("Your age is " + age)}; //default message