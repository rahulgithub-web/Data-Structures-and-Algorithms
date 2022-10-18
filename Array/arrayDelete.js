// ========> Delete Element from an array <=========  

let arr=[67,23,12,90,32];

let position=2;
for(let i=position;i<arr.length-1;i++){
    arr[i]=arr[i+1];
}
arr.length=arr.length-1;
console.warn(arr)
