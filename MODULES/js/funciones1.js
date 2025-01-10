/*function sumar(a,b){
    return a+b;
}

function restar(a,b){
    return a-b;
}
*/
//Antigua
/*module.exports={
    sumar, restar
};*/



//moderna
export function sumar(a,b){
    return a+b;
}

export function restar(a,b){
    return a-b;
}

let division=(a,b)=>(a/b);
export default division; 

export const PI=3.14;