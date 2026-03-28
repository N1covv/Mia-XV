// ⏳ CONTADOR
const eventDate = new Date(2026, 4, 16, 21, 30, 0).getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    document.querySelector(".countdown-box").innerHTML = "🎉 ¡Llegó el gran día!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / 1000 / 60) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("DIAS").innerText = days;
  document.getElementById("HORAS").innerText = hours;
  document.getElementById("MINUTOS").innerText = minutes;
  document.getElementById("SEGUNDOS").innerText = seconds;

}, 1000);
