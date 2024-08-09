// Créer la logique de compte à rebours

const countdown = () => {
  let totalSeconds = choice.value * 60;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  console.log(minutes, seconds);
};

const display = () => {};

// Créer un événement à la validation du form pour lancer le compte à rebours

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let totalSeconds = choice.value * 60;

  setInterval(() => {
    if (totalSeconds != 0) {
      totalSeconds--;
      let minutes = Math.floor(totalSeconds / 60);
      let seconds = totalSeconds % 60;
      countdownDisplay.textContent = minutes + " : " + seconds;
      console.log(totalSeconds);
      console.log(minutes, seconds);
    } else {
      countdownDisplay.textContent = "C'est terminé !";
    }
  }, 1000);
});
