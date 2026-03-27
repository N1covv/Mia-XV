const countdown = document.getElementById("countdown");

const eventDate = new Date("Oct 20, 2026 21:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / 1000 / 60) % 60);

  countdown.innerHTML = `${days} días ${hours} horas ${minutes} min`;
}, 1000);