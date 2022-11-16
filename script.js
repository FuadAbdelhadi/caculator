let num1 = document.querySelector(".button-1");
let num2 = document.querySelector(".button-2");
let num3 = document.querySelector(".button-3");
let num4 = document.querySelector(".button-4");
let num5 = document.querySelector(".button-5");
let num6 = document.querySelector(".button-6");
let num7 = document.querySelector(".button-7");
let num8 = document.querySelector(".button-8");
let num9 = document.querySelector(".button-9");
let num0 = document.querySelector(".button-0");
let plus = document.querySelector(".button-plus");
let minus = document.querySelector(".button-minus");
let multi = document.querySelector(".button-multi");
let divide = document.querySelector(".button-divide");
let dot = document.querySelector(".button-dot");
let equal = document.querySelector(".button-equal");
let clear = document.querySelector(".clear");

num1.addEventListener("click", pressOne);
num2.addEventListener("click", pressTwo);
num3.addEventListener("click", pressThree);
num4.addEventListener("click", pressFour);
num5.addEventListener("click", pressFive);
num6.addEventListener("click", pressSix);
num7.addEventListener("click", pressSeven);
num8.addEventListener("click", pressEight);
num9.addEventListener("click", pressNine);
num0.addEventListener("click", pressZero);
plus.addEventListener("click", pressPlus);
minus.addEventListener("click", pressMinus);
multi.addEventListener("click", pressMulti);
divide.addEventListener("click", pressDivide);
dot.addEventListener("click", pressDot);
equal.addEventListener("click", pressEqual);
clear.addEventListener("click", pressClear);

function pressOne() {
  document.querySelector(".text-box").innerHTML =
    document.querySelector(".text-box").innerHTML + "1";
}
function pressTwo() {
  document.querySelector(".text-box").innerHTML =
    document.querySelector(".text-box").innerHTML + "2";
}

function pressThree() {
  document.querySelector(".text-box").innerHTML =
    document.querySelector(".text-box").innerHTML + "3";
}

function pressFour() {
  document.querySelector(".text-box").innerHTML =
    document.querySelector(".text-box").innerHTML + "4";
}

function pressFive() {
  document.querySelector(".text-box").innerHTML =
    document.querySelector(".text-box").innerHTML + "5";
}

function pressSix() {
  document.querySelector(".text-box").innerHTML =
    document.querySelector(".text-box").innerHTML + "6";
}

function pressSeven() {
  document.querySelector(".text-box").innerHTML =
    document.querySelector(".text-box").innerHTML + "7";
}
function pressEight() {
  document.querySelector(".text-box").innerHTML =
    document.querySelector(".text-box").innerHTML + "8";
}

function pressNine() {
  document.querySelector(".text-box").innerHTML =
    document.querySelector(".text-box").innerHTML + "9";
}

function pressZero() {
  document.querySelector(".text-box").innerHTML =
    document.querySelector(".text-box").innerHTML + "0";
}

function pressPlus() {
  if (checkArr.includes("+", "-", "*", "/") != 1) {
    document.querySelector(".text-box").innerHTML =
      document.querySelector(".text-box").innerHTML + "+";
    checkArr.push("+", "-", "*", "/");
  }
  clear.addEventListener("click", del);
  equal.addEventListener("click", del)
  function del (){
    checkArr.splice(0, checkArr.length)
  }
}

function pressMinus() {
  if (checkArr.includes("+", "-", "*", "/") != 1 ) {
    document.querySelector(".text-box").innerHTML =
      document.querySelector(".text-box").innerHTML + "-";
    checkArr.push("+", "-", "*", "/");
  }
  clear.addEventListener("click", del);
  equal.addEventListener("click", del)
  function del (){
    checkArr.splice(0, checkArr.length)
  }
}

function pressMulti() {
  if (checkArr.includes("+", "-", "*", "/") != 1 ) {
    document.querySelector(".text-box").innerHTML =
      document.querySelector(".text-box").innerHTML + "*";
    checkArr.push("+", "-", "*", "/");
  }
  clear.addEventListener("click", del);
  equal.addEventListener("click", del)
  function del (){
    checkArr.splice(0, checkArr.length)
  }
}

function pressDivide() {
  if (checkArr.includes("+", "-", "*", "/") != 1) {
    document.querySelector(".text-box").innerHTML =
      document.querySelector(".text-box").innerHTML + "/";
    checkArr.push("+", "-", "*", "/");
  }
  clear.addEventListener("click", del);
  equal.addEventListener("click", del)
  function del (){
    checkArr.splice(0, checkArr.length)
  }
}

function pressDot() {
  if (checkArr.includes(".") != 1) {
    document.querySelector(".text-box").innerHTML =
      document.querySelector(".text-box").innerHTML + ".";
    checkArr.push(".");
  }
  clear.addEventListener("click", del);
  
  function del (){
    checkArr.splice(0, checkArr.length)
  }
}

function pressEqual() {
  document.querySelector(".text-box").innerHTML = eval(
    document.querySelector(".text-box").innerHTML
  );
}

function pressClear() {
  document.querySelector(".text-box").innerHTML = "";
}

const gallery = document.getElementById("gallery");

window.onmousemove = (e) => {
  const mouseX = e.clientX,
    mouseY = e.clientY;

  const xDecimal = mouseX / window.innerWidth,
    yDecimal = mouseY / window.innerHeight;

  const maxX = gallery.offsetWidth - window.innerWidth,
    maxY = gallery.offsetHeight - window.innerHeight;

  const panX = maxX * xDecimal * -1+0.2,
    panY = maxY * yDecimal * -1+0.2 ;

  gallery.animate(
    {
      transform: `translate(${panX}px, ${panY}px)`,
    },
    {
      duration: 4000,
      fill: "forwards",
      easing: "ease",
    }
  );
};


