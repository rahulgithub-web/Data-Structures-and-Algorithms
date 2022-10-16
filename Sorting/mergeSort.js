let arr=[4,6,1,9,2];
let start=0;
let end=arr.length-1;

let mergeSort=(arr,start,end)=>{
    if(start>=end) {return} 
    let mid=start+Math.floor((end-start)/2);
    mergeSort(arr,start,mid); 
    mergeSort(arr,mid+1,end); 
    merge(arr,start,mid,end);   
}
let merge=(arr,start,mid,end)=>{

}

let res=mergeSort(arr,start,end);
console.log(res);
