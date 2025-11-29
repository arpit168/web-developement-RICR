function start() {
  console.log("Game started");
  document.getElementById("roll1").disabled = false;
  document.getElementById("restart").disabled = false;
  document.getElementById("start").disabled = true;
}

function restart() {
  window.location.reload();
}

function p1play() {
  console.log("Game Player1Playing");
  let score = Number(document.getElementById("p1sc").innerText);
  const DF = Math.floor(Math.random() * 6) + 1;

  switch (DF) {
    case 1:
      document.getElementById("dice1").src = "./img/dices1.jpg";
      break;
    case 2:
      document.getElementById("dice1").src = "./img/dices2.jpg"; 
      break
    case 3:
      document.getElementById("dice1").src = "./img/dices3.jpg";
      break
    case 4:
      document.getElementById("dice1").src = "./img/dices4.jpg";
      break
    case 5:
      document.getElementById("dice1").src = "./img/dices5.jpg";
      break
    case 6:
      document.getElementById("dice1").src = "./img/dices6.jpg";
      break
      default:
        document.getElementById("dice1").src="./img/dices6.jpg"
        break
  }

  if (DF === 6) {
    document.getElementById("roll1").disabled = true;
    document.getElementById("roll2").disabled = false;
  } else {
    score = score + DF;
    document.getElementById("p1sc").innerText = score;
  }
}
function p2play() {
  console.log("Game Player2Playing");
  let score = Number(document.getElementById("p2sc").innerText);
  const DF = Math.floor(Math.random() * 6) + 1;
   switch (DF) {
    case 1:
      document.getElementById("dice2").src = "./img/dices1.jpg";
      break;
    case 2:
      document.getElementById("dice2").src = "./img/dices2.jpg"; 
      break
    case 3:
      document.getElementById("dice2").src = "./img/dices3.jpg";
      break
    case 4:
      document.getElementById("dice2").src = "./img/dices4.jpg";
      break
    case 5:
      document.getElementById("dice2").src = "./img/dices5.jpg";
      break
    case 6:
      document.getElementById("dice2").src = "./img/dices6.jpg";
      break
      default:
        document.getElementById("dice2").src="./img/dices6.jpg"
        break
  }

 
  if (DF === 6) {
    document.getElementById("roll1").disabled = false;
    document.getElementById("roll2").disabled = true;
  } else {
    score = score + DF;
    document.getElementById("p2sc").innerText = score;
  }
}
