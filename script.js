document.addEventListener("DOMContentLoaded", function () {
  const correct = "318";
  const submitBtn = document.getElementById("submitBtn");
  const message = document.getElementById("message");

  submitBtn.addEventListener("click", function () {
    const input = document.getElementById("answer").value;
    if (input === correct) {
      window.location.href = "next.html";
    } else {
      message.textContent = "ちがうよ！もう一度考えてみよう。";
    }
  });
});
