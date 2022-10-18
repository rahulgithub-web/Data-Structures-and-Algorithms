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


// -----------------------------------------------------------
let x = 2.00000, n = 10

var myPow = function(x, n) {
    if(n===0) return 1
    n = Math.abs(n)
    let res = n%2===0 ? myPow(x*x,n/2) : myPow(x*x,(n-1)/2) *x
    return n < 0 ? 1/res : res
}

console.log(myPow(x,n))


// Time Complexity: O(logn)
// Auxiliary Space: O(n) n is the size of the recursion stack
