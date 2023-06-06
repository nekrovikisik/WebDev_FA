// 1.
arr.map(el => el * 3 + 10)

// 2.	Имеется массив «год рождения». Необходимо вывести их возраст.
arr.map(el => new Date().getFullYear()-el)

// 3.	Предположим, у нас имеется массив, содержащий объекты, в свойствах которых хранятся сведения об имени и возрасте представителей некой группы людей. Нам надо создать массив, в котором будут сведения только о совершеннолетних представителях этой группы (тех, чей возраст достиг 18 лет).
// Используя данный пример, реализуйте проверку по условию на право редактирования сайта и вывод имени админа.
var name_roles = [{name: 'Anya', role: 'user'}, {name:'Katya', role: 'user'}, {name:'Lera', role: 'admin'}]
console.log(name_roles.filter(d => d['role']=='admin').map(user => user['name']))

// 4.	Используя синтаксис:
// const sum = arr.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// });
// Вычислите средний балл студентов.
arr.reduce((a, b) => a + b)/arr.length;

// 5. Используя синтаксис, создайте собственную функцию высшего порядка, которая из заданного массива возвращает массив, состоящий из нулей (для тех элементов длинна которых меньше либо равна 3) и единиц (в другом случае).
// const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];
//
// function mapForEach(arr, fn) {
//   const newArray = [];
//   for(let i = 0; i < arr.length; i++) {
//     newArray.push(
//       fn(arr[i])
//     );
//   }
//   return newArray;
// }
// const lenArray = mapForEach(strArray, function(item) {
//   return item.length;
// });
// // выводит [ 10, 6, 3, 4, 1 ]
// console.log(lenArray);
const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];
strArray.map(s => s.length > 3 ? 1: 0)
