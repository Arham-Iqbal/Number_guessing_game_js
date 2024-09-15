let input=document.querySelector(".data")
let submit=document.querySelector(".sbm")
let new_game=document.querySelector(".new")
let result=document.querySelector(".res")

submit.addEventListener("click",()=>{

    if(x==input.value)
    {
        result.textContent="Correct"
        console.log("correct")
        input.value="";
        reset()
       

    }
    else
    {  
        result.textContent="Wrong"
        console.log("Wrong")
        input.value=""
      
    }
})


new_game.addEventListener("click",()=>{
     x=Math.floor(Math.random()*100 +1 )
    console.log(x)
    result.textContent=""
    input.value=""
});

// get triggers when number will be correct
function reset(){
    x=Math.floor(Math.random()*100 +1 )
    console.log(x)
    result.textContent=""
    input.value=""

}

