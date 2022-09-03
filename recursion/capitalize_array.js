// Write a program to capitalise the first letter of all the strings in an array of strings
// e.g. => ["hi","hello","holla"] ==> ["Hi","Hello","Hola"] 

var str = ["hi","hello","holla"]
function c_f_l(str){
    let i=0;
    if(i<str.length){
        str[i] = str[i][0].toUpperCase()+str[i]; 
        c_f_l(str,i+1) 
    }
    return str
}

console.log(c_f_l(str));