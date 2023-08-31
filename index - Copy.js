
for (let i = 0; i < 7; i++) {
   document.querySelectorAll("button")[i].addEventListener("click", clickHandle);
 }
function clickHandle (){
   console.log(this);
    
   if( this==document.querySelectorAll("button")[0]){
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
   }
   else if (this==document.querySelectorAll("button")[1]){
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
   }
   else if (this==document.querySelectorAll("button")[2]){
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
   }
   else if (this==document.querySelectorAll("button")[3]){
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
   }
   else if (this==document.querySelectorAll("button")[4]){
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
   }
   else if (this==document.querySelectorAll("button")[5]){
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
   }
   else if (this==document.querySelectorAll("button")[6]){
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
   }
}


