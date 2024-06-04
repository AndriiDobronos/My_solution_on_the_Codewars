//In this kata you have to implement a base converter,
// which converts positive integers between arbitrary
// bases / alphabets. Here are some pre-defined alphabets:
//
//The function convert() should take an input (string), the
// source alphabet (string) and the target alphabet (string).
// You can assume that the input value always consists of characters
// from the source alphabet. You don't need to validate it.


let bin = 'bin',oct = 'oct',dec = 'dec',hex = 'hex',allow = 'allow',alup = 'alup',alpha = 'alpha',alnum = 'alnum';
function convert(input,source,target) {
    const Alphabet = {
        BINARY:        '01',
        OCTAL:         '01234567',
        DECIMAL:       '0123456789',
        HEXA_DECIMAL:  '0123456789abcdef',
        ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
        ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    };
    const resultString = [`'"${input}"  ${source} -> ${target}'`]
    let result ='';

    function decimalToBase(baseString,radix) {
        const base = baseString.length;
        let result = '';
        while (radix > 0) {
            const remainder = radix % base;
            result = baseString[remainder] + result;
            radix = Math.floor(radix / base);
        }
        return result ? result : baseString[0];
    }

    function alphaLowerToDecimal(baseString,radix) {
        let result = 0;
        let radixLength = 0
        while (radixLength < radix.length) {
            baseString.split('').forEach((el,index)=> {
                if(el === radix[radixLength]) {
                    result = result*26 + index
                }
            })
            radixLength = radixLength + 1
        }
        return result ? result : baseString[0];
    }

    switch (`${source}`+`${target}`) {
        case 'dec'+'bin': result = (+input).toString(Alphabet.BINARY.length)
            break;
        case 'dec'+'oct': result = (+input).toString(Alphabet.OCTAL.length)
            break;
        case 'bin'+'dec': result = parseInt(input,Alphabet.BINARY.length)
            break;
        case 'bin'+'hex': result =  decimalToBase(Alphabet.HEXA_DECIMAL,parseInt(input,2))
            break;
        case 'dec'+'alpha': result =  decimalToBase(Alphabet.ALPHA,input)
            break;
        case 'dec'+'allow': result =  decimalToBase(Alphabet.ALPHA_LOWER,input)
            break;
        case 'allow'+'hex': result =  decimalToBase(Alphabet.HEXA_DECIMAL,alphaLowerToDecimal(Alphabet.ALPHA_LOWER,input))
            break;
        case 'alup'+'alup': result =  input
            break;
        default: result = '*'
    }
    resultString.unshift(result)
    return `'${resultString[0]}'`+','+` ${resultString[1]}`
}
// bin = Alphabet.BINARY, oct = Alphabet.OCTAL, dec = Alphabet.DECIMAL, hex = Alphabet.HEXA_DECIMAL,
//     allow = Alphabet.ALPHA_LOWER, alup = Alphabet.ALPHA_UPPER, alpha = Alphabet.ALPHA, alnum = Alphabet.ALPHA_NUMERIC;

console.log(convert("15", dec, bin)) //'1111', '"15" dec -> bin'
console.log(convert("15", dec, oct)) //'17', '"15" dec -> oct'
console.log(convert("1010", bin, dec)) //'10', '"1010" bin -> dec'
console.log(convert("1010", bin, hex)) //'a', '"1010" bin -> hex'
console.log(convert("0", dec, alpha))  //'a', '"0" dec -> alpha'
console.log(convert("27", dec, allow)) //'bb', '"27" dec -> alpha_lower'
console.log(convert("hello", allow, hex)) //'320048', '"hello" alpha_lower -> hex'
console.log(convert("SAME", alup, alup)) //'SAME', '"SAME" alpha_upper -> alpha_upper'
