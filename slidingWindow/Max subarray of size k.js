let arr = [100, 200, 300, 400]
let k = 2;

function maxSubarray(arr,k){
  if(arr.length<k) return -1;
  let res=0;
  for(let i=0;i<k;i++){
    res+=arr[i];
  }
  let curr_sum=res;
  for(let i=k;i<arr.length;i++){
    curr_sum+=arr[i]-arr[i-k]
    res=Math.max(res,curr_sum);
  }
  return res
}

console.log(maxSubarray(arr,k));
