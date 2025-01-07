//debugging

function suma(a,b){
    console.log("hola");
    let c=5;
    let d=6;
    let e=c+d;
    return a+b;
}

function factorial(n){
    if(n===0){
        return 1;
    }else{
        return n*factorial(n-1);
    }

}

console.log("estoy sumando",suma(5,4));

console.log(factorial(10));

