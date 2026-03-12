let count = 0;
const button = document.getElementById("treat-btn");
const countDisplay = document.getElementById("treat-count");


button.addEventListener("click",function () {
  count++;

  if (count===1) {
    button.textContent =  `${count} like!`;
  } else {
    button.textContent =  `${count} likes`;
  }
  countDisplay.textContent = count;
});