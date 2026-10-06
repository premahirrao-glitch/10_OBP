// Sorting algorithms
// 1. selection sort
// 2. Bubble sort 
// 3. insertion sort
// 4. merge sort
// 5. quick sort

// Selection Sorting ********************************************************

// reverse the array using selection Sorting

let arr = [5,4,3,2,1];
for(let i=0;i<arr.length;i++){
    let minIndex = i
    let minValue = arr[i]
    for(let j=i+1;j<arr.length;j++){
        if(arr[j] < minValue){
            minIndex = j
            minValue = arr[j];
        }
    }
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp;
}
console.log(arr);