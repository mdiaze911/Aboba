// задача №1
const fill = (arraySize, value) => {
  for (let i = 0; i < arraySize; i++) {
    result += arraySize;
  }
  return result
}

const dataFill1 = 3;
const valueToFill1 = 'a';
console.log(fill(dataFill1, valueToFill1)) 

const dataFill2 = 12;
const valueToFill2 = 'o';
console.log(fill(dataFill2, valueToFill2))

const dataFill3 = 999;
const valueToFill3 = 'k';
console.log(fill(dataFill2, valueToFill3))

// задача №2
const reverse = (array) => {
  let reverseArray = array.reverce()
  return reverseArray
 }

const dataReverse1 = [1, 2, 3];
console.log(reverse(dataReverse1)); // [3, 2, 1]

const dataReverse2 = [5, 2, 3, 10];
console.log(reverse(dataReverse2)); // [10, 3, 2, 5]

const dataReverse3 = [9, 7, 2, 1, 5];
console.log(reverse(dataReverse3)); // [5, 1, 2, 7, 9]

// задача №3
const compact = (array) => {
  return array.filter(value => {
    return value !== false && value !== undefined && value !== '' && value !== 0 && value !== null;
  });
}

const dataCompact1 = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(dataCompact1)) // [1, 2, 3]

const dataCompact2 = [2, 3, undefined, 5, ''];
console.log(compact(dataCompact2)) // [2, 3, 5]

const dataCompact3 = [8, null, 22, false, true];
console.log(compact(dataCompact3)) // [8, 22]
