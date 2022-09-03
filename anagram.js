// ========> Anagram <=========== 

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let count = {};
  for (let letter of str1) {
    count[letter] = (count[letter] || 0) + 1;
  }
  for (let ele of str2) {
    if (!count[ele]) return false;
    count[ele] -= 1;
  }
  console.log(count);
  return true;
}

let res = isAnagram("hello", "ollhe");
console.log(res);

// time complexity O(n)

