let startTime;
let elapsedTime = 0;
let timerInterval;
let time = document.getElementById('time');

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = window.requestAnimationFrame(updateTime);
}

function stop() {
  window.cancelAnimationFrame(timerInterval);
  timerInterval = null;
}

function reset() {
  stop();
  elapsedTime = 0;
  time.textContent = '00:00:00';
}

function updateTime() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  const minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  time.textContent = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
  timerInterval = window.requestAnimationFrame(updateTime);
}

function pad(number) {
  return number.toString().padStart(2, '0');
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    document.getElementById("time").innerHTML = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
  }
  
  setInterval(updateClock, 1000);
  

  
    