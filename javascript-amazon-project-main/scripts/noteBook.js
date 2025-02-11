//可以通过赋值来修改对象类型的变量
const array = [
  {
      name : "Jack",
      age : 18
   },

   {
    name : "Brown",
    age : 30
   },

   {
    name : "Alice",
    age :20
   }
];
const person1 = array[0];
person1.age =100;
console.log(array);


