async function mergeSort(arr)
{
	disable_controls();
	await mergeSortHelper(arr,0,arr.length-1);
	enable_controls();
}
async function mergeSortHelper(arr,starting_point,end_point)
{
	let bars = document.getElementsByClassName("bar");
	if (end_point==starting_point) { 
    return arr;
  }
  let middle = Math.floor((end_point+starting_point) / 2);
  await mergeSortHelper(arr,starting_point,middle);
  await mergeSortHelper(arr,middle+1,end_point);
  let i = starting_point;
  let j = middle+1;
  let k = starting_point;
  while (i <= middle && j <= end_point) {
    if (arr[i] <= arr[j]) {
      i++;
    } else {
		let temp=arr[j];
		let tempj=j;
		while(tempj>i)
		{
			arr[tempj]=arr[tempj-1];
			bars[tempj].style.backgroundColor = "red";
			bars[tempj].style.height = arr[tempj] * heightFactor + "px";
			tempj--;
		}
		arr[i]=temp;
		bars[i].style.backgroundColor = "red";
		bars[i].style.height = arr[i] * heightFactor + "px";
      j++;
	  i++;
	  middle++;
    }
	
    bars[k].style.height = arr[k] * heightFactor + "px";
    bars[k].style.backgroundColor = "red";
    await sleep(speedFactor);
	for(let i=0;i<arr.length;i++)
	bars[i].style.backgroundColor = "#5cdb96";
    k++;
  } 
  return arr;
}