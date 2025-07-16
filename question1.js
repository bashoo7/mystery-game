document.addEventListener("DOMContentLoaded", function () {
  const correct = "318";
  const submitBtn = document.getElementById("submitBtn");
  const message = document.getElementById("message");

  submitBtn.addEventListener("click", function () {
    const input = document.getElementById("answer").value.trim();
    if (input === correct) {
      window.location.href = "question2.html";
    } else {
      message.textContent = "違うようだ…もう一度考えてみよう。";
    }
  });
});
