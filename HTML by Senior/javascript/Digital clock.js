const hourEl = document.getElementById("hour");
const minuEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h >= 12) {
    if (h > 12) {
      h = h - 12;
    }
    ampm = "PM";
  }

  // Add leading zeros to minutes and seconds if they are less than 10
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
}

updateClock();
setInterval(updateClock, 1000); // Update the clock every second