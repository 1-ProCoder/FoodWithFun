document.addEventListener("DOMContentLoaded", function () {
  const button1 = document.getElementById("button1");
  const button1img = document.getElementById("button1img");

  button1.addEventListener("mouseover", function () {
    button1.style.transform = "scale(1.05)";
    button1img.style.transform = "scale(1.2)";
  });

  button1.addEventListener("mouseout", function () {
    button1.style.transform = "scale(1)";
    button1img.style.transform = "scale(1)";
  });
});

  const button2 = document.getElementById("button2");
  const button2img = document.getElementById("button2img");

  button2.addEventListener("mouseover", function () {
    button2.style.transform = "scale(1.05)";
    button2img.style.transform = "scale(1.2)";
  });

  button2.addEventListener("mouseout", function () {
    button2.style.transform = "scale(1)";
    button2img.style.transform = "scale(1)";
  });
