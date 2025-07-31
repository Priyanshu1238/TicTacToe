let boxes=document.querySelectorAll(".box");

let reset=document.querySelector("#reset");
let newgame=document.querySelector("#New-game");
let msgCon=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


reset.addEventListener("click",()=>{
    resetGame();
})
newgame.addEventListener("click",()=>{
    resetGame();
})

let turn0=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turn0=true;
    enableBox();
    msgCon.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0)
        {
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true
        }
        box.disabled=true;
        checkWinner();
    });
});
const winnerMessage=(winner)=>{
    msg.innerText=`Congratulations ,The winner is ${winner}`;
    msgCon.classList.remove("hide");
}
const disableBox=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}
const enableBox=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText=""
    })
}
const checkWinner=()=>{
    for(let p of winPatterns)
    {
        let p1=boxes[p[0]].innerText;
        let p2=boxes[p[1]].innerText;
        let p3=boxes[p[2]].innerText;
        if(p1!="" &&p2!=""&&p3!="")
        {
            if(p1===p2 && p2===p3)
            {
                disableBox();
                winnerMessage(p1);
            }
        }

    }
}
