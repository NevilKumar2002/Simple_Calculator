let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".btn-clear");
let equal = document.querySelector(".btn-equal");

let ans = 0;
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    var value = e.target.dataset.num;
    screen.value += value;
    ans = screen.value;
    sessionStorage.setItem("ans", eval(ans));
  });
});

equal.addEventListener("click", function (e) {
  let answer = sessionStorage.getItem("ans");

  if (screen.value === "") {
    screen.value = "";
  } else {
    let ans = answer;
    screen.value = ans;
  }
});

clear.addEventListener("click", function (e) {
  screen.value = "";
});
