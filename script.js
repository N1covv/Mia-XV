document.addEventListener("DOMContentLoaded", () => {

  // CONTADOR
  const eventDate = new Date(2026, 4, 16, 21, 30, 0).getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
      document.querySelector(".countdown-box").innerHTML = "🎉 ¡Llegó el gran día!";
      return;
    }

    document.getElementById("DIAS").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("HORAS").innerText = Math.floor((distance / (1000 * 60 * 60)) % 24);
    document.getElementById("MINUTOS").innerText = Math.floor((distance / 1000 / 60) % 60);
    document.getElementById("SEGUNDOS").innerText = Math.floor((distance / 1000) % 60);
  }, 1000);

  // SLIDER
  const swiper = new Swiper(".mi-slider", {
    loop: true,
    spaceBetween: 15, 
    autoplay: {
      delay: 3000,
    },
  });
});