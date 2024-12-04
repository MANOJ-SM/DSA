
// how to find time and space complexity 


// 1. example : how to find max and min ele 

const a = [ 3,6,7,1,2];

let max = a[0];
let min = a[0];

for(let i =1; i<a.length; i++){
    if(a[i]>max){
       max = a[i]; 
    }

    if(a[i] < min){
        min = a[i];
    }
}

console.log("maximium ele in an array",max);
console.log("minimum ele in an array",min);


// time complexity = O(n) -> bcoz , n = no of itrations ->   no of times an code run is T.C
// space complexity= O(1) -> bcoz , array size dosent alterd here , fixed no of times the code is going to run 

