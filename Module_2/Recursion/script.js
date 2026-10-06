// 10/9/26******************************************************
//  Recursion*************************************************

// funcation call itself

// tail recursion
//head recursion
//tree recursion

// tail recursion*****************************************************************************

//print 1 to n using recursion (tail recursion)

//  function print(n){
//     if(n == 0)
//         return;
//     console.log(n);
//     print(n-1);
//  }
//  print(6);

// find sum of 1 to n using recursion

//  function total(n,sum){
//    if(n == 0){
//     console.log(sum);
//     return;
//    }
//    sum+= n;
//    total(n-1,sum);
// }
// total(5,0);

// find the factorial of the number using recursion============================

// let n = 5;
// function fact(n,mul){
//     if(n==1){
//         console.log(mul);
//         return;
//     }
//     mul *= n
//     fact(n-1,mul)
// }
// fact(5,1);
// fact(3,1);

//  find the sum of digits==============================================

// function sumOfDigits(n,sum){
//     if(n == 0){
//         console.log(sum);
//         return
//     }
//     let temp = n % 10
//     sum+= temp
//     sumOfDigits(Math.floor(n/10),sum)
// }
// sumOfDigits(121,0)

//approach 2:-
// function sumOfDigits(n){
//     if(n == 0){
// console.log(sum);
//         return 0;
//     }
//     return n%10+sumOfDigits(Math.floor(n/10))
// }
// console.log(sumOfDigits(121));

// approacch 3 
// function sumOfDigits (n){
//     if(n == 0){
//         return 0;
//     }
//     return n%10+sumOfDigits(Math.floor(n/10))
// }
// console.log(sumOfDigits(541)); // 10

//T.c -- > o(log10(n))
//s.c -- > 0(n)

// find maximum item of an array using  recursion

// let arr = [1,2,3,4,5];
// let ans = -Infinity;
// function maximum(arr,i){
//     if(i == arr.length){
//         return;
//     }
//     if(ans < arr[i]){
//         ans = arr[i];
//     }
//     maximum(arr,i+1)
// }
// maximum(arr,0)
// console.log(ans); // 5

// appraoch 2 :-**************************************************************
// let arr = [1,2,3,4,5,8];
//  function maximum(arr,i,ans){
//     if(i == arr.length){
//         console.log(ans)
//         return;
//     }
//     if(ans < arr[i]){
//         ans = arr[i];
//     }
//     maximum(arr,i+1,ans)
// }
// maximum(arr,0,-Infinity) // 8 

//approach 3 : -

// let arr = [1,2,5,8,6];
//  function maxValue(arr,i,ans){
//     if(i == arr.length){
//         return ans;
//     }
//     if(ans < arr[i]){
//         ans = arr[i]
//     }
//     return maxValue(arr,i+1,ans);
//  }
//  console.log(maxValue(arr,0,-Infinity));


// check if an array is sorted or not**************************************************************

// let arr = [1, 2, 3, 4, 5];
// let ans = false;
// function isSorted(arr, i, ans) {
//     if (i == arr.length - 1) {
//         return ans;
//     }
//     if (arr[i] < arr[i + 1]) {
//         ans = true
//     } else {
//         ans = false;
//     }
//     return isSorted(arr, i + 1, ans)

// }
// console.log(isSorted(arr, 0, ans));

// check if a string is a palindrome or not using recursion********************************************************************************

// let str = "rar";
// let ans = false;
// // let str1 = ""

// function isPalindrome(str,i,ans){
//     if(i == str.length){
//         return ans;
//     }
//     if(str[i] == str[str.length-i-1]){
//         ans = true;
//     }else {
//         ans = false;
//     }
//     return isPalindrome(str,i+1,ans);
// }
// console.log(isPalindrome(str,0,ans));
// // T.c --> O(n)
// // S.c --> O(n);

// print all prime number from 1 to n using recursion***************************************************************

// function isPrime(i,num){
//     if(i == num){
//         return true;
//     }
//     return isPrime(i+1,num);
// }

// function print(){
//     n = 20;
//     for(let num=2;num<=n;num++){
//       if(isPrime(2,num)){
//         console.log(num);
//       }
//     }
// }
// print();


// reverse an array using recursion********************************************************

// function reverseArray(arr,i){
//     if(i == arr.length){
//         return ;
//     }
//     let res = reverseArray(arr,i+1)
//     console.log(arr[i]);
//     return res;
// }
// reverseArray([1,2,3],0);
// // 

// approach 2 : - 

// function reverse(left,right,arr){
//     if(left == right){
//         return
//     }
//     let temp = arr[left]
//     arr[left] = arr[right]
//     arr[right] = temp
//      reverse(left+1,right-1,arr)

// }
// console.log(reverse(0,arr.length-1,[1,2,3,4]))
// // console.log(arr);



// / tree recursion*************************************************************************

//  function fibo(n){
//     if(n == 1 || n == 2 ){
//         return 1;

//     }
//     return fibo(n-1)+fibo(n-2);
//  }
//  console.log(fibo(5));


// diffrenece between subset ,subarray and sub-sequence*************************************

// subarray - continous part of array where order matters

// subset - order does not matter ans should not be continous

// sub-sequence - sequnce matters but not continious 



// question***************** tree recursion********************


// let arr = [1,2,3];
// function subset (i,arr,res){
//     if(i ==arr.length){
//         console.log( res)
//         return;
//     }
//     // take 
//     res.push(arr[i]);
//     subset(i+1,arr,res);

//     // no take 
//     res.pop();
//     subset(i+1,arr,res);
// }
// subset(0,arr,[]);
// output : - 
/* 
[ 1, 2, 3 ]
[ 1, 2 ]
[ 1, 3 ]
[ 1 ]
[ 2, 3 ]
[ 2 ]
[ 3 ]
[]
*/
// T.c -->o(2^n)
// S.c -->o(n)