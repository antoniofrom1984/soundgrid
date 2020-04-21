//background
let theEl = document.getElementsByClassName('el');
console.log(theEl[0])

Array.from(theEl).forEach( function(e,i) {
  let cores = ["#232323","#2b2928","#3a3735","#af624f","#9b3b23","#742c1a","#edb53d","#e9a30c","#af7a09","#f5f5f5","#329da0","#267678","#194f50"]
  let item = cores[Math.floor(Math.random() * cores.length)]


  e.style.backgroundColor = item
})

let cc = 4;

(function count(cc) {
 document.getElementById("cco").innerHTML = cc;
 if (cc > 0)
   setTimeout(function() { count(--cc); }, 1000);
 if(cc ==0)
 setTimeout(function() {
 cc = 4
 count(--cc); }, 1000);
})(4);


let soundOb = {
  audioBtn0: new Audio('sound/MC09 Dist 7th Synth 01 C.wav'),
  audioBtn1: new Audio('sound/MC09 Dist 7th Synth 02 C.wav'),
  audioBtn2: new Audio('sound/MC09 Dist 7th Synth 03 C.wav')
}


let parent = document.getElementById('parent');

parent.addEventListener('click',player2, false)



function player2(e){
  if(e.target !== e.currentTarget){

    let clickedSound = e.target.id

      if (soundOb[clickedSound].duration > 0 && soundOb[clickedSound].paused) {
        let counter = document.getElementById('cco').innerHTML;

         soundOb[clickedSound].play()
         soundOb[clickedSound].loop = true;

        } else {

        soundOb[clickedSound].pause();
        soundOb[clickedSound].currentTime = 0;
        //Not playing...maybe paused, stopped or never played.
        }


  }
}



// let btn0 = document.getElementById('audioBtn0');
// let audio0 = new Audio('sound/MC09 Dist 7th Synth 01 C.wav');
// let btn1 = document.getElementById('audioBtn1');
// let audio1 = new Audio('sound/MC09 Dist 7th Synth 02 C.wav');
// let btn2 = document.getElementById('audioBtn2');
// let audio2 = new Audio('sound/MC09 Dist 7th Synth 03 C.wav');


// function play() {
//   var audio = new Audio('sound/MC09 Dist 7th Synth 01 C.wav');
//   //audio.play();
//     console.log(Audio)
//   if (audio.duration > 0 && !audio.paused) {
//
//     //Its playing...do your job
//     audio.pause();
//     audio.currentTime = 0;
// } else {
//
// audio.play();
//     //Not playing...maybe paused, stopped or never played.
//
// }

//}
