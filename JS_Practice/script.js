// find Frequncy of each word=============================

// let str = 'the cat sat on the mat beacuse the cat was tired';
// function Frequncy (str){
//     let arr = str.split(" ");
//     let obj = {};
//     for(let i =0;i<arr.length;i++){
//         if(obj[arr[i]]){
//             obj[arr[i]]++
//         }else{
//             obj[arr[i]] = 1
//         }
//     }
//     return(obj);
// }
// console.log(Frequncy(str));

// output :-*******************************************************************************
//{ the: 3, cat: 2, sat: 1, on: 1, mat: 1, beacuse: 1, was: 1, tired: 1 }

// given array of numbers find number of prime number in the array*******************************
// let arr = [1,2,3,8,9,10];
// function FindPrime(arr){
//     function isPrime(n){
//         if(n<=1)
//             return false;
//         if(n==2)
//             return true
//         for(let i=2;i<=n;i++){

//         }
//     }
// }


// let number = 895432;
// let count = 0;
// while(number > 0){ 
//     let lastDigit = number % 10
//     if(lastDigit % 2 !== 0){
//         count++;
//     }
//     number = Math.floor(number / 10)
// }
// console.log(count);


// print the centred pyraimd ===================================================================================
// let n = 5;
// for(let i=1;i<=n;i++){
//     let str = "";
//     for(let j=1;j<=n-i;j++){
//         str+= " ";
//     }
//     for(let k=1;k<=(2*i)-1;k++){
//         str+="*";
//     }
//     console.log(str);
// }
// output:-
//     *
//    ***
//   *****
//  *******
// *********

// reverse the centred pyraimd =========================================================

// let n = 5;
// for(let i=1;i<=n;i++){
//     let str = "";
//     for(let j=1;j<=i-1;j++){
//         str+= " ";
//     }
//     for(let k=1;k<=2*(n-i)+1;k++){
//         str+="*";
//     }
//     console.log(str);
// }
// output : -
// *****
//  ***
//   *

// print slanting line from left to right "\" ===============================================================
// let n = 5
// for(let i=1;i<=n;i++){
//     let str = "";
//     for(let j=1;j<=i-1;j++){
//         str+= " ";
//     }
//     for(let k=1;k<=1;k++){
//         str+="*";
//     }
//     console.log(str);
// }
// output:-
// *
//  *
//   *

// print slanting line from right to left "/" ========================================================
// let n = 5
// for(let i=1;i<=n;i++){
//     let str = "";
//     for(let j=1;j<=n-i;j++){
//         str+= " ";
//     }
//     for(let k=1;k<=1;k++){
//         str+="*";
//     
//     console.log(str);
// }
// output:-
//   *
//  *,
// *


// count the highest repeating item from dsa and change it to 8**************************************************
// let arr = [1,2,1,3,5,5,6,6,6];
// let obj = {};
// // count the frequncy of the items in array
// for(let i=0;i<arr.length;i++){
//     if(obj[arr[i]]){
//         obj[arr[i]]++;
//     }else{
//         obj[arr[i]] = 1
//     }
// }
// console.log("object with frequency counter",obj);
// // highest frequncy of the items 
// let highFreq = 0;
// let highest = 0;
// for(let key in obj){
//     if(obj[key] > highFreq){
//         highFreq = obj[key]
//         highest = key;
//     }
// }
// //change the key to target with same frequncy "8"}
// n=7;
// obj[n] = obj[highest];
// delete obj[highest]

// console.log(`Highest Reapeated items is ${highest}-${highFreq}`);
// console.log("object with changed as per target",obj);

// output:-

// object with frequency counter { '1': 2, '2': 1, '3': 1, '5': 2, '6': 3 }

// Highest Reapeated items is 6-3

// object with changed as per target { '1': 2, '2': 1, '3': 1, '5': 2, '7': 3 }

// let mat = [
//          [1,2,3,4],
//          [5,6,7,8],
//          [9,10,11,12],
//          [13,14,15,16]
// ];
// let left = 0 , right = mat[0].length-1;
// 	let top = 0 ;
//      let bottom = mat.length-1;
//     // left to right top row
// 	// for(let i=left;i<=right;i++){
// 	// 	console.log(mat[top][i]);
// 	// }
// 	// top++;
// 	// top to bottom right column
// 	for(let i=top;i<=bottom;i++){
// 		console.log(mat[i][right]);
// 	}

// let arr = [
//         [1,2],
//         [2,3]
// ];
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length-1;j++){
//         let temp = arr[i][j];
//         arr[i][j] = arr[i][j+1]
//         arr[i][j+1] = temp
//         // temp = arr
//     }
// }
// console.log(arr);


let mat = [
        [7,2,3],
        [2,3,4],
        [5,6,1],
];
let left = 0 ,right = mat[0].length-1 , top = 0 , bottom = mat.length-1
while(left <= right){
    for(let i=bottom;i>=top;i--){
        console.log(mat[i][left]);
    }
    left++;
}