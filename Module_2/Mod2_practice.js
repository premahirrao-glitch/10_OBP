
// let n = 5;
// for(let i=0;i<n;i++){
//     let str = "";
//     for(let j=0;j<i+1;j++){
//         str+="*"
//     }
//     console.log(str);
// }
// output : - 
// *
// **
// ***
// ****
// *****

// appraoach 2 : -
// number of row is eqaul to column
// let n = 5;
// for(let i=0;i<n;i++){
//     let str = "";
//     for(let j=0;j<=i;j++){
//         str+= "*";
//     }
//     console.log(str);
// }
// output : -
// *
// **
// ***
// ****
// *****

// let n =4
// for(let i=0;i<n;i++){
//     let str = "";
//     for(let j=i;j<n-1;j++){
//         str+= " ";
//     }
//     for(let k=0;k<=i;k++){
//         str+="*"
//     }
//     console.log(str);
// }


// print diamond star pattern=========================================================

// let n = 3;
// for(let i=0;i<n;i++){
//     let str = "";
//     for(let j=0;j<n-i-1;j++){
//         str+=" ";
//     }
//     for(let k=0;k<2*i+1;k++){
//         str+="*"
//     }
//     console.log(str);
// }
// let N= 3;
// for(let i=0;i<N;i++){
//     let str1 = "";
//     for(let j=0;j<i;j++){
//         str1+=" ";
//     }
//     for(let k=0;k<2*(N-i-1)+1;k++){
//         str1+="*";
//     }
//     console.log(str1)
// }
// output :-
//   *
//  ***
// *****
// *****
//  ***
//   *

// print a hollow square========================================================
// let n  = 5;
// let str = "";
// for(let i=0;i<n;i++){
//     str+="*"
// }
// console.log(str);
// // let N = n;
// for(let i =1;i<=n-2;i++){
//     let str1 = "";
//     str1+="*"
//     for(let j=1;j<=n-2;j++){
//         str1+=" ";
//     }
//     str1+="*";
//     console.log(str1);
// }
// console.log(str);
// output:-

// *****
// *   *
// *   *
// *   *
// *****



// 2D array practice question ******************************
// if and row of array consists of 1 change all elements of that row to 1 else 0

// let arr = [
//     [1, 0, 0],
//     [0, 0, 0],
//     [0, 0, 1],
//     [1, 0, 0],
// ];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i].includes(1)) {
//             arr[i][j] = 1
//         } 

//     }
// }
// console.log(arr);
// output : -
// [ [ 1, 1, 1 ], [ 0, 0, 0 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ]

// sort the 2D array according to grades in alphabetical order
// let arr = [["Student 1", "A"],
//            ["Student 3", "C"], 
//            ["Student 2", "B"], 
//            ["Student 4", "D"]
// ];
// for(let i=0;i<arr.length;i++){
//     function comp(a,b){
//         return a-b;
//     }
//     console.log(arr.sort(comp));
// }

// print the boundry elements of the matrix in clock wise order
// let arr = [
//          [1,2,3],
//          [4,5,6],
//          [7,8,9],
//          [10,11,12]
// ];
// let left = 0, right = arr[0].length-1
// let top = 0 , bottom = arr.length-1
// // left to right top row
// for(let i=left;i<=right;i++){
//     console.log(arr[top][i]);
// }
// top++;
// // top to bottom column 
// for(let i=top;i<=bottom;i++){
//     console.log(arr[i][right]);
// }
// right--;
// // right to left bottom row
// for(let i=right;i>=left;i--){
//     console.log(arr[bottom][i]);
// }
// bottom--;
// // bottom to top left column
// for(let i=bottom;i>=top;i--){
//     console.log(arr[i][left]);
// }
// left++;

// question on spiral traversal of matrix********************************************************************
// let arr = [
//     [1 ,4, 7],
//     [2 ,5 ,8],
//     [3 ,6, 9]
// ];
// let left = 0, top = 0 , right = arr[0].length-1; bottom = arr.length-1
// // top to bottom left column
// while(top <= bottom && left <= right)
//     {
//         for(let i=top;i<=bottom;i++){
//     console.log(arr[i][left]);
// }
// left++;
// // for left to right bottom row
// for(let i=left;i<= right;i++){
//     console.log(arr[bottom][i]);
// }
// bottom--;
// // for bottom to top left right column
// for(let i=bottom;i>=top;i--){
//     console.log(arr[i][right]);
// }
// right--;
// // for right to left top row
// for(let i=right;i>=left;i--){
//     console.log(arr[top][i]);
// }
// }


