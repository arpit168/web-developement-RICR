function updateWatch() {
  const hrHand = document.getElementById("hour");
  const minHand = document.getElementById("minute");
  const secHand = document.getElementById("second");

  const digitalTime = document.getElementById("digitalTime");
  const digitalDate = document.getElementById("digitalDate");

  let now = new Date();

  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  // ANALOG CLOCK LOGIC
  let hrDeg = (hr % 12) * 30 + min * 0.5;
  let minDeg = min * 6;
  let secDeg = sec * 6;

  hrHand.style.transform = `translate(-50%, -50%) rotate(${hrDeg}deg)`;
  minHand.style.transform = `translate(-50%, -50%) rotate(${minDeg}deg)`;
  secHand.style.transform = `translate(-50%, -50%) rotate(${secDeg}deg)`;

  // DIGITAL CLOCK LOGIC
  let h = hr < 10 ? "0" + hr : hr;
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;

  digitalTime.innerHTML = `${h}:${m}:${s}`;

  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  digitalDate.innerHTML = `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
}

setInterval(updateWatch, 1000);
updateWatch();
