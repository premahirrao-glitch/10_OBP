// 9/9/26*************************************************************************

// Map *********************************************************************
// map stores key value pair
// key is unique
// preserve indertion order 

// creating map
// let mp = new Map();

//  set ,get ,clear , remove
// set => insertion and updation ---> o(1)
// get => to access item  ---> o(1)
// has ==> 
// clear => to clear --- > o(n)
// remove => to remove a item  
// delete => removes a specific property (key and value pair)  ---> o(1)

// maintain name and marks of class ====================================
//  let mp = new Map();
//  mp.set("Prem",41);
//  mp.set("Akash",42);
//  mp.set("suyash",43);

 // key can't be duplicate ===============================================================

//  mp.set("Akash",40);
//  console.log(mp);

// mp.get(key) --> return the value
// console.log(mp.get("Prem"));

// mp.has(key) --> return true if the key is present or else false*****************************
// console.log(mp.has("venky"));

// mp.delete(key) --> delete the key and return a boolean value
// mp.delete(("Akash")); 
// console.log(mp.delete(("Akash"))); // true
// console.log(mp) // Map(2) { 'Prem' => 41, 'suyash' => 43 }

//mp.clear() --> clear the complete key value pairs
// mp.clear();
// console.log(mp); // Map(0) {} 

// map is implemented using hash table============================

// Time complexity -->
// Best --> onabort(1)
// Average --> onabort(1)
// Worst --> 0(n)



// ========================================================================
// let mp = new Map();
// mp.set("Prem",50);
// mp.set("Prasad",60);
// mp.set("sid",70);
// mp.set("ketan",80);
// mp.set("venky",90);
// console.log(mp);
// console.log(mp.get("Prasad"));

// iterating a map ================================================================

// for(let property of mp){
//   console.log(property);
// }
// output :
// [ 'Prem', 50 ]
// [ 'Prasad', 60 ]
// [ 'sid', 70 ]
// [ 'ketan', 80 ]
// [ 'venky', 90 ]

// 
// for(let property of mp){
//   console.log(property[0],property[1]);
// }
// output : -
// Prem 50
// Prasad 60
// sid 70
// ketan 80
// venky 90

// 
// for(let [key,value] of mp){
//   console.log(key,value);
// }
// output :- 
// Prem 50
// Prasad 60
// sid 70
// ketan 80
// venky 90


// *************************************************************************************
// let arr = [1,2,3,4,4,5,5];
// let mp = new Map();
// for(let i=0;i<arr.length;i++){
//   if(mp.has(arr[i]) == false){
//     mp.set(arr[i],1);
//   }else{
//     let prevFreq = mp.get(arr[i]);
//     mp.set(arr[i],prevFreq+1);
//   }
// }

// for(let [key,value] of mp){
//   console.log(key+" -",value);
// }
// console.log(mp);

// time complexity - o(n)
// space complexity - o(n)

// / size --> o(1)
// console.log(mp.size);


// creating a map from array ====================================================

// let mp = new Map([
//   [1,2],
//   [2,3],
//   [4,5]
// ])

// for(let [key,value] of mp){
//   console.log(key,value);
// }
// /output : - 
// 1 2
// 2 3
// 4 5

// / key of the map can be anything**************************************************************
/* -object
  -array
  -string
  -number
  -symbol*/

// Set --> stores only  key ******************************************************************************
// ket can't be duplicate

// let st = new Set();


// add - insert item --> o(1)
// has - check for the existance of item --> o(1)
// delete - delete a key --> o(1)
// size - returns size of set --> o(1)
// clear - clear the set --> o(n)

// T.c 
//Best --> o(1)
//Average --> o(1)
//Worst --> o(n)

// st.add(1);
// st.add(2);
// st.add(3);
// console.log(st); //  Set(3) { 1, 2, 3 }
// console.log(st.size); // 3
// console.log(st.has(1)); // true

// st.clear();
// console.log(st); // Set(0) {}

// convert a array into set =======================================================
// let st = new Set([1,2,3,4])
// console.log(st);  //Set(4) { 1, 2, 3, 4 }

// to iterate the item of set =================================
// for(let item of st){
//   console.log(item);
// }

// print the unique item from the array 
// let arr = [8,8,2,3,4,5,5,5];
// let st = new Set();
// for(let i=0;i<arr.length;i++){
//   st.add(arr[i]);
// }
// console.log(st);

// approach 2 :-
// let unique = new Set();
// for(let item of arr){
//   if(unique.has(item) == false){
//     unique.add(item);
//   }
// }
// console.log(unique); //  Set(5) { 8, 2, 3, 4, 5 }
// t.c --> o(n)
// s.c --> o(n)


// check whether dupilcate exists or not ===============================
// let arr = [1,2,2,4,5,6];
// function findDuplicate(arr){
//   let Duplicate = new Set();
//   for(let i=0;i<arr.length;i++){
//     if(Duplicate.has(arr[i])){
//       return true;
//     }
//     Duplicate.add(arr[i]);
//   }
//   return false;
// }
// console.log(findDuplicate(arr)); // true

// group by city =====================================================================
// let arr = [
//     {
//       name : "Prem",
//       city : "Pune"
//     },
//     {
//       name : "venky",
//       city : "Pune"
//     },
//     {
//       name : "Prasad",
//       city : "Dhule"
//     },
//     {
//       name : "Sid",
//       city : "Nashik"
//     }
// ];
// function Group(arr){
//   let city = new Map();
//   for(let i=0;i<arr.length;i++){
//     if(city.has(arr[i].city)){
//       city.get(arr[i].city).push(arr[i].name);
//     }else{
//       city.set(arr[i].city,[arr[i].name])
//     }
//   }
//   return city;
// }
// console.log(Group(arr));


// given a question print true if the there is any common item========================================
// let arr1 = [1,2,3,4,5];
// let arr2 = [5,8,9,7,0];
// function dupilcate(arr,arr1){
//   for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr1.length;j++){
//       if(arr[i] == arr1[j]){
//         return true;
//       }
//     }
//   }
// }
// console.log(dupilcate(arr,arr1));

// approach using map*******************************************************************************************

// let arr1 = [1,2,3,4,5];
// let arr2 = [5,8,9,7,0];
// function common(arr1,arr2){
//   let st = new Set();
//   for(let items of arr1){
//     st.add(items);
//   }
//   for(let i=0;i<arr2.length;i++){
//     if(st.has(arr2[i])){
//       return true;
//     }
//   }
//   return false;
// }
// console.log(common(arr1,arr2)); //true
// Time complexity  ---> O(n)

// practice question on map *************************************************

let arr = [2, 3, 2, 5, 3, 2];
let count = 0;
let mp = new Map();
for(let i = 0 ;i<arr.length;i++){
  if(mp.has(arr[i])){
    mp.set(arr[i],mp.get(arr[i])+1);
  }else{
    mp.set(arr[i],1);
  }
}
console.log(mp);



