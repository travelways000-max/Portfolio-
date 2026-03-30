const text = ["Future Hacker", "AI Builder", "Music Producer"];
let i = 0, j = 0;
let current = "";
let isDeleting = false;

function type() {
  const typing = document.getElementById("typing");

  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      current = text[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = text[i].substring(0, j--);
    }

    typing.innerHTML = current;

    if (j === text[i].length) isDeleting = true;
    if (j === 0) {
      isDeleting = false;
      i++;
      if (i === text.length) i = 0;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();
const textElement = document.getElementById("typing");
const phrases = [
  "Future Cybersecurity Expert...",
  "Music Producer & Creator...",
  "AI & Automation Enthusiast...",
  "Computer Engineering Student."
];

let phraseIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < phrases[phraseIndex].length) {
    textElement.textContent += phrases[phraseIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    textElement.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", type);
