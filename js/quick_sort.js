async function quickSort(items)
{
	disable_controls();
	await quickSortHelper(items, 0, items.length-1);
	enable_controls();
}
async function quickSortHelper(items, left, right) {
  let index;
  let bars = document.getElementsByClassName("bar");
  if (items.length > 1) {
    index = await partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      await quickSortHelper(items, left, index - 1);
    }
    if (index < right) {
      await quickSortHelper(items, index, right);
    }
  }

  for (let i = 0; i < bars.length; i++) {
    bars[i].style.backgroundColor = "#5cdb96";
  }
  return items;
}
async function partition(items, left, right) {
  let bars = document.getElementsByClassName("bar");
  let pivotIndex = Math.floor((right + left) / 2);
  var pivot = items[pivotIndex]; 

  for (let i = 0; i < bars.length; i++) {
      bars[i].style.backgroundColor = "#5cdb96";
  }
  bars[pivotIndex].style.backgroundColor = "purple";
  let i = left; 
  let j = right; 
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      await swap(items, i, j, bars); 
	  i++;
      j--;
    }
  }
  return i;
}
