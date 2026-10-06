
// time complexity *******************************************************************************************
//time complexity describe how no of operation changes
// as input size changes.

// let n =7;
// for(let i=0;i<n;i++){
//     console.log("Hello");
// }
// // no iteration -> 7
// // time complexity -> o(n)

// for(let i=0;i<n;i++){
//     for(let j=0;j<n;j++){
//         console.log("Hello");
//     }
// }
// t.c -> o(n^2);

// for(let i=0;i<n;i++){
//     for(let j=0;j<n;j++){
//         for(let k=0;k<n;k++){

//         }
//     }
// }
// t.c -> o(n^3);

// for(let i=0;i*i<=n;i++){

// }
// // t.c ->(sqrt(n));

// while(n!= 0){
//     n = n/10;
// }
// t.c -> log10(n);

// time complexity of constant ****************************************************************************************************
// for(let i=i;i<10000;i++){

// }
// total number of iteration -> 10000
// / t.c -> o(1)  

// time complexity -> describe how the no of operation changes when input size changes time.

// for(let i=0;i<n;i++){


// }
// // no of iteration -> n 
// time complexity -> o(n)


//Asympotic Notation ->******************************************************************************************************

// 1) - Omega() -> Best case 
// 2) - Theta() -> Average
// 3) - Big Oh  -> worst case

// given an array and find if the target exist or not 

// let arr = [4,1,8,2,3,6];
// let target = 3;
// function linearSearch(arr) {
//     let flag = false;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.includes(target))
//             flag = true;
//     }
//     if (flag) {
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// }
// linearSearch(arr);

//approach 2 :- 
// function searchTarget(arr,target){
//     for(let item of arr){
//         if(item == target){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(searchTarget(arr,target));

// time complexity of the following question ===============================
// Best case -> O(1) -> (when item is at first Index)
// Average case -> O(n)
// worst case -> O(n) -> (when the item is at last Index)


// space complexity **************************************************************************************************************
// extra memory required by an algorithm when input size is changes

// let k=1;
// let k1=2;
// let k2=3;

//  100  variables 
// s.c - o(1) -> constant 


// eg ==============================================
// function reverse(input){
//     let arr = [];
//     for(let i=input.length;i>=0;i--){
//         arr.push(input[i]);
//     }
//     return arr;
// }
// console.log(reverse(input));
// T.c -> O(n) -> size of input array (loop will iterate till the length if array)
// S.c -> O(n) - > input size (beacuse same number of itmes are being added in arr)

