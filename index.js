// zadanie 1
// В сортировке пузырьком добавить следующую оптимизацию (кто не успел): если за проход (внутренний цикл) не было произведено ни одной замены, то закончить сортировку (выйти из внешнего цикла).
// let a = [1,2,1234,346,123,7865,234,4567,6758,34,234,12]

// const bubbleSort = arr=>{
//     for (let i = 0, endI = arr.length - 1; i < endI ; i++) {
//         let wasSwap = false;
//         for (let j = 0, endJ = endI - i; j < endJ; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//                 wasSwap = true;
//             }
//         }
//         if (!wasSwap) break;
        
//     }
//     return a
// }

// console.log(bubbleSort(a));

//zadanie2

//let arr = ['первый', 'второй', 'третий','машина','автобус'];
//console.log(arr.map(n => n.replace(/./, m => m.toUpperCase())).join(', '))

//zadanie3

// let arr = ['первый', 'второй',1,true];

// const deleteWords = arr.filter ((word, index, arr) => {
//     arr.pop()
//     return word.length < 2
//   })

// console.log(arr.map(n => n.replace(/./, m => m.toUpperCase())).join(', '))


//zadanie4

// let arr2 = [1.23,34.3566,2.85,12.852];

// const Ceil = (str)=>{
//     for (let i = 0; i < arr2.length; i++) {
//         let roundElement = Math.ceil(arr2);
//         console.log(roundElement)
        
//     }
// }
// console.log(arr2.push(Math.ceil()));

//zadanie6

// let str=[1,2,3]
// const reverse = (str) => {
//     let i = str.length - 1;
//     let result = '';
  
//     while (i >= 0) {
//       result = result + str[i];
//       i = i - 1;
//     }
  
//     return result;
//   };

// console.log(reverse(str))

//zadanie7

// arr = [1, false, 2, undefined, '', 3, null,6,1,34,]

// const Compact = (arr2) => {
//     arr = arr.filter(Boolean);
//     console.log(arr)
// }

// console.log(Compact(arr))

//zadanie8

// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// const arrayClone=(arr)=> {
//  return arr.slice(0);
// };

// console.log(arrayClone(vegetables));

//zadanie9

// let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// const String = (arr) =>{
//     return vegetables.toString()
// };

// console.log(String(vegetables))

//zadanie10

// const num = +prompt('Введите число', 55);

// const colonOdd = (num)=> {
//   let str = num.toString();
//   let result = [str[0]];
//   for(let i=1; i<str.length; i++) {
//       if((str[i-1]%2 !== 0)&&(str[i]%2 !== 0)) {
//         result.push(':', str[i]);
//        }
//       else {
//         result.push(str[i]);
//       }
//   }
//   return result.join('');  
// }

// console.log(colonOdd(num))

//zadanie11
// const data = [1,2,1,2,3]

// const unique = (arr)=>{
//     return data.filter((item,index)=>data.indexOf(item) === index)
// }

// console.log(unique(data))

//zadanie12

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// const arr3 = [1, 2, 3, 5];
// const arr4 = [1, 2, 3, 4, 5];

// const isEqual = (firstArray, secondArray) => {
//     for(let i = 0; i<arr1.length;i++)
//     {
//         if(firstArray[i]!= secondArray[i]){
//          return true;
//         }else
//         {
//         return false;
//         }
//     }
// }

// console.log(isEqual(arr1, arr2)); 
// console.log(isEqual(arr1, arr3)); 
// console.log(isEqual(arr1, arr4));

//zadanie13

// const chooseYears = (start,end) =>{
//     let arr = [];
//     for (let i = start;i <=end;i++) {
//         if(i%4 === 0){
//             arr.push(i)
//         }
     
//     }
//     return arr
// }

// console.log(chooseYears(2000,2018))

//zadanie14

// let array=[1,2,3,4,5,6,7,8,9];

// const getFirst =(array,n) => {
//     if (array==null) {
//         return false;
//     };
//     if (n==null) {
//         return array[0];
//     };
//     return array.slice(0, n);
// }

// console.log(getFirst(array,1))
// console.log(getFirst(array,4))
// console.log(getFirst(array,-3))

//zadanie15

// const array = [1,2,3,4,5,6,7,8,9];

// const getLast = (array,n)=>{
//     if (array == null) {
//         return false;        
//     }
//     if (n == null) {
//         return array[0];        
//     }
//     return array.slice(Math.max(array.length-n,0));
// }

// console.log(getLast(array,1));
// console.log(getLast(array,4));
// console.log(getLast(array,12));

//zadanie16

// const sumOfSquares = (arr) =>{
//     return arr.reduce(function(a,b){
//         return a + b*b;
//     })
// }

// console.log(sumOfSquares([1,2,3,4,5]))

//zadanie17

// const arr1 = [1, 2 , 3 , 4 , 5 , 6 , 7, 8 ,9];

// const sumAndproduct = (arr) =>{
//     let sum = 0;
//     let product = 1;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         product *=arr[i];
      
//     }

//     return 'Сумма : ' +sum + ' Произведение : ' +product
// }
// console.log(sumAndproduct(arr1));


//zadanie18

// const removeItem = (arr,num) => {
//     let newarr = []; 

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] != num) {
//             newarr.push(arr[i])
//         };
        
//     }
//     return newarr;
// }

// console.log(removeItem([3, 5, 7, 8, 5], 5));

//zadanie19

// const moveElement= (arr,from,to) => {
//     arr.splice(to,0, arr.splice(from,1)[0])
//     return arr
// }

// const arr = [ 'a', 'b', 'c', 'd', 'e'];
// console.log(moveElement(arr,3,1))

//zadanie20

// const generateRange = (start, end) => {
//     let arr = new Array;
//     for (let i = 0; i < end; i++, start++) {
//         arr[i] = start;
        
//     }
//     return arr
// }

// console.log(generateRange(0,5))
// console.log(generateRange(-5,4))

//zadanie21

// const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// const newRange = (arr) => {
//     for (let i = 0; i < array.length; i++) {
//         arr.map((vegetables) => vegetables.length)
        
//     }
    

// }

// console.log(newRange(vegetables))

//zadanie22

// const numbers = [2, 3, 5, 7, 11, 13, 17];

// const currentSums = (numbers) => {
   
//     return numbers.reduce(numbers = sum)
// }

// console.log(currentSums(numbers))

//zadanie23
// let str = "Каждый охотник желает знать, где сидит фазан.";

// const getFirstChar = (str) => {
//     return str.split(' ').map(_ => _[0])
//     }

// console.log(getFirstChar(str))

//zadanie24

// let a = [1,2,3];
// let b = [4,5,6];
// let c = [7,8,9];

// const getArr = (a,b,c) => {
//     const generic  = a.concat(...b,...c)
//     let result = [];

//     while(generic .length){
//         result.push(generic .pop())
//     }

//     return result;
// }

// console.log(getArr(a,b,c))