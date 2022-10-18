let nums=[2,-2,4,0,7,10]

function sumZero(nums){
  let start=0;
  let end=nums.length-1;
  while(start<end){
    let sum=nums[start]+nums[end];
    if(sum==0) return [nums[start],nums[end]];
    else if(sum>0) end--
    else start++
  }
}

console.log(sumZero(nums))
