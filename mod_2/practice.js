
// how to find time and space complexity 


// 1. example : how to find max and min ele 

// const a = [ 3,6,7,1,2];

// let max = a[0];
// let min = a[0];

// for(let i =1; i<a.length; i++){
//     if(a[i]>max){
//        max = a[i]; 
//     }

//     if(a[i] < min){
//         min = a[i];
//     }
// }

// console.log("maximium ele in an array",max);
// console.log("minimum ele in an array",min);


// time complexity = O(n) -> bcoz , n = no of itrations ->   no of times an code run is T.C
// space complexity= O(1) -> bcoz , array size dosent alterd here , fixed no of times the code is going to run 

// 2) ex: concatination of array / twice of array  
// o/p -> [1,2,3,1,2,3]

const arr = [1,2,3];

for(let i=0; i<arr.length; i++){             // arr.length =  3
   arr[arr.length + i] = arr[i];               // a[3] 
}

for(let i=0; i<arr.length; i++){             // arr.length =  6
    console.log(arr[i]);                      // 1,2,3,1,2,3
}

//Final Complexity
//Time Complexity: O(n)
//Space Complexity: O(n)


/*Time Complexity

First Loop:
Iterates n times, where n is the original array length.
Each iteration performs an assignment operation.
Time Complexity = O(n).

Second Loop:
Iterates over the new array, which is now 2n in length.
Time Complexity = O(2n) = O(n).
Overall time complexity: O(n) + O(n) = O(n).

*/

/* why the space complexity is O(n) .Space complexity depends on how much additional memory (RAM) the algorithm uses, not counting the input itself.

Original array size: n
Extra space required: n (to store the appended elements)
Total space used: n (original) + n (extra) = 2n
Drop constants → Space Complexity = O(n).

*/

