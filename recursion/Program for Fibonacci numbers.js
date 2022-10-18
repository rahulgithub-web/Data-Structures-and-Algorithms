let num = 9;

function fibo(num){
  if(num <= 1) return num;
  return fibo(num-1) + fibo(num-2);
};

console.log(fibo(num));


// Time complexity: O(n) for given n
// Auxiliary space: O(n)
