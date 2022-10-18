let str="civic";

function isPalindrome(str){
	if(str.length===0) return false;
	if(str.length===1) return true;
	if(str.length===2) return str[0]==str[1];
	let start=0;
	let end=str.length-1;
	if(str[start]!=str[end]){
		return false;
		start++
		end--
	}
	return true
}

console.log(isPalindrome(str));
