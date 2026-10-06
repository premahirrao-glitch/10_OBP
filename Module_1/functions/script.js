//sum of digit of a number

// let n = 4312;
// let sum =0;
// while(n>0){
//    let last_digit = n%10;
//    sum += last_digit;
//     n = Math.floor(n/10);
// }

// console.log(sum); // 10

// product of all the digits of a number

// let n = 4312;
// let pro =1;
// while(n>0){
//    let last_digit = n%10;
//    pro *= last_digit;
//     n = Math.floor(n/10); //24
// }

// console.log(pro);


// count no of digit

// let n = 4312;
// let count =0;
// while(n>0){
//    let last_digit = n%10;
//     count++;
//     n = Math.floor(n/10); //24
// }

// console.log(count); //4

// approach 2

// let count = log10(n)+1;
// let count = log2(n)+1;
// int count = log8(n)+1;
// count(count);

// reverse a number

// let n = 4312;
// let rev =0;
// while(n>0){
//     let last_digit= n%10;
//     rev = rev*10+last_digit;
//     n=Math.floor(n/10);
// }

// console.log(rev);

//break and continue

// for(let i =0;i<10;i++){
//     if(i==5)
//       break; // stop the excution and control 
//              // flow come out of the loop
//     console.log(i);
// }

// let j=0;
// while(j>5){
//     break;
//     console.log(j);
//     j++;
// }

// let j=0;
// while(j<5){
//     if(j==2)
//       break;
//     console.log(j);
//     j++;
// }


// for(let i =0;i<=10;i++){
//     console.log(i);
//     if(i==6)
//       break;
// }

// for(let i =0;i<=10;i++){
//     console.log(i);
//       break;
// }

// continue -

// when continue is excuted it skip the 
// excution of code after it 
// for that particular iteration

// continue -> skip the excution code after it for that particular iteration

// for(let i =0;i<=5;i++){
//     if(i==4)
//      continue;
//     console.log(i);
// }

// for(let i =0;i<=5;i++){
//     if(i==2)
//      continue;
//     console.log(i);
// }

// for(let i =0;i<=5;i++){
//     console.log(i);
//      if(i==3)
//      continue;
// }

//  print all the number 
// from 1 to 10 except the multiples of 3

// for(let i=1;i<=10;i++){
//     if(i%3==0)
//       continue; 
//     console.log(i);
// }


// do while-> atleast once
// do{
//   // it will be excuted 
// }while(condition);

// print 1 to 5 using do while loop
// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<=5);

// now print 1 to 50 and skip all 
// the number that is even and  stop at 35

// for(let i =1;i<=50;i++){
//     if(i%2==0)
//        continue;
//     if(i==35)
//       break;
//     console.log(i);
// }

// iterate from 1 to 30
// and if no is divisble by 3 print foo 
// and if divisible by 5 print bar 
// and if divisible by both 3&5
// print foo & bar

// for(let i=1;i<=30;i++){
//     console.log(i);
//     if(i%3==0 && i%5==0){
//         console.log("Foo Bar");
//     }
//     else if(i%3==0){
//         console.log("foo");
//     }
//     else if(i%5==0){
//         console.log("Bar");
//     }
  
// }

// 

// for(let i =1 ;i<=5;i++){
//     if(i==1 && i==2)
//         break;
//     console.log(i); //may be
// }


// for(let i =1 ;i<=5;i++){
//     if(i==1 || i==2)
//         break;
//     console.log(i); //may be
// }

for(let i =1 ;i<=5;i++){
    if(i==1 && i==2)
        continue;
    console.log(i); //may be
}

for(let i =1 ;i<=5;i++){
     console.log(i);
    if(i==1 || i==2)
        continue; // 1 to 5
}

// given number check if it is prime.
// to print sum of prime numbers

// function isPrime(num){
//     for(let i = 2;i<num;i++){
//         if(num%i==0){
//             return false
//         }
//     }
//     return true;
// }

// function primeSum(n){
//     let sum = 0;
//     for(let i=2;i<n;i++){
//         if(isPrime(i)){
//             sum +=i
//         }
//     }
//     return sum;
// }
// console.log(primeSum(15));   //41