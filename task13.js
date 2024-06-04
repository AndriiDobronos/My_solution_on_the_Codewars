function shuffleIt(arr,...args) {
    args.forEach((arg)=>{
        const [a,b] = arg
        const nextArr = []
        const firstEl = arr[a]
        if(arr.length > b) {
            arr.splice(a,1,arr[b])
            arr.splice(b,1,firstEl)
            nextArr.push(...arr)
            //nextArr.push(...arr.toString().replace(`${arr[a]},${arr[b]}`,`${arr[b]},${arr[a]}`).split(','))
            arr.splice(0,arr.length,...nextArr)
        }
    })
    return arr.map(el=>+el)
}
console.log(shuffleIt([1,2,3,4,5],[1,2]))
console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4]))
console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3])) // [ 1, 3, 5, 2, 4 ]

const shuffleItSuper=(arr,...args)=>{
    for ([a,b] of args) [arr[a],arr[b]]=[arr[b],arr[a]];
    return arr;
}
console.log(shuffleItSuper([1,2,3,4,5],[1,2]))
console.log(shuffleItSuper([1,2,3,4,5],[1,2],[3,4]))
console.log(shuffleItSuper([1,2,3,4,5],[1,2],[3,4],[2,3])) // [ 1, 3, 5, 2, 4 ]
