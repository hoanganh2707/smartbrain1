document.addEventListener("DOMContentLoaded", function() {
  const generateBtn = document.getElementById("generateBtn");

  generateBtn.addEventListener("click", function() {
      const seconds = parseInt(document.getElementById("seconds").value);
      const rows = parseInt(document.getElementById("rows").value);
      const operation = document.getElementById("operation").value;
      const resultDiv = document.getElementById("result");

      resultDiv.innerHTML = "";

      for (let i = 0; i < rows; i++) {
          setTimeout(function() {
              const num1 = Math.floor(Math.random() * 9) + 1;
              const num2 = Math.floor(Math.random() * 9) + 1;
              let result;

              if (operation === "add") {
                  result = num1 + num2;
              } else {
                  result = num1 - num2;
              }

              resultDiv.innerHTML += `${num1} ${operation === "add" ? "+" : "-"} ${num2} = ${result}<br>`;
          }, seconds * 1000 * i);
      }
  });
});