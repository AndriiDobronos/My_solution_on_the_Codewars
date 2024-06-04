//You will be given an array of numbers. You have to sort the odd
// numbers in ascending order while leaving the even numbers at their
// original positions.
//
// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    const oddArr = []
    const evenArr = []
    array.forEach((el)=>{if(el%2 !== 0){
        oddArr.push(el)
        evenArr.push('')
    }else{
        evenArr.push(el)
    }})
    oddArr.sort((a,b)=> a-b)
    let i = 0;
    evenArr.forEach((el,index)=>{if(el === ''){
        evenArr.splice(index,1,oddArr[i])
        i = i + 1
    }})
    return evenArr
}
//console.log(sortArray([7, 1]))
//console.log(sortArray([5, 8, 6, 3, 4]))
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))

//*******************************************************************//
// best solution :
function _sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}