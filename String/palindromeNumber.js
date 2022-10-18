let num=404;

function isPalindrome(num){
	num=num+"";
	if(num.length==0) return 0;
	if(num.length==1) return 1
	if(num.length==2) return num[0]==num[1]
	let start=0;
	let end=num.length-1;
	if(num[start]!==num[end]){
	   return 0
	   start++
	   end--
	   }
	return 1
}

console.log(isPalindrome(num));
