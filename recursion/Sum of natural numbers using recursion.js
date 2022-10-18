let num=6;

function sumUpto(num){
  if(num<=1) return num
  return num+sumUpto(num-1);
}

console.log(sumUpto(num));


// Time complexity : O(n)
// Auxiliary space : O(n)
