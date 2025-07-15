function on(){
    let background= document.getElementById('secondbox');
    background.style.backgroundColor='black';
    background.style.color='red';
    alert(" Black/Red");
    
      
}


function off(){
    let background= document.getElementById('secondbox');
    background.style.backgroundColor='red';
    background.style.color='black';
     alert(" Red/Black");
      
}

function none(){
    let background= document.getElementById('secondbox');
    background.style.backgroundColor='';
    background.style.color='';
    alert(" Remove");
      
}

