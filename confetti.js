document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    confetti.style.backgroundColor = getRandomColor();
    document.body.appendChild(confetti);
  }

  function getRandomColor() {
    const colors = ["#FFC0CB", "#FF69B4", "#FFD700", "#87CEFA", "#98FB98"];
    return colors[Math.floor(Math.random() * colors.length)];
  }
});
