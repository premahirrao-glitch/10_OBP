
// 8/9/26 
// Binary search********************************************************************************
//  mostly works on sorted array
// used for searching 

// let arr = [1, 2, 3, 4, 5];
// let target = 4;
// function binarySearch(arr,target){
//     let l = 0 , r = arr.length-1;
//     while(l<=r){
//        let mid = Math.floor((l+r)/2)
//        if(arr[mid] == target){
//             return true;
//        }else if(arr[mid] > target){
//            r = mid - 1
//         }else {
//            l = mid + 1
//        }
       
//     }
//     return false;
// }
// console.log(binarySearch(arr,target));

// T.c ->
// Best case ->O(n)
// Average case-> O(log2(n))
// worst case -> O(log2(n))

// S.c -> O(1)


// find the first occurance of the target and print its index==============================================
// let arr = [1,2,3,4,4,4,5,5];
// let target = 4 ;
// function targetIndex(arr,target){
//     let left = 0 ; right = arr.length-1;
//     let result = -1;
//     while(left <= right){
//         let mid = Math.floor((left+right)/2);
//         if(arr[mid] == target){
//             result = mid;
//             right = mid - 1
//         }else if (arr[mid] > target){
//             right = mid - 1;
//         }else {
//             left = mid + 1;
//         }
//     }
//     return result;
// }
// console.log(targetIndex(arr,target));
// output : - 
// 3

// find the last occurance of the target and print its index==============================================
// let arr = [1,2,3,4,4,4,5,5];
// let target = 4 ;
// function targetIndex(arr,target){
//     let left = 0 ; right = arr.length-1;
//     let result = -1;
//     while(left <= right){
//         let mid = Math.floor((left+right)/2);
//         if(arr[mid] == target){
//             result = mid;
//             left = mid + 1 ;
//         }else if (arr[mid] > target){
//             right = mid - 1;
//         }else {
//             left = mid + 1;
//         }
//     }
//     return result;
// }
// console.log(targetIndex(arr,target));
// output : - 
// 5 
