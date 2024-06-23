// ------------- Punto 2: Pintar ---------------
function pintar() {
  ele.style.backgroundColor = "yellow";
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", pintar);

const ele2 = document.getElementById("ele2");
ele2.addEventListener("click", () => (ele2.style.backgroundColor = "red"));

function pintar2(color = "green") {
  ele3.style.backgroundColor = color;
}

const ele3 = document.getElementById("ele3");

ele3.addEventListener("click", function () {
  pintar2("yellow");
});

pintar2();
