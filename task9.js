//Implement a function that receives two IPv4 addresses,
// and returns the number of addresses between them
// (including the first one, excluding the last one).
//
// All inputs will be valid IPv4 addresses in the form of strings.
// The last address will always be greater than the first one.
//
// Examples
// * With input "10.0.0.0", "10.0.0.50"  => return   50
// * With input "10.0.0.0", "10.0.1.0"   => return  256
// * With input "20.0.0.10", "20.0.1.0"  => return  246
function ipsBetween(start, end){
    const arrInputStart = start.split('.').map(el=>+el)
    const arrInputEnd = end.split('.').map(el=>+el)
    const arrResult = [];
    arrInputEnd.map((el,index )=> arrResult.push(el - arrInputStart[index]))
    let result = 0;
    arrResult.reverse().map((el,index)=> result += el*256**index)
    return result
}
console.log(ipsBetween("10.0.0.0", "10.0.0.50"))
console.log(ipsBetween("10.0.0.0", "10.0.1.0"))
console.log(ipsBetween("20.0.0.10", "20.0.1.0"))