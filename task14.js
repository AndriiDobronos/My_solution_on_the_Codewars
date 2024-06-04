const letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
function decode(code, n) {
    const nArr = n.toString().split('')
    const decode = []
    const decodeInLatter = []
    code.forEach((el,index)=> {
        //code.splice(index,1,el - nArr[index - nArr.length*Math.floor(index/nArr.length)])
        decode.push(el - nArr[index - nArr.length*Math.floor(index/nArr.length)])
    })
    decode.forEach((el,index)=> {
        decodeInLatter.push(letter[el - 1])
    })
    return decodeInLatter.join('') ;
}
console.log(decode([ 20, 12, 18, 30, 21], 1939))
console.log(decode([26,25,8],1779))
console.log(String.fromCharCode(12,11,6,1,2,3,4,5,6,1+96,2+96,3+96))