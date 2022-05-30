async function bubbleSort(array) {
	disable_controls();
  let bars = document.getElementsByClassName("bar");
  for (let i = 0; i < array.length; i++) 
  {
    for (let j = 0; j < array.length - i - 1; j++) 
	{
		bars[j].style.backgroundColor = "red";
		bars[j+1].style.backgroundColor = "red";
		if (array[j] > array[j + 1]) 
		{
			let temp = array[j];
			array[j] = array[j + 1];
			array[j + 1] = temp;
			bars[j].style.height = array[j] * heightFactor + "px";
			bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
		}
		await sleep(speedFactor);
		bars[j].style.backgroundColor = "#5cdb96";
		bars[j+1].style.backgroundColor = "#5cdb96";
		
    }
    await sleep(speedFactor);
  }
  enable_controls();
  return array;
}