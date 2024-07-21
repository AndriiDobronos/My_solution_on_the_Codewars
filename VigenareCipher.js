function VigenèreCipher(key, abc) {
    this.encode = function (str) {
        let alphabetLength = abc.length;
        let extendedKey = key.repeat(Math.ceil(str.length / key.length)).slice(0, str.length);

        let result = str.split('').map((char, index) => {
            let textIndex = abc.indexOf(char);
            let keyIndex = abc.indexOf(extendedKey[index]);
            if (textIndex === -1 || keyIndex === -1) {
                // If character is not in the alphabet, leave it unchanged
                return char;
            }
            let newIndex = (textIndex + keyIndex) % alphabetLength;
            return abc[newIndex];
        });

        return result.join('');
    };

    this.decode = function (str) {
        let alphabetLength = abc.length;
        let extendedKey = key.repeat(Math.ceil(str.length / key.length)).slice(0, str.length);

        let result = str.split('').map((char, index) => {
            let textIndex = abc.indexOf(char);
            let keyIndex = abc.indexOf(extendedKey[index]);
            if (textIndex === -1 || keyIndex === -1) {
                return char;
            }
            let newIndex = (textIndex >= keyIndex) ? (textIndex - keyIndex) : (textIndex - keyIndex + alphabetLength)
            return abc[newIndex];
        });
        return result.join('');
    };
}

//const abc = "abcdefghijklmnopqrstuvwxyz";
//const key = "password";
//const key = 'pizza'

const abc = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
const key = 'タコタナ'
c = new VigenèreCipher(key, abc);
console.log(c.encode('codewars'))
console.log(c.decode('rwcdwpzr'))
console.log(c.encode("CODEWARS"))
console.log(c.encode( 'asodavwt'))
console.log(c.decode("pancakes"))
console.log(c.encode('タモタワ'))
console.log(c.decode('ノエヤス'))