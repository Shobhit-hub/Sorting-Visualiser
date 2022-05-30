async function InsertionSort(array) 
{
  disable_controls();
  let bars = document.getElementsByClassName("bar");
  for (let i = 1; i < array.length; i++) 
  {
    let key = array[i];
    let j = i - 1;
	bars[j + 1].style.backgroundColor = "red";
    while (j >= 0 && array[j] > key) 
	{
      array[j + 1] = array[j];
      bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
      bars[j + 1].style.backgroundColor = "red";
      await sleep(speedFactor);
      j = j - 1;
    }
	for(let k=0;k< array.length;k++)
	{
		bars[k].style.backgroundColor = "#5cdb96";
	}
    array[j + 1] = key;
    bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
    await sleep(speedFactor);
	bars[j + 1].style.backgroundColor = "#5cdb96";
  }
  enable_controls();
  return array;
}