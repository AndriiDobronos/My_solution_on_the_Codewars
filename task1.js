//Write a function that will return the count of distinct case-insensitive
// alphabetic characters and numeric digits that occur more than once in
// the input string. The input string can be assumed to contain only
// alphabets (both uppercase and lowercase) and numeric digits.

const string = "accd2345bb967367klodpc"
function separated(arg) {
    const results = []
    const arr = arg.split('')
    for(let el of arr) {
        const indexNumber = arr.indexOf(el)
        for(let i=indexNumber+1; i<arr.length; i++) {
            if (el === arr[i] && !results.includes(el)) {
                results.push(el)
            }
        }
    }
    const answer = []
    let c = 1
    let element = "c"
    for(let j=0; j<arr.length ;j++) {
        if(results.includes(arr[j])) {
            const obj = {}
            obj.key = arr[j]
            //obj.arr[0] = c
            answer.push(obj)
            if(answer.includes(answer[c-1])) {
               // c = c + 1
            }
        }

    }
    return answer
}
console.log(separated(string))
// example:
// [
//     { key: 'c' }, { key: 'c' },
//     { key: 'd' }, { key: '3' },
//     { key: 'b' }, { key: 'b' },
//     { key: '6' }, { key: '7' },
//     { key: '3' }, { key: '6' },
//     { key: '7' }, { key: 'd' },
//     { key: 'c' }
//   ]
