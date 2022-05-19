let string = "";
let buttons = document.querySelectorAll(".button");
arr1 = Array.from(buttons);
arr1.forEach((b1) => {
  b1.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "B") {
      a = string.slice(-1);
      a2 = "";
      a1 = string.replace(a, a2);
      //   let str = string;
      //   let arr = str.split("");
      //   console.log(arr);
      //   arr.pop(-1);
      //   console.log(arr);
      //   arr = arr.toString("");
      //   console.log(arr);
      document.querySelector("input").value = a1;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
