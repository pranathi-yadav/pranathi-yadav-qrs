
var y = Math.floor(Math.random()* 10 + 1);

var x = document.getElementById("guessField");

if(x == y){
    alert("CONGRATULATIONS ! ! ! "+playername+"YOU GUESSED IN RIGHT IN"+ guess + "GUESS" );
    guess= 1;
}

 else if(x > y){
    guess++;
    alert("OOPS SORRY ! ! !  TRY A SMALLER NUMBER");
 }
else{
   
    alert("OOPS SORRY ! ! !  TRY A GREATER NUMBER");
}

function playAgain(){
  y =   Math.floor(Math.random()* 10 + 1);
}