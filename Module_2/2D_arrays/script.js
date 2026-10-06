// 2/09/2026 

//accessing items from 2D arrays**********************************************************************
// let arr = [[1,2,3],
//            [4,5,6],
//            [7,8,9]
//         ];
// console.log(arr[0][0]); // 1
// console.log(arr[1][2]); // 6
// console.log(arr[2][0]); // 7

// print numbers of rows ********************************************

// console.log(arr.length); // 3

// print numbers of columns ********************************************

// console.log(arr[0].length); // 3


// irregular 2D array*********************************
// let arr = [
//     [1,2,3,4],
//     [2,3,4,5,6],
//     [7,8,9,10,11],
// ];
// console.log(arr[1][4]); // 6

// print all items of 2D array****************************************************************************
// for regular 2D array 
// let arr = [
//           [1,2,3,4],
//           [5,6,7,8],
//           [9,10,11,12],
// ]
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[0].length;j++){
//         console.log(arr[i][j]);
//     }
// }

// for irregular 2D array***********************************************************************
// let arr = [
//           [1,2,3,4],
//           [5,6,7,8,10],
//           [9,10,11,12],
// ]
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         console.log(arr[i][j]);
//     }
// }

// find the number of item in 1st row***********************************
// let arr = [
//           [1,2,3,4],
//           [5,6,7,8,10],
//           [9,10,11,12],
// ];
// console.log(arr[0].length); // 4 , for row 1st
// console.log(arr[1].length); // 5 , for row 2nd

// print the 2D array row wise right to left***************************************************
// let arr = [
//         [1,2,3,4],
//         [5,6,7,8],
//         [9,10,11,12]
// ];
// for(let i=0;i<arr.length;i++){
//     for(let j=arr[i].length-1;j>=0;j--){
//         console.log(arr[i][j]);
//     }
// }

// print the matrix row wise (last to first) from left to right********************************************
// let arr = [
//         [1,2,3,4],
//         [5,6,7,8,9],
//         [9,10,11,12]
// ];
// for(let i=arr.length-1;i>=0;i--){
//     for(let j=0;j<arr[i].length;j++){
//         console.log(arr[i][j]);
//     }
// }

// Matrix==============================================================

// let matrix  = [
//      [1,2,3,4],
//      [5,6,7,8],
//      [9,10,11,12],
//      [13,14,15,16]
// ];

// approach 1:-
// for(let i=0;i<matrix.length;i++){
//     for(j=0;j<matrix[i].length;j++){
//         if(i == j){
//             console.log(matrix[i][j]);
//         }
//     }
// }
//approach 2:- only used for square matrix*************************************
// for(let i=0;i<matrix.length;i++){
//     console.log(matrix[i][i]);
// }


// question======================

// let mat = [
//         [1,3],
//         [2,4]
// ];
// function printMatrixColumnwise(mat) {
//   // Write code here and print output
//   let row = "";
//   for(let i=0;i< mat.length;i++){
//     for(let j=0;j<mat[i].length;j++){
//         row+=(mat[j][i]);
//     }

//   }
//   return row.split("").join(" ");
// }
// console.log(printMatrixColumnwise(mat));
// //1 2 3 4

// find the diagonal items of a matrix===========================================================
// let arr = [
//           [1,2,3,4],
//           [5,6,7,8],
//           [9,10,11,12],
//           [13,14,15,16]
// ];
// // print the items of the matrix column wise
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         console.log(arr[j][i]);
//     }
// }

// print the booundry items of the matrix
// let arr = [
//           [1,2,3,4],
//           [5,6,7,8],
//           [9,10,11,12],
//           [13,14,15,16]
// ];
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         if(i==0 || i == arr.length-1 || j == 0 || j == arr[i].length-1){
//             console.log(arr[i][j]);
//         }
//     }
// }

// print the maximum element from the matrix=============================================
// let arr = [
//          [1,2,3,4],
//          [5,6,14,8],
//          [9,10,11,12],
//          [13,13,0,9]
// ];
// let max = arr[0][0];
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         if(arr[i][j] > max){
//             max = arr[i][j];
//         }
//     }
// }
// console.log("Maximum Element -",max); 
// output:-
// Maximum Element - 14

// given square matrix find the secindary diagonal===================================================

// let mat = [
//          [1,2,3],
//          [5,6,7],
//          [9,10,11]
// ];
// for(let i=0;i<mat.length;i++){
//   for(let j=0;j<mat[i].length;j++){
//         if(i+j == mat.length-1){
//             console.log(mat[i][j]);
//         }
//     }
// }

// print the items of the secondary diagonal from bottom to top============
// let mat = [
//          [1,2,3,4],
//          [5,6,7,8],
//          [9,10,11,13],
//          [10,12,13,15]
// ];

//appraoch 1 : - ******************************************************
// for(let i=0;i<mat.length;i++){
//     for(let j=0;j<mat[i].length;j++){
//         if(i+j == mat.length-1){
//             console.log(mat[j][i]);
//         }
//     }
// }

//approach 2 :- ********************************************************************
// for(let i=mat.length-1;i>=0;i--){
//     for(let j=0;j<mat[i].length;j++){
//         if(i+j == mat.length-1){
//             console.log(mat[i][j]);
//         }
//     }
// }

// tanspose the matrix*******************************************************
// let mat = [
//     [1, 5, 8],
//     [4, 5, 6],
//     [10, 11, 13]
// ];
// // let transpose = [];
// for(let i=0;i<mat.length;i++){
//     // transpose[i] = [];
//     for(let j=0;j<mat[i].length;j++){
//         console.log(mat[j][i]);
//     }
// }
// console.log(transpose);

// approach 2 : - applied only for square matrix***********************************
// for (let i = 0; i < mat.length; i++) {
//     for (let j = 0; j < mat[i].length; j++) {
//         if (i < j) {
//             let temp = mat[i][j]
//             mat[i][j] = mat[j][i]
//             mat[j][i] = temp
//         }
//     }
// }
// console.log(mat);

// transpose of rectangular matrix***************************************************

// generic solution for all type of matrix
// let mat = [
//           [1,2,3],
//           [4,5,6],
//           [7,8,9],
//           [10,11,12],
// ];
// let transpose = [];
// for(let j=0;j<mat[0].length;j++){
//     let colItems = [];
//     for(let i=0;i<mat.length;i++){
//         colItems.push(mat[i][j]);
//     }
//     transpose.push(colItems);
// }
// console.log(transpose);
// output :-
//[ [ 1, 4, 7, 10 ], [ 2, 5, 8, 11 ], [ 3, 6, 9, 12 ] ]

// boundry traversal **********************************************************************

// let mat = [
//          [1,4,7,1],
//          [2,5,8,0],
//          [3,6,9,5]
// ];
// // we should take four pointer to start 
// let left = 0 , right = mat[0].length-1
// let top = 0 , bottom = mat.length-1;

// //  top row
// for(let i=left;i<=right;i++){
//     console.log(mat[top][i]);
// }
// top++;
// // top to bottom
// for(let i=top;i<=bottom;i++){
//     console.log(mat[i][right]);
// }
// right--;
// // right to left
// for(let i=right;i>=left;i--){
//     console.log(mat[bottom][i]);
// }
// bottom--;
// // bottom to top 
// for(let i=)




// subArrays or subString ******************************************************************************

// part of the arrays
// item should be continous (skip not allowed)
// order should be perserved


// find all the subarrays of length 2 

// let arr = [1,2,3,4];
// let k = 2;
// for(let i=0;i<arr.length-k+1;i++){
//     let subArray = [];
//    for(let j=i;j<i+k;j++){
//     subArray.push(arr[j]);
//    }
//    console.log(subArray);
// }
//output : - 
// [ 1, 2 ]
// [ 2, 3 ]
// [ 3, 4 ]

// given a string find the subString of length k=============================================

// let str = "Akash";
// let k = 2 ;
// for(let i=0;i<str.length-k+1;i++){
//     let str1 = "";
//     for(let j=i;j<i+k;j++){
//          str1+=(str[j]);
//     }
//     console.log(str1);
// }


// count and print the total number of subarrays ==================================
// let arr = [1,2,3,4,5];
// let count = 0;
// for(let i=0;i<arr.length;i++){
//     let subArray = [];
//     for(let j=i;j<arr.length;j++){
//         subArray.push(arr[j]);
//         count++;
//         console.log(subArray);
//     }
// }
// console.log(count);

// sprial order traversal of matrix***********************************

// let mat = [
//           [1,2,3,4,5],
//           [6,7,8,9,10],
//           [11,12,13,14,15],
//           [17,18,19,20,21],
//           [22,23,24,25,26]
// ];
// let left = 0; right = mat[0].length-1
// let top = 0, bottom = mat.length-1

// while(top <= bottom || left <= right){
//     // for left to right , top row
//     for(let i=left;i<=right;i++){
//         console.log(mat[top][i]);
//     }
//     top++;
//     // for top to bottom , right column
//     for(let i=top;i<=bottom;i++){
//         console.log(mat[i][right]);
//     }
//     right--;
//     // for right to left ,bottom row
//     for(let i=right;i>=left && top <= bottom;i--){
//         console.log(mat[bottom][i]);
//     }
//     bottom--
//     // for bottom to top ,left column
//     for(let i=bottom;i>=top && left <= right;i--){
//         console.log(mat[i][left]);
//     }
//     left++
// }
