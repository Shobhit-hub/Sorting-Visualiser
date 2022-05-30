let randomize_array = document.getElementById("randomize_array_btn");
let sort_btn = document.getElementById("sort_btn");
let bars_container = document.getElementById("bars_container");
let select_algo = document.getElementById("algo");
let speed = document.getElementById("speed");
let slider = document.getElementById("slider");
let minRange = 1;
let maxRange = slider.value;
let numOfBars = slider.value;
let speedFactor = 100;
let unsorted_array = new Array(numOfBars);
let bar_container_height = bars_container.offsetHeight-50;
let bar_container_width = bars_container.offsetWidth;
let heightFactor = bar_container_height/maxRange;
let widthFactor = bar_container_width/numOfBars;
let algotouse = "";


slider.addEventListener("input", function () {
  numOfBars = slider.value;
  maxRange = slider.value;
  widthFactor = bar_container_width/numOfBars;
  heightFactor = bar_container_height/maxRange;
  document.getElementById("array_size").innerHTML=numOfBars;
  bars_container.innerHTML = "";
  unsorted_array = createRandomArray();
  renderBars(unsorted_array);
});

speed.addEventListener("change", (e) => {
  speedFactor = parseInt(e.target.value);
});


select_algo.addEventListener("change", function () {
  algotouse = select_algo.value;
});

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomArray() {
  let array = new Array(numOfBars);
  for (let i = 0; i < numOfBars; i++) {
    array[i] = randomNum(minRange, maxRange);
  }
  return array;
}
function disable_controls()
{
	sort_btn.disabled=true;
	randomize_array_btn.disabled=true;
	slider.disabled=true;
	select_algo.disabled=true;
}
function enable_controls()
{
	sort_btn.disabled=false;
	randomize_array_btn.disabled=false;
	slider.disabled=false;
	select_algo.disabled=false;
}
document.addEventListener("DOMContentLoaded", function () {
  unsorted_array = createRandomArray();
  renderBars(unsorted_array);
});

function renderBars(array) {
  for (let i = 0; i < numOfBars; i++) {
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = array[i] * heightFactor + "px";
	bar.style.width=widthFactor + "px";
    bars_container.appendChild(bar);
  }
}

randomize_array.addEventListener("click", function () {
  unsorted_array = createRandomArray();
  bars_container.innerHTML = "";
  renderBars(unsorted_array);
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
sort_btn.addEventListener("click", function () {
  switch (algotouse) {
	 
    case "bubble":
      bubbleSort(unsorted_array);
      break;
    case "merge":
        mergeSort(unsorted_array);
        break;
      break;
    case "heap":
      HeapSort(unsorted_array);
      break;
    case "insertion":
      InsertionSort(unsorted_array);
      break;
    case "quick":
      console.log(unsorted_array.length);

      quickSort(unsorted_array);
      break;
    default:
      bubbleSort(unsorted_array);
      break;
  }
});
