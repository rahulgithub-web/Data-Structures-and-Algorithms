// var str = "hello";

// // Method 1:   
function reverse(str){
    if(str.length<=1) return str 
    console.log(str.slice(1));
    return reverse(str.slice(1))+str[0] 
}
console.log(reverse(str));

// Method2: 
function reverseArray(arr){
    if(arr.length===1) return arr;  
    return reverseArray(arr.slice(1))+arr[0];
} 

let arr = "aabcdad"
console.log(reverseArray(arr))