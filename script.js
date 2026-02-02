function goTo(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function unlock() {
  const code = document.getElementById('codeInput').value;
  if (code === "0101") {
    goTo('screen3');
  } else {
    document.getElementById('error').innerText = "Wrong code 😜";
  }
}

function openGift() {
  const pass = prompt("Enter password 💖");
  if (pass === "iloverevji") {
    document.getElementById('giftText').innerText =
      "I love you so much meri cutie si pyaari Jiya 💖";
    setTimeout(() => {
      document.getElementById('continueBtn').style.display = "block";
    }, 5000);
  }
}

function blowCandle() {
  document.querySelector('.candle').style.display = "none";
  setTimeout(() => goTo('screen6'), 1000);

  const video = document.getElementById('fireworks');
  video.play();
}