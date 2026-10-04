const temaKnapp = document.querySelector("#theme-button");
const body = document.querySelector("body");

temaKnapp.addEventListener("click", function () {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    temaKnapp.textContent = "Mörkt läge";
  } else {
    temaKnapp.textContent = "Ljust läge";
  }
});

let antalEnergi = 0;

const energiKnapp = document.querySelector("#energi-knapp");
const energiAntal = document.querySelector("#energi-antal");

energiKnapp.addEventListener("click", function () {
  antalEnergi = antalEnergi + 1;
  energiAntal.textContent = antalEnergi;
});
