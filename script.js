const timer = document.querySelector('#timer');
const audio = document.querySelector('audio#victoryAudio');

const desiredDate = new Date('2021-08-12T16:30:00');

let countdownInterval;

const confettiSettings = { target: 'my-canvas' };
const confetti = new ConfettiGenerator(confettiSettings);

const addZeros = (value) => (value < 10 && value > -1 ? `0${value}` : value);

const victory = () => {
   clearInterval(countdownInterval);
   timer.textContent = `00 : 00 : 00 : 00`;
   timer.style.animation = 'changeColors 1s linear infinite alternate, slideMiddleDown 5s linear 1 8s forwards';
   const changeText = () => {
      timer.textContent = 'FINALLY PEACE ✌';
      timer.style.animation = 'slideUpMiddle 5s linear 1 forwards, glow 1s ease-in-out infinite alternate';
      timer.style.color = 'gold';
   };
   setTimeout(changeText, 13000);
   confetti.render();
   audio.play();
};

const countdown = () => {
   const timeLeft = desiredDate - new Date();
   const days = Math.floor(timeLeft / 86400000);
   const hours = Math.floor(timeLeft / 3600000 - days * 24);
   const minutes = Math.floor(timeLeft / 60000 - hours * 60 - days * 1440);
   const seconds = Math.floor(timeLeft / 1000 - minutes * 60 - hours * 3600 - days * 86400);
   // timer.textContent = `${days} : ${hours} : ${minutes} : ${seconds}`;
   timer.textContent = `${addZeros(days)} : ${addZeros(hours)} : ${addZeros(minutes)} : ${addZeros(seconds)}`;
   if (timeLeft <= 0) victory();
};

countdownInterval = setInterval(countdown, 1000);
