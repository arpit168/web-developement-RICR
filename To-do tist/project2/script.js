function calculate(){

    const DOB = Number(document.getElementById("DOB").value.split("-")[0]);

    const CD = Number(document.getElementById("CD").value.split("-")[0]);

    const Age = CD -  DOB ;
    document.getElementById("your_age").innerText = "Your age is : " + Age + " Years";

    

}