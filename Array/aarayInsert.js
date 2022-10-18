// ========> Insert Element into an array <========== 

let arr=[67,23,12,90,32];

let data = [3,6,7,1,99,67];
let insert = 80; 
let ele = 3;
for(let i=data.length-1;i>=0;i--){
    if(i>=ele){
        data[i+1]=data[i]
        if(i==ele){
            data[i]=insert;  
        }
    }
}
console.log(data)
