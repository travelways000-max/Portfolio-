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
