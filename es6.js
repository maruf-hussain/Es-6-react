// ..................Template String.............
const student ={
    name:'Maruf',
    age:22,
    position:'second'
};
const about = `
<h1>Name:${student.name}</h1>
<h1>Name:${student.age}</h1>
<h1>Name:${student.position}</h1>
`;
// console.log(about);


// How to write Arrow Function..........................
const marufTaka = () =>{

}

// .....How to Write Spread Oparatior.....................................
const number =[10,25,12,45,12,];
const newNumber = [...number,10];
number.push(455,41,500,200);


// console.log(number);
// console.log(newNumber);

// ...............Array method Map, filter,forEach,find...................
// const products =[
    
//     {name: 'laptop', price: 50000, brand:'Dell', color:'silver'},
//     {name: 'phone', price: 30000, brand:'Samsung', color:'black'},
//     {name: 'watch', price: 10000, brand:'Rolex', color:'gold'},
//     {name: 'sunglass', price: 5000, brand:'rabon', color:'black'},
//     {name: 'bag', price: 4000, brand:'president', color:'blue'},

// ];


// const price = products.map(product => product.price);
// const brand = products.map(product => product.brand);
// const name = products.map(product => product.name);
// console.log(name,brand,price);
// ..............................forEach....................
// products.forEach(product =>{
//     // console.log(product);
//     // console.log(product.brand);
// });

// ..............................filter.................
// const cheap = products.filter(product => product.price > 30000);
// // console.log(cheap);

// // ....................................find ..............................
// const matchName = products.find(product => product.name.includes('s'));
// console.log(matchName);

// ............Destructuring...................................
const persion={
    name:'Maruf',
    age: 27,
    height:'5 feet 6',
    freinds:['maruf','sobuj'],
    work:{
        language:['html','css','javascript'],
        role:'web developer',
        field:'react js',
        experience:'2 years',
    }
};
// const find = [freinds] = [persion.freinds];
// console.log(find);
const works = {role, field} = persion.work.field;

console.log(works);