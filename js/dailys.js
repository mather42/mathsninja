/* DAILY QUOTES / PROBLEMS / FUN FACTS / MEMES
   --------------------------------------------------
   - Add as many entries as you like.
   - Each entry is plain HTML, so you can embed <img> tags for memes.
*/
const dailyContent = [
  `<strong>Quote:</strong> “Mathematics is the poetry of logical ideas.” – Einstein`,
  `<strong>Problem:</strong> How many multiples of 9 are there between 100 and 500?`,
  `<strong>Fun fact:</strong> A 4-dimensional hypercube is called a <em>tesseract</em>.`,
  `<img src="https://i.imgur.com/PL0XwLF.png" alt="Math meme" style="max-width:100%">`
];

function pickRandom() {
  const box = document.getElementById("daily-box");
  const i = Math.floor(Math.random() * dailyContent.length);
  box.innerHTML = dailyContent[i];
}

document.addEventListener("DOMContentLoaded", pickRandom);
document.getElementById("new-btn").addEventListener("click", pickRandom);

