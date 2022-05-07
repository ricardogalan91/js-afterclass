
let arr=[1,2,3]

//push
arr.push(4);
//console.log(arr);

//filter
//Retorna un nuevo array conteniendo todos los elementos del array llamado donde la funcion de filtrado dio true
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

//console.log(result);

//find
//Este metodo retorna el primer elemento en el array proveido que satisfaga la funcion, si no hay ningun valor que satisfaga se retornaría undefined.
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

//console.log(found);

//findIndex
//El metodo de findIndex retorna el index del primer elemento del array que satisfaga las condiciones de la funcion, sino retornaría -1 indicando que ningun elemento pasó la condición
const array2 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

//console.log(array2.findIndex(isLargeNumber));

//forEach
//Este metodo ejecuta  la funcion por cada uno de los elementos del array.
const array3 = ['a', 'b', 'c'];

array3.forEach(element => console.log(element));

//map
//map crea un nuevo array lleno de los resultados de la funcion en cada uno de los elementos del array

const array4 = [1, 4, 9, 16];

const map1 = array4.map(x => x * 2);

//console.log(map1);

//splice
//El metodo splice cambia el contenido del array removiendo o reemplzando elementos al array
//de la siguiente forma 
//splice(start, deleteCount)
//splice(start, deleteCount, item1)
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);

months.splice(4, 1, 'May');
//console.log(months);


