console.log([1,2,3,4,5,6,7,8,9].map(_ => _ + 3)) //[4,  5,  6,  7, 8, 9, 10, 11, 12]
console.log(['q','s','n','a','i','d','b'].sort()) // ['a', 'b', 'd', 'i', 'n', 'q', 's']
const arrD = ['q','s','q','n','a','i','d','b','b'].filter((e,i,a) => (i===0) || a[i-1] !== e)
console.log(arrD)
//['q','s','n','a','i','d','b']
console.log(((e)=>['q','s','n','a','i','d','b','b'].map((e2) => e+e2))('5'))
const phrase = "Consectetur"
const arrF = [...phrase].map(el  =>  el.toUpperCase()) // [C,O,N,S,E,C,T,E,T,U,R]
console.log(arrF)
console.log([...new Set(['q','s','q','n','a','i','d','b','b'])])