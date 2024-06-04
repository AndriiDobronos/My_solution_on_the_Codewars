//In this kata, your task is to create all permutations of a
// non-empty input string and remove duplicates, if present.
// Create as many "shufflings" as you can!
//
// Examples:
//
// With input 'a':
// Your function should return: ['a']
//
// With input 'ab':
// Your function should return ['ab', 'ba']
//
// With input 'abc':
// Your function should return ['abc','acb','bac','bca','cab','cba']
//
// With input 'aabb':
// Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

// function permutations(string) {
//     const initArr = string.split('')
//     const mySet = new Set(initArr)
//     const numVariableInString = mySet.size //2
//     const arrUniqSymbol = [...mySet] //[a,b]
//     let j=17
//     function generator() {
//         let i = 0;
//         const sourceArr = []
//         while(i < initArr.length) {
//             const addingZero = i.toString(2).length === 1 ? '0'+ i.toString(2) : i.toString(2)
//             sourceArr.push(addingZero)
//             i++
//         }
//         return sourceArr
//     }
//
//     return generator()
//     //const re = /([A-Za-z]+)([A-Za-z]+)([A-Za-z]+)([A-Za-z]+)/;
//     //return string.replace(re, "$3$2$1$4");
// }
//console.log(permutations('acbb')
function permutations(string) {
    function generatePermutations(string) {
        if (string.length === 0) return [''];
        let result = [];
        for (let i = 0; i < string.length; i++) {
            let currentChar = string[i];
            // Получаем оставшуюся строку без текущего символа
            let remainingChars = string.slice(0, i) + string.slice(i + 1);

            // Рекурсивно вызываем функцию для оставшейся строки
            let remainingPermutations = generatePermutations(remainingChars);
            console.log(remainingPermutations)
            // Добавляем текущий символ к каждой из перестановок оставшейся строки
            for (let perm of remainingPermutations) {
                result.push(currentChar + perm);
            }
        }
        // Возвращаем массив всех перестановок
        return result;
    }
    const mySet = new Set(generatePermutations(string))
    return [...mySet]
}

console.log(permutations('abcd'));
let string = 'qwerRrytruytyiyiuoi'
//console.log(string.slice(0, 5) ,':', string.slice(5 + 1))


// Best practices
const unique = xs => [ ...new Set(xs) ]
const concat = (a, b) => [ ...a, ...b ]
const drop = i => xs => [ ...xs.slice(0, i), ...xs.slice(i + 1) ]

const permute = (x, i, xs) =>
    combinations(drop(i)(xs)).map(y => x + y)

const combinations = s =>
    s.length === 1 ? [ s ] : [ ...s ].map(permute).reduce(concat)

const permutationsB = s => unique(combinations(s))
console.log(permutationsB('abcd'));