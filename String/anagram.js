let str1="hello";
let str2="llohe";

function isAnagram(str1,str2){
  if(str1.length!==str2.length) return false;
  let count={};
  for(let ele of str1){
    count[ele]=(count[ele] || 0) +1;
  }
  for(let key of str2){
    if(!count[key]) return false;
    count[key]-=1;
  }
  return true
}

console.log(isAnagaram(str1,str2))