// let arr = [
//          [1,2,3],
//          [4,5,7],
//          [7,8,9]
// ];
// let res = [];
// for(let i=0;i<arr.length;i++){
//     if(i % 2 == 0){
//         for(let a=0;a<=arr[i].length-1;a++){
//             res.push(arr[i][a]);
//         }
//     }else{
//         for(let b=arr[i].length-1;b>=0;b--){
//             res.push(arr[i][b]);
//         }
//     }
// }
// console.log(...res)
// output :- 
// 1 2 3 7 5 4 7 8 9

// special matrix ****************************************************************************
// let mat = [
//           [1,0,2],
//           [0,5,0],
//           [1,0,0]
// ];
// let flag = false;
// for(let i=0;i<mat.length;i++){
//     for(let j=0;j<mat[0].length;j++){
//         if(i == j){
//             if(mat[i][j] !== 0){
//                 flag = true;
//             }
//         }
//     }
// }
// if(flag){
//     console.log("true");
// }else{
//     console.log("false");
// }


// chess board alternate calculation 
// let mat = [
//          [1,2,3],
//          [4,5,6],
//          [7,8,9]
// ];
// let black = 0 ,white = 0;
// for(let i=0;i<mat.length;i++){
//     for(let j=0;j<mat[0].length;j++){
//         if(j % 2 == 0 || i >= j){
//             white += mat[j][i];
//         }else {
//             black += mat[j][i];
//         }
//     }
// }
// console.log(black);
// console.log(white);


// recursion practice question **********************************************************************************

// find maximum for the array

// let arr = [1,5,4,10];
// function findMax(arr,i){
    //     if(i == arr.length-1){
        //         return arr[i];
        //     }
        //     let Max = findMax(arr,i+1);
        //     if(arr[i] > Max){
//         Max = arr[i]
//     }
//     return Max;
// }
// console.log(findMax(arr,0));

// approach 2 : -
// let arr = [1,5,4,10];
// function printMax(arr,i,Max){
//     if(i == arr.length){
//         return Max;
//     }
//     if(arr[i] > Max){
//         Max = arr[i];
//     }
//     return printMax(arr,i+1,Max);
// }
// console.log(printMax(arr,0,-Infinity)); // 10

// print 1 to n using recursion***************************************
// function print(n){
//     if(n == 0){
//         return ;
//     }
//     console.log(n);
//     print(n-1)
// }
// // print(3)
// // print(10)

// find minimum from array using recursion ***************************************
//  function printMin(arr,i,min){
//     if(i == arr.length){
//         return min;
//     }
//     if(min > arr[i]){
//         min = arr[i]
//     }
//     return printMin(arr,i+1,min)
//  }
//  console.log(printMin([1,2,4,5],0,Infinity));

// find the index of target from the array using recursion 

// function findIndex(arr,n,x){
//     // let res = [];
//     if(n == 0){
//         return [] ;
//     }
//         let res = findIndex(arr,n-1,x)
//     if(arr[n-1] == x){
//         res.push(n-1);
//     }
//     return res;
// }
// console.log(findIndex([1,2,4,2,5,7],6,2).join(" "));


// two sum problem*************************
// let arr = [0,7,11,15,2];
// let target  = 9 ;
// for(let i=0;i<arr.length;i++){
//     for(let j=1;j<arr.length;j++){
//         if(arr[i]+arr[j] == target){
//             console.log(i,j)
//         }
//         break;
//     }
// }
// t.c --> O(n); 
// s.c --> O(n);

// approach 2 --> optimize solution **********************

function findIndex(arr,target){
    let left = 0 , right = arr.length-1
    while(left < right){
         let sum = arr[left] + arr[right];
        if(sum == target){
            return [left,right];
        }else if (sum > target){
            right--;
        }
    }
}
let arr = [2,7,11,15];
let target = 9
console.log(findIndex(arr,target));