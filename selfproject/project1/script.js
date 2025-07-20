var gpt= document.querySelector("h5")

var btn = document.querySelector("#add")
var check =0

btn.addEventListener("click", function(){
    if( check == 0){

    gpt.innerHTML= " Friends"
    gpt.style.color = "green"
    btn.innerHTML = " Remove friend"
    check=1
    }
    else{
        gpt.innerHTML ="Stranger"
        gpt.style.color = "Red"
         btn.innerHTML = " Add friend"
        check=0
    }
})

