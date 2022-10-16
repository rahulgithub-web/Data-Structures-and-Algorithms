let arr=[4,6,1,9,2];
let start=0;
let end=arr.length-1;

let mergeSort = (arr,start,end) => { 
    if(start>=end) {return} 
    let mid=start+Math.floor((end-start)/2);
    mergeSort(arr,start,mid); 
    mergeSort(arr,mid+1,end); 
    merge(arr,start,mid,end);   
    return arr;
}

let merge = (arr,start,mid,end) => {
    let arr1=[]; 
    let arr2=[]; 
    let arr1Len=mid-start+1;
    let arr2Len=end-start; 
    for(let i=0;i<arr1Len;i++){
        arr1[i]=arr1[start+i];
    };  
    for(let j=0;j<arr2Len;j++){
        arr2[j]=arr2[mid+1+j];
    };
    let a=0,b=0,c=start;
    while(a<arr1Len && b<arr2Len){
        if(arr1[a]<=arr2[b]){
            arr[c]=arr1[a];
            a++;
        } else {
            arr[c]=arr2[b];
            b++;
        }
        c++;
    };
    while(a<arr1Len){
        arr[c]=arr1[a];
        a++;
        c++;
    };
    while(b<arr2Len){
        arr[c]=arr2[b]
        b++;
        c++;
    };
    return arr
};

let res=mergeSort(arr,start,end);
console.log(res);
