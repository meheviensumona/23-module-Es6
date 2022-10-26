//add two array with js code
console.log('example-1')
const ages =[12,13,14,15];
const ages2 = [22,33,44];
const allage = ages.concat(ages2);
console.log(allage)
//add three array with js code
console.log('example-2')
const age1 =[12,13,14,15];
const ages3 = [22,33,44];
const ages4 = [22,33,44];
const all = ages.concat(ages2).concat(ages4);
console.log(all)

// add extra value with array
console.log('example-3')
const ages5 = [22,33,44];
const allarray = ages5.concat([222]);
console.log(allarray);


//add two array with Es6 code
console.log('example-4')
const age6 = [2,3,4,5]
const age7 =[8,9,10]
const addallage =[...age6,...age7]
console.log(addallage);

//add two array with Es6 code
console.log('example-4')
const age8 = [2,3,4,5]
const age9 =[8,9,10]
const addall =[...age6,...age7,66,77,88]
console.log(addall);
//find max number with js code
console.log('example-5')
const a =19;
const b =44;
const c =3;
const maximum = Math.max(a,b,c);
console.log("the max num is:-",maximum)

//find max number(array) with Es6 code
console.log('example-6')
const array =[23,44,5,6];
const maxi =Math.max(...array);
console.log(maxi);