
//Array is collection of items***********************

//let arr = [] ->declaration of array 

// let arr = [1,2,3,4];
// console.log(arr);            //[ 1, 2, 3, 4 ]

//Index in array starts from "0"**********************************************

/*1 (first item) - > 0(index)
2 (first item) - > 1(index)
2 (first item) - > 2(index)
4 (first item) - > 3(index)*/

//print the item at index 0 and 2
 
// let arr = [1,2,3,4]; 

// console.log(arr[0]);  // 1
// console.log(arr[2]);  // 3
// console.log(arr[3]);  // 4
// console.log(arr[5]);  // undefined (because there is no item at index 5 )


//length property ***********************************************
// let arr = [1,2,3,4,5,6];
// console.log(arr.length);  // 6 

// for(let i = 0;i<arr.length-1;i++){
//     console.log(arr[i]);
// }


//eg -> in a class there are  5 students 
//store their name and print it

// let name = ["Prem","suyash","akash","venky","sid"];
// for(let i = 0;i<name.length;i++){
//     console.log(name[i]);
// }
//output**
/*Prem
suyash
akash
venky
sid*/


//given an array find the some of all its numbers

// let num = [1,2,3,4,5];
// let sum = 0;
//     for(let i = 0; i<num.length;i++){
//         sum += num[i];
        
//     }
//     console.log(sum);


//print arr in the reverse order 
//multiply all the items of the array
// gievn an array of items count freq of 2 ,  arr = [1,1,1,2,3,2,2,4];

// eg 1) reverse order******
// let arr = [1,2,3,4,5];
// for(i = arr.length-1; i>=0 ;i--){
//     console.log(arr[i]);
// }
//output --> 
/*
5
4
3
2
1  */


//eg 2) multiply all items of array 
// let num = [1,2,3,4,5];
// let pro = 1;
//     for(let i = 0; i<num.length;i++){
//         pro *= num[i];
        
//     }
//     console.log(pro); 120 

//eg 3) gievn an array of items count freq of 2 ,  arr = [1,1,1,2,3,2,2,4];

// let  arr = [1,1,2,3,2,2,4];
// let count = 0;
// for(let i = 0 ;i< arr.length;i++){
//     if(arr[i] == 2){
//         count++;
//     }
// }
// console.log(count);  //3

//eg 4) create a array of 5 names and then count 
// how many particular name is present

// let name = ["Prem","Prem","Prem","Prem","suyash","akash","venky","sid"];
// let count = 0;
//     for(let i = 0;i<name.length;i++){
//         if(name[i]=="Prem"){
//             count++;
//         }
//     }
// console.log(count);  // 4



//for in loop**********************************************
// by this loop we can print the index and also elements of the array **
// let arr = [1,2,3,4,5,6];
// for (let index in arr){
//     console.log(index);
// }


// for of loop**************************************************
//by thus loop we can print and access the elements of array---------

// let arr = [1,2,3,4,5,6];
// for (let elements of arr){
//     console.log(elements);
// }


//to get items******************
//  let arr =[1,2,3,4];
//  console.log(arr[2]); // 3


//Update the items************************
// by this we can update any item by its index value in the array

// let arr =[1,2,3,4];
//     arr[3] = 5;
//  console.log(arr); //[ 1, 2, 3, 5 ]

//Push function --> append the item and return the length of the array*******************************
// it adds the new item at the last of the array


// let arr = [ 1, 2, 3, 5 ];
// console.log(arr.push(8));  // 5
// console.log(arr);               //[ 1, 2, 3, 5, 8 ]

//pop function********************
//it remove the item from the last of the array and aslo return the item of array;

// let arr = [1,2,3,5];
// arr.pop(); 
// console.log(arr);   //[ 1, 2, 3 ]

// unshift function******************************************************
// it add items at the first of the array and returns the the lenght 

// let arr = [1,2,3,5];
// arr.unshift(0)
// console.log(arr.unshift(0));  // 5
// console.log(arr); // [ 0, 1, 2, 3, 5 ]

// shift function********************************************************
// it removes the element from the first and returns the  it ------------

// let arr = [1,2,3,4,5,6];
// // arr.shift();
// console.log(arr.shift());  // 1
// console.log(arr); //[ 2, 3, 4, 5, 6 ]



//output 

// let arr = [2,4];
// arr.shift();
// arr.push(5);
// arr.pop();
// console.log(arr.pop());
// console.log(arr.push(8));
// console.log(arr);


//question on  array rotation

let arr = [4,5,2,1];
let k = 3;
for(let i =0;i<k;i++){
    let last = arr.pop();
    arr.unshift(last);
}
console.log(arr);
//first rotation --> [ 1, 4, 5, 2 ]
//second rotation --> [ 2, 1, 4, 5 ]
//third rotation --> [ 5, 2, 1, 4 ]

