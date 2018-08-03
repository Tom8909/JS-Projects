var secretNumber = 4; //declare the secret number variable

var stringGuess = prompt("Guess a number"); //prompt the user to enter a number

var guess = Number(stringGuess); //convert the stringGuess into a number value

if (guess == secretNumber) 
	{alert("YOU GOT IT RIGHT");} //entered correct number

else if (guess < secretNumber) 
	{alert("Too low, you got it wrong");} //incorrect number entered, too low

else 
	{alert("Too high, you got it wrong");} //incorrect number entered, too high