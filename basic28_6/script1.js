function submit() {
  const otp = document.getElementById("mail").value;
  console.log(otp);
  const atp = document.getElementById("pas").value;
  console.log(atp);
}

function remove() {
  document.getElementById("mail").value = "";
  document.getElementById("pas").value = "";
}