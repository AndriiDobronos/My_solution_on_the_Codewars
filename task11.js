function reverseFizzBuzz(str) {
    const inputArr = str.split(' ')
    const outputArr = []
    const firstElement = []
    inputArr.forEach((el,index) => {
        if(!!+el) {
            firstElement.push(+el);
            return
        }
        if(!+el && !!+inputArr[index+1]) {
            firstElement.push(inputArr?.slice(index + 1,index + 2)[0] - 1)
            return
        }
        if(!+el && !+inputArr[index+1] && !!+inputArr[index+2]) {
            firstElement.push(inputArr?.slice(index + 2,index + 3)[0] - 2)
            return
        }
        if(el === 'Fizz' && inputArr[index+1] === 'Buzz' && inputArr.length === 2) {
            firstElement.push(9)
            return
        }
        if(el === 'Buzz' && inputArr[index+1] === 'Fizz' && inputArr.length === 2) {
            firstElement.push(5)
            return
        }
        if(!+el && inputArr.length === 1 && el === 'Buzz') {
            firstElement.push(5)
            return
        }
        if(!+el && inputArr.length === 1 && el === 'Fizz') {
            firstElement.push(3)
            return
        }
        if(!+el && inputArr.length === 1 && el === 'FizzBuzz') {
            firstElement.push(15)
            return
        }
    })
    for(let i = 0;i<inputArr.length ;i++) {
        outputArr.push(firstElement[0] + i)
    }
    return outputArr
}
console.log(reverseFizzBuzz("1 2 Fizz 4 Buzz")) //[1, 2, 3, 4, 5]
console.log(reverseFizzBuzz("Fizz 688 689 FizzBuzz")) //[687, 688, 689, 690]
console.log(reverseFizzBuzz("Fizz Buzz")) //[9, 10]
console.log(reverseFizzBuzz("1 2 Fizz 4 Buzz Fizz")) //[ 1, 2, 3, 4, 5, 6 ]