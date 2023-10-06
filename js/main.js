var value=prompt("Enter the Value");

let check=(n)=>{
    if(n%2==0){
        document.write(`${n} is Even number`)
    }
    else{
        document.write(`${n} is Odd number`)
    }
}
check(value);