const input = document.getElementById("textInput");
const samples = document.querySelectorAll(".font-sample");

input.addEventListener("input", () => {
  samples.forEach((el) => {
    el.textContent = input.value || "ตัวอย่างข้อความ";
  });
});