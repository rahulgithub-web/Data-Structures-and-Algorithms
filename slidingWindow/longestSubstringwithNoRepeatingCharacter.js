let s = "abcabcbb";

function longestSubstring(s){
  let start=0;
  let end=0;
  let maxLen=0;
  let uniqueChar=new Set();
  while(end<s.length){
    if(!uniqueChar.has(s[end])){
       uniqueChar.add(s[end])
       end++
       maxLen=Math.max(maxLen,uniqueChar.size)
    } else {
      uniqueChar.delete(s[start])
      start++
    }
  }
  return maxLen;
}

console.log(longestSubstring(s));
