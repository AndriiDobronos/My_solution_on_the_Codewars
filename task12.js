function convergence(n){
    //const baseSequence = [1, 2, 4, 8, 16, 22, 26, 38, 62, 74, 102, 104, 108, 116, 122];
    const getNext = (n) => {
        if (n < 10) {
            return n + n;
        } else {
            let product = 1;
            let str = String(n);
            for (let digit of str) {
                if (digit !== '0') {
                    product *= Number(digit);
                }
            }
            return n + product;
        }
    }
    const getBaseSequence = (n) => {
        const baseSequence = [1]
        for(let j=0;j<n+5;j++) {
            let nextBaseEl = getNext(baseSequence[j])
            baseSequence.push(nextBaseEl);
        }
        return baseSequence
    }
    const baseSequence = getBaseSequence(n)
    const testSequence = [n];
    let convergenceIndex = 0;
    for(let i=0;i<n+5;i++) {
        let next = getNext(testSequence[i]);
        if (baseSequence.includes(next)) {
            convergenceIndex = baseSequence.indexOf(next);
            break;
        }
        testSequence.push(next);
    }
    return testSequence.length
    //const length = testSequence.length
    //return ({testSequence,length,baseSequence,convergenceIndex})
}
console.log(convergence(3))
//console.log(convergence(500))
//console.log(convergence(5000))