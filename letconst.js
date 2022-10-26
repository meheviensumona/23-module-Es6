//exapmle-1
console.log('Example-1')
const hubby = 'abc'            //const dile r value change kra jai nah
console.log(hubby);

//exapmle-2
console.log('Example-2')
const array = ['sumona','ispa']
array[0] = "sayma"    //const dile o array value change hbe but full array change hbe nah
console.log(array)

//example-3
console.log('Example-3')
let sum = 0;
for(let i =0; i<10; i++){
    sum = sum+i;
    console.log(i);               //let hocche value change kora jai. but {} er bahire kisu show korbe nah. let means value leak hbe nah.
}
//example-4
console.log('Example-4')
const number =[12,13,14];
number.push(23);
console.log(number)
//example-5
console.log('Example-5')
const nayok = {name:"sumona", phone:017154};
console.log(nayok)
//example-6
console.log('Example-6')
let patienName = 'Rahim'
patienName = 'fatema'
console.log(patienName)

//example-7
//backup
console.log('Example-7')
function add(num1,num2){
    return num1 + num2;
}
const total = add(15,17);
console.log(total);
//example-8
console.log('Example-8')
function add(num1,num2){
    if(num2 == undefined){
        num2 = 0;
    }
    return num1 +num2;
}
const total_1 = add(30);

console.log(total_1);

//example-9
//example-8 er bikolpo process!
console.log('Example-9')
function add(num1,num2){
   num2 = num2 || 0;    
    return num1 +num2;
}
const total_2 = add(20);

console.log(total_2);

//example-10
//example-9 er bikolpo process!
console.log('Example-10')
function add(num1,num2=10){
 
    return num1 +num2;
}
const total_3 = add(20);

console.log(total_3);

//example-11
//example-10 er bikolpo process!
console.log('Example-11')

const firstName ='justin';
const lastName = 'jani';
const fullName = firstName + " " +lastName;
console.log(fullName)

//example-12
//example-11 same!
//normal js 
console.log('Example-12')

const firstNam ='junaki';
const lastNam = 'begum';
const fullNam = firstNam + " " +lastNam +" " + " is a good girl";
console.log(fullNam)

//example-13
//example-12 same!
//ES6 easy code
console.log('Example-13')

const firstNa ='junaki';
const lastNa = 'begum';
const fullNa = `${firstNa} ${lastNa} is a good girl`
console.log(fullNam)

//example-14
//ES6 easy code
//add to number!
console.log('Example-14')
const sfum = `${20+30}`;
console.log(sfum);

//example-15
//multiline js code
console.log('Example-15')
const multiLine = 'I love you'
+ " I miss you"
+ " I need you"
console.log(multiLine)

//example-16
//line Break js code
console.log('Example-16')
const linebreak = 'I love you\n'
+ " I miss you\n"
+ " I need you"
console.log(linebreak)

//example-17
//line Break Es6 code
console.log('Example-17')
const linebreakk = `I love you
I miss you
no I don't need you
I Hate you`
console.log(linebreakk);

//example-18
