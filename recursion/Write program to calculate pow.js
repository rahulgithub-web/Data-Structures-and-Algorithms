let num = 5;
let p = 2;

function power(num,p){
  if(num==0) return 1
  if(p==0) return 1
  return num*power(num,p-1);
}

console.log(power(num,p));


// Time Complexity: O(n)
// Auxiliary Space: O(n) n is the size of the recursion stack
