let boxes= document.querySelectorAll(".box")
let res= document.querySelector("#reset")
let newgamebtn=document.querySelector("#newbtn")
let msgcontainer= document.querySelector(".msg-container")
let msg= document.querySelector("#msg")

let turnO= true //playerX and playerO

const winPatterns=[
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      // console.log("clicked")
       if(turnO){ //turn o true 
         box.innerText="O"
         turnO=false;
       } else{
        box.innerText="X"
        turnO=true;
       }
       box.disabled=true;
       checkwinner();
    });
});

// const showWinner=(winner)=>{
//  msg.innerText=`congrats ! winner is , ${winner}`
//  msgcontainer.classList.remove("hide")
// }

const checkwinner = () => {
    for(let pattern of winPatterns){
     let pos1val= boxes[pattern[0]].innerText;
     let pos2val= boxes[pattern[1]].innerText;
     let pos3val= boxes[pattern[2]].innerText;

     if(pos1val!=" " && pos2val!=" "&& pos3val!=" "){
        if(pos1val===pos2val && pos2val===pos3val){
            console.log("Congrats, you are winner!")
            // showWinner(pos1val);
      }
    }
  } 
};