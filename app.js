let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let h2=document.querySelector('h2');
let maxi=0;
let btns=["red","green","yellow","purple"];

document.addEventListener('keypress',function(){
    if(started==false){
    started=true;
    }
    levelUp();
});

function gameflash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
      btn.classList.remove("userflash");
    },250);
  }

function levelUp(){
    userSeq=[];
    level++;
    
    h2.innerText=`Level ${level}`;

    let randomIdx=Math.floor(Math.random()*3);
    let randColor=btns[randomIdx];
    let randomBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);

    gameflash(randomBtn);
}
function checkAns(idx){
  
    console.log(`level ${level}`);
    if(userSeq[idx]===gameSeq[idx]){
      if(userSeq.length==gameSeq.length)
      {
        setTimeout(levelUp,1000);
      }
    }
    else{
      
         if(level>maxi){
            maxi=level;
            h2.innerHTML=`Game over!! <b> highest score till now is ${level}</b> <br>
            press any key to restart`;
         }
         else{
            h2.innerHTML=`Game over!! <b>Your Score was ${level}</b> <br>
            press any key to restart`;
         }
         
    document.querySelector('body').style.backgroundColor="red";

        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },50);
        reset();
    }
}
function btnPress(){
    let btn=this;
    //console.log('button was pressed');
   userflash(btn);
  let userColor=btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length-1);
}

let Allbtns=document.querySelectorAll('.btn');

for(btn of Allbtns){
    btn.addEventListener('click',btnPress);
}
function reset(){
    started=false;
    level=0;
    userSeq=[];
    gameSeq=[];
}