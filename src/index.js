//color pallete https://colorhunt.co/palette/1d2b537e2553ff004dfaef5d

const volumeFromSlider = document.querySelector("#value");
const input = document.querySelector("#slider");

volumeFromSlider.textContent = input.value;
input.addEventListener("input", (event) => {
  volumeFromSlider.textContent = event.target.value;
});
