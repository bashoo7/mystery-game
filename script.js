document.addEventListener("DOMContentLoaded", function () {
  const correct = "318";
  const submitBtn = document.getElementById("submitBtn");
  const message = document.getElementById("message");

  submitBtn.addEventListener("click", function () {
    const input = document.getElementById("answer").value;
    if (input === correct) {
      window.location.href = "question2.html";
    } else {
      message.textContent = "ちがうよ！もう一度考えてみよう。";
    }
  });
});

function checkAnswer() {
  const correct = "318";
  const input = document.getElementById("answer").value;

  if (input === correct) {
    document.body.classList.remove("fade-in");
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = "question2.html";
    }, 600); // フェードアウト時間に合わせて調整
  } else {
    document.getElementById("message").innerText = "ちがうよ！もう一度考えてみよう。";
  }
}
