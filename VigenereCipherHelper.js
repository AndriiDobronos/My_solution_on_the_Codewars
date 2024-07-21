function VigenereCipher(key, abc) {
    this.encode = function (str) {
        const arrInput = str.split("")
        const arrABC = abc.split("")
        const arrOutput = [];
        const inputOfNumbers = []
        const keyOfNumbers = [];
        const arrKey = [];
        let j = 0;
        while(j < arrInput.length) {
            if(arrABC.indexOf(arrInput[j]) === -1) inputOfNumbers.push(arrInput[j])
            arrABC.map((el,index)=>{
                if(el === arrInput[j]) inputOfNumbers.push(index)
            })
            j++
        }
        for (let k = 0; k < arrInput.length; k++) {
            arrKey.push(key[k % key.length]);
        }
        let i = 0;
        while( i < arrKey.length) {
            if(arrABC.indexOf(arrKey[i]) === -1) keyOfNumbers.push(0)
            arrABC.map((el,index)=>{
                if(el === arrKey[i]) keyOfNumbers.push(index)
            })
            i++
        }
        arrInput.map((el,index)=> {
            let sumIndex
            if(typeof inputOfNumbers[index] !== "number") {
                sumIndex = inputOfNumbers[index]
                arrOutput.push(sumIndex)
            }else {
                sumIndex = (keyOfNumbers[index] + inputOfNumbers[index] >= abc.length) ? (keyOfNumbers[index] + inputOfNumbers[index] - abc.length) :
                    keyOfNumbers[index] + inputOfNumbers[index];
                arrOutput.push(arrABC[sumIndex])
            }
        })
        return arrOutput.join('')
    };

    this.decode = function (str) {
        const arrInput = str.split("")
        const arrABC = abc.split("")
        const arrKey = [];
        const inputOfNumbers = []
        const keyOfNumbers = [];
        const arrOutput = [];
        for (let k = 0; k < arrInput.length; k++) {
            arrKey.push(key[k % key.length]);
        }
        let i = 0;
        while(i < arrKey.length) {
            if(arrABC.indexOf(arrKey[i]) === -1) keyOfNumbers.push(0)
            arrABC.map((el,index)=>{
                if(el === arrKey[i]) keyOfNumbers.push(index)
            })
            i++
        }
        let j = 0;
        while(j < arrInput.length) {
            if(arrABC.indexOf(arrInput[j]) === -1) inputOfNumbers.push(arrInput[j])
            arrABC.map((el,index)=>{
                if(el === arrInput[j]) inputOfNumbers.push(index)
            })
            j++
        }
        arrInput.map((el,index)=> {
            let sumIndex
            if(typeof inputOfNumbers[index] !== "number") {
                sumIndex = inputOfNumbers[index]
                arrOutput.push(sumIndex)
            } else {
                sumIndex = (inputOfNumbers[index] - keyOfNumbers[index] < 0) ? (inputOfNumbers[index] - keyOfNumbers[index] + abc.length) :
                inputOfNumbers[index] - keyOfNumbers[index];
                arrOutput.push(arrABC[sumIndex])
            }
        })
        return arrOutput.join('')
    };
}
//const abc = "abcdefghijklmnopqrstuvwxyz";
//const key = "password";
//const key = 'pizza'
const abc = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
const key = 'タコタナ'
c = new VigenereCipher(key, abc);
console.log(c.encode('codewars'))
console.log(c.decode('rwcdwpzr'))
console.log(c.encode("CODEWARS"))
console.log(c.encode( 'asodavwt'))
console.log(c.decode("pancakes"))
console.log(c.encode('タモタワ')) //マワマツ
console.log(c.decode('ノエヤス')) //コルナラ