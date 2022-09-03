// check if a string is palindrome or not


// Palindrome:==> words, numbers or string that reads the same backwards as well e.g. radar => RADAR, || Madam || Refer || hi(not a palindrome);

// var str = "madam"; 
str = "bi"
str = ""

function palindrome(str){
    if(str.length===0) return false;
    if(str.length===1) return true;
    if(str.length===2) return str[0]===str[1]; 
    if(str[0]=== str[str.length-1]){
        return palindrome(str.slice(1,-1));
    }  
    return false;
}

console.log(palindrome(str));