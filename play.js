
 
 
const array =  ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
//for(let hobby of hobbies){
//    console.log(hobby);
//}

console.log(array.map(hobby =>{
    return 'Hobby:'+hobby
}));

for(let i =0;i<array.length;i++){
const index = array.indexOf(' '); // 👉️  0

if (index !== -1) {
  array[index] = 'empty string';
}
}

console.log(array.map(hobby =>{
    return 'Hobby:'+hobby;
}));
const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

let { key1, key3} = obj1



key1 = 20;

key3 = 123

console.log(obj1.key1, obj1.key3)






