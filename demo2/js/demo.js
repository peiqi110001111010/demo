const button1 = document.getElementById("button-turn");
const imgtest = document.querySelector("#img-turn");
button1.addEventListener("click", () => {
  const img = imgtest.getAttribute("src");
  if (img === "../img/img-one.png") {
    imgtest.setAttribute("src", "../img/img-two.png");
  } else {
    imgtest.setAttribute("src", "../img/img-one.png");
  }
});
