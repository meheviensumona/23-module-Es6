// function 
console.log('Example: 1')
function doubleIt(num){
    return num*2;
}
const result = doubleIt(4);
console.log(result)

//function
console.log('Example: 2')
const double = function(num){
    return num*2;
}
const res = double(2);
console.log(res);


//function ES6
console.log('Example: 3')
const doubleItt = num => num*2;
const resul = doubleItt(50);
console.log(resul);

//function Es6
//arrow function
console.log('Example: 4')
const add =(x,y) => x+y;
const resultee = add(3,5)
console.log(resultee);

//function Es6
//arrow function
console.log('Example: 5')
const add3num =(x,y,z) => x*y*z;
const resulteee = add3num(3,4,5)
console.log(resulteee);
//function Es6
//arrow function
console.log('Example: 6')
const give = () =>5;
const result6 = give();
console.log(result6)
//function Es6
//arrow function
console.log('Example: 7')
const Math = (x,y)=> {
    const sum =x+y;
    const diff = x-y;
    const result =sum*diff;
    return result;
}
const result7 =Math(4,5)
console.log(result7);

