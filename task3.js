//Greed is a dice game played with five six-sided dice.
// Your mission, should you choose to accept it, is to score
// a throw according to these rules. You will always be
// given an array with five six-sided dice values.
//
//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll.
// For example, a given "5" can only count as part of a
// triplet (contributing to the 500 points) or as a
// single 50 points, but not both in the same roll.
//
// Example scoring
//
//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// In some languages, it is possible to mutate the input to the function.
// This is something that you should never do.
// If you mutate the input, you will not be able to pass all the tests.
function score( dice ) {
    let result = 0;
    let cameIn1 = false
    let cameIn2 = false
    let cameIn3 = false
    const diceCopy = [...dice]
    diceCopy.sort((a,b)=> a-b)
    diceCopy.forEach((el,index)=>{
        if(diceCopy[index] === diceCopy[index+4] && index < 1 && !cameIn1){
            result += el===1 ? 1200 : el===5 ? 600 : el*100
            diceCopy.splice(0,5);
            cameIn1 = true
            console.log('1',result,":",diceCopy)
        }
        if(diceCopy[index] === diceCopy[index+3] &&  !cameIn2 && !cameIn1){
            result += el===1 ? 1100 : el===5 ? 550 : el*100
            diceCopy.splice(index,4);
            cameIn2 = true
            console.log("2",result,":",diceCopy)
        }
        if(diceCopy[index] === diceCopy[index+2] &&!cameIn1 && !cameIn2 && !cameIn3){
            result += el===1 ? 1000 : el*100
            diceCopy.splice(index,3);
            cameIn3 = true
            console.log("3",result,":",diceCopy)
        }
    })
    diceCopy.forEach((el,index)=>{
        if(el === 1 ) {
            result += 100
            diceCopy.splice(diceCopy.indexOf(el),1);
            console.log('4',result,":",diceCopy)
        }
        if(el === 5 ) {
            result += 50
            diceCopy.splice(diceCopy.indexOf(el),1);
            console.log('5',result,":",diceCopy)
        }
    })
    diceCopy.forEach((el,index)=>{
        if(el === 5 ) {
            result += 50
            diceCopy.splice(diceCopy.indexOf(el),1);
            console.log('5',result,":",diceCopy)
        }
        if(el === 1 ) {
            result += 100
            diceCopy.splice(diceCopy.indexOf(el),1);
            console.log('4',result,":",diceCopy)
        }
    })

    return result
}
console.log(score( [1, 1 ,2, 3, 6] )) //0
//console.log(score( [4, 4, 4, 1, 3] )) //500
//console.log(score([5, 5, 3, 3, 5]))//500
//console.log(score([1,4,4,5,4]))//400
//*************************************************************//
// best solution :

function _score( dice ) {
    const dc = [0,0,0,0,0,0];
    const tdr = [1000,200,300,400,500,600];
    const sdr = [100,0,0,0,50,0];
    dice.forEach(function(x){ dc[x-1]++; });
    return dc.reduce(function(s,x,i){
        return s + (x >= 3? tdr[i] : 0) + sdr[i]*(x % 3);
    },0);
}