//click start part
var btn=document.querySelector(".btn");
var guess=document.querySelector("input");
var play=true;
var newWords="";
var newRandomwords=""; //this is the final words




// for h3 part
var game=document.querySelector(".game");
// storing different words in array//
var createWords=["CORONA","PANDA","MOMO","JAVASCRIPT","VODKA","INDIA","LOTUS","CARTOON","KABIR SINGH","PUBG","MACHINE","ENGINEERING","COMPUTER","SMOKER","VECTOR","PYTHON","GOOGLE","MICROSOFT","OIL-INDIA","NETFLIX","QUARANTINE","ELON","INTELLIGENCE","PRODIGY","DATA","MASK","SANITIZE","CHICKEN","ICECREAM","AMAZON","ASSAM","NEMESIS","DESTINATION","PERFECT","HTML","FLOOD","BOLLYWOOD","CODE","SUNRISE","CLASSMATE","BLOOD","MAHATMA","ANONYMOUS"];
// creating a function for get random words from our array
//var scrmbword=randomWords.split("");
var randomNum=Math.floor(Math.random()*createWords.length);
var randomWords=createWords[randomNum];



function wordsOutput(){


    return randomWords;
}
//console.log(scrmbword);

// making words scramble
function scrambleWords(array){


    for(var i=randomWords.length-1;i>=0; i--){
        var tmp=array[i];
var j=Math.floor(Math.random()*(i+1));
array[i]=array[j];
array[j]=tmp;
    }
    return array;
}
btn.addEventListener("click",function(){

    btn.innerHTML=("Guess");
    guess.classList.toggle("hidden");



    newWords=wordsOutput();
    newRandomwords=scrambleWords(randomWords.split("")).join("");
    game.innerHTML=newRandomwords;


    if(play){
        var answer=guess.value;

       if (answer.toLowerCase().trim()===newWords.toLowerCase())
       {

        game.innerHTML="Correct";
        btn.innerHTML="Refresh to play again";
        btn.style.color=" green";

       }

    }
        // unable to make




}



);

document.querySelector(".btn").addEventListener("click", function(){
  var x=new Audio("music/applause-6.mp3");
  x.play();
});
