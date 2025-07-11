document.addEventListener( "keydown" , handlekeypress);
function handlekeypress(event){
    const key = event.key;
    const code = event.code;

    // document.getElementById("output").textContent = " You have Pressed key " + key + " with code " +code;
     document.getElementById("output").textContent = ` You have Pressed key ${key} with code ${code}`;
}



