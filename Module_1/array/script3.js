//
//shallow copy and Deep copy***************************************************************
/*in shallow copy all items of the first level is copied
and nested level reference is shared.*/


//shallow copy*****************************************************************************
// let arr = [1,2,3,[4,5]];
// let newArr = arr.slice();
// console.log(newArr); //[ 1, 2, 3, [ 4, 5 ] ]
// newArr[3].push(5);
// console.log(arr); //[ 1, 2, 3, [ 4, 5, 5 ] ] beacuse nested level reference is shared



//Deep copy :-******************************************************************************
//in deep copy items are copied recursively
//there is no shared reference ;
//structuredClone();

// let arr = [1,2,[5,8,6]];

// let newArr = structuredClone(arr);
// newArr[2].push(9);
// console.log(arr); //[ 1, 2, [ 5, 8, 6 ] ]
// console.log(newArr); // [ 1, 2, [ 5, 8, 6, 9 ] ]



//spread operator******************************************************************************
// spread operator expands an iteratable(array,object) to individual item.
// ...


//printing individual items
// let arr = [1,2,3,4];
// console.log(...arr); //1 2 3 4


//copy :- it makes Shallow copy
// let arr = [1,2,3,4];
// let newArr = [...arr];
// console.log(newArr);  //[ 1, 2, 3, 4 ]


// merge ****************************************
// we can merger two arrays using sprad operator

// let arr1 =[1,2,3,4];
// let arr2 =[5,6,7,8];
// let merged =[...arr1,...arr2];
// console.log(merged);  //[1, 2, 3, 4,5, 6, 7, 8]
  
//Add element*********************
//we can add element using spread operator

// let arr= [1,2,3]
// let arr2 = [...arr,8];
// console.log(arr2);        //[ 1, 2, 3, 8 ]

// ADD AT START **************************
//we can add at starting of the array

// let arr= [1,2,3]
// let arr2 = [8,...arr];
// console.log(arr2);    //[ 8, 1, 2, 3 ]

//function arrgument*******************
//we can also use spread operator in funcation argument if we want
// one arrgument and passed multiple parameters .

//  function sum(a,b,c){
//     return a+b+c;
//  }
//  let arr = [1,2,3];
//  console.log(sum(...arr));  // 6

//Array Destructing************************

//approach1
// let arr = [1,2,3];
// let a = arr[0],b = arr[1],c = arr[2];
//console.log(a,b,c);  // 1 2 3 

//approach 2 using Array destructuring---------------------------------------------

// let arr = [1,2,3];
// let [a,b,c] = arr;
// console.log(a,b,c); //  1 2 3

//Destructuring only first element ---------------

// let arr =[1,2,3,4];
// let [a] = arr;
// console.log(a); // 1

//skip element-------------------------------------

// let arr = [1,2,3];
// let [a,,c] = arr;
// console.log(a,c); // 1 3

// extra-------------------------------------------------
// let arr = [1,2,3];
// let [a,b,c,d] = arr;
// console.log(a,b,c,d); // 1 2 3 undefined

// Default value---------------------------------------
// let arr = [1,2];
// let [a,b,c=3] = arr;
// console.log(a,b,c); // 1 2 3

//  Another condition in it---------------------------
// let arr = [1,2,3];
// let [a,b,c=10] = arr;
// console.log(a,b,c);  //1 2 3 (it will only use default value if the value of variable is not given)

// Rest operator***********************************************
//pack or group multiple values inside an array 

// let arr = [1,2,3,4,5,6];
// let [a,b,...arr1] = arr;
// console.log(a,b,arr1); //1 2 [ 3, 4, 5, 6 ]

// function argument----------------------------------------------------------

// we can use rest operator as funcation operator as paratemer

// function sum(...arr){
//     let sum = 0;
//     for(val of arr){
//         sum+= val;
        
//     }
//     return sum;
// }
// console.log(sum(1,2,3)); //6
// console.log(sum(1,2,3,4)); // 10
// console.log(sum(1,2,3,40)); //46

// Array destructuring *************************************************
// arr.flat()
//return a new array with all sub-array
