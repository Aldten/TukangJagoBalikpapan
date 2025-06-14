// script.js
console.log("Website Tukang Jago Balikpapan siap digunakan.");

// Ambil elemen audio
const cardSound = document.getElementById("cardSound");

// Ambil semua kartu
const cards = document.querySelectorAll(".card");

// Tambahkan event hover & klik ke tiap kartu
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    if (cardSound) {
      cardSound.currentTime = 0; // mulai dari awal
      cardSound.play();
    }
  });

  card.addEventListener("click", () => {
    if (cardSound) {
      cardSound.currentTime = 0;
      cardSound.play();
    }
  });
});


// ANIMASI SAAT DI-SCROLL DUA ARAH
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.1, // muncul saat 10% elemen terlihat
  }
);

// Target semua elemen yang ingin dianimasikan
document.querySelectorAll(".animate-on-scroll").forEach((el) => {
  observer.observe(el);
});
