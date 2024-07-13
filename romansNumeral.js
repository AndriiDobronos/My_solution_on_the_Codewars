class RomanNumerals {
    static toRoman(num) {
        const units = (num)=> {
            const unitsRoman = ["I","II","III","IV","V","VI","VII","VIII","IX"]
            let units = num%10
            return unitsRoman[units - 1] || ""
        }
        const tens = (num)=> {
            const tensRoman = ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"]
            let tens = (num%100 - num%10)/10
            return tensRoman[tens -1] || ""
        }
        const hundreds = (num) => {
            const hundredsRoman = ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]
            let hundreds = (num%1000 - num%100)/100
            return hundredsRoman[hundreds - 1] || ""
        }
        const thousands = (num)=> {
            const thousandsRoman = ["M","MM","MMM"]
            let thousands = (num% 10000 - num%1000)/1000
            return thousandsRoman[thousands - 1] || ""
        }
        return `${thousands(num)}${hundreds(num)}${tens(num)}${units(num)}`
    }

    static fromRoman(str) {
        const arrFromRomane = str.split('')
        let currentIndex = arrFromRomane.length
        const units = ()=> {
            const unitsRoman = ["I","II","III","IV","V","VI","VII","VIII","IX"]
            const unitsStartIndex = arrFromRomane.findIndex(el=>{return el === "I" || el === "V"})
            console.log("current",currentIndex)
            const romaneUnits = arrFromRomane.slice(unitsStartIndex,currentIndex).join('')
            currentIndex = (unitsStartIndex === -1) ?  currentIndex : unitsStartIndex
            console.log("units!!",unitsStartIndex,":",currentIndex,":",romaneUnits )
            return unitsRoman.findIndex(el=>{return el === romaneUnits}) + 1
        }
        const tens = ()=> {
            const tensRoman = ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"]
            const tensStartIndex = (arrFromRomane.findIndex(el=>{return el === "X" || el === "L"}) > currentIndex) ? currentIndex :
                arrFromRomane.findIndex(el=>{return el === "X" || el === "L"})
            console.log("current",currentIndex)
            const romaneTens = arrFromRomane.slice(tensStartIndex ,currentIndex).join('')
            currentIndex = (tensStartIndex === -1) ? currentIndex  : tensStartIndex
            console.log("tens!!",tensStartIndex,":",currentIndex,":", romaneTens)
            return tensRoman.findIndex(el=>{return el === romaneTens}) + 1
        }
        const hundreds = () => {
            const hundredsRoman = ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]
            const hundredsStartIndex = (arrFromRomane.findIndex(el=>{return el === "C" || el === "D"}) > currentIndex) ? currentIndex :
                arrFromRomane.findIndex(el=>{return el === "C" || el === "D"})
            console.log("current",currentIndex)
            const romaneHundreds = arrFromRomane.slice(hundredsStartIndex ,currentIndex ).join('')
            currentIndex = (hundredsStartIndex === -1) ? currentIndex : hundredsStartIndex
            console.log("hundred!!",hundredsStartIndex,":",currentIndex,":", romaneHundreds )
            return hundredsRoman.findIndex(el=>{return el === romaneHundreds}) + 1
        }
        const thousands = ()=> {
            const thousandsRoman = ["M","MM","MMM"]
            const thousandsStartIndex = arrFromRomane.findIndex(el=>{return el === "M"})
            console.log("current",currentIndex)
            const romaneThousands = arrFromRomane.slice(thousandsStartIndex,currentIndex).join('')
            console.log("thousand!!",thousandsStartIndex,":",currentIndex,romaneThousands )
            return thousandsRoman.findIndex(el=>{return el === romaneThousands}) + 1
        }
        return Number(`${[units(),tens(),hundreds(),thousands()].reverse().join('')}`)
    }
}
console.log(RomanNumerals.toRoman(2008) )
console.log(RomanNumerals.fromRoman('MMLXVIII'))

//********************************************* BEST SOLUTION ********************//
//function RomanNumerals() {
// }
//
// RomanNumerals.toRoman = function(n) {
//   var r1000 = ["","M","MM","MMM"][Math.floor(n/1000)];
//   var r100 = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"][Math.floor(n%1000/100)];
//   var r10 = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"][Math.floor(n%100/10)];
//   var r1 = ["","I","II","III","IV","V","VI","VII","VIII","IX"][Math.floor(n%10)];
//   return r1000+r100+r10+r1
// };
//
// RomanNumerals.fromRoman = function(roman) {
//   var order='MDCLXVI'
//   var letters = {M:1000,D:500,C:100,L:50,X:10,V:5,I:1}
//   var sum = 0
//   for (var i=0; i<roman.length-1; i++) {
//     sum += (order.indexOf(roman[i]) > order.indexOf(roman[i+1]) ? -1 : 1)*letters[roman[i]]
//   }
//   sum += letters[roman[roman.length-1]]
//   return sum
// }