const text = 'Lorem  ipsum  dolor  sit amet,\n' +
    'consectetur  adipiscing  elit.\n' +
    'Vestibulum    sagittis   dolor\n' +
    'mauris,  at  elementum  ligula\n' +
    'tempor  eget.  In quis rhoncus\n' +
    'nunc,  at  aliquet orci. Fusce\n' +
    'at   dolor   sit   amet  felis\n' +
    'suscipit   tristique.   Nam  a\n' +
    'imperdiet   tellus.  Nulla  eu\n' +
    'vestibulum    urna.    Vivamus\n' +
    'tincidunt  suscipit  enim, nec\n' +
    'ultrices   nisi  volutpat  ac.\n' +
    'Maecenas   sit   amet  lacinia\n' +
    'arcu,  non dictum justo. Donec\n' +
    'sed  quam  vel  risus faucibus\n' +
    'euismod.  Suspendisse  rhoncus\n' +
    'rhoncus  felis  at  fermentum.\n' +
    'Donec lorem magna, ultricies a\n' +
    'nunc    sit    amet,   blandit\n' +
    'fringilla  nunc. In vestibulum\n' +
    'velit    ac    felis   rhoncus\n' +
    'pellentesque. Mauris at tellus\n' +
    'enim.  Aliquam eleifend tempus\n' +
    'dapibus. Pellentesque commodo,\n' +
    'nisi    sit   amet   hendrerit\n' +
    'fringilla,   ante  odio  porta\n' +
    'lacus,   ut   elementum  justo\n' +
    'nulla et dolor.'
const textLorem50 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet cupiditate esse molestias quibusdam quo sint. Delectus illum ipsum iusto nam nemo optio ullam. Aut consectetur corporis delectus dolor dolores doloribus earum ex facilis hic ipsum molestias, nesciunt numquam possimus praesentium quam qui, quod recusandae repellendus sint tempore? Iste, laudantium!'
function justify(text, width) {
    const arr = text.split(' ')
    let resultLine = '';
    let line = '';
    let blanc = ' ';
    let i = 0;
    while(arr.length !== 0) {
        while(arr[i]?.length < (width+1) - line.length ) {
            line += arr[i] + blanc
            i++
        }
        let amendment = width - line.trim().length
        if(amendment === 0) {
            arr.splice(0,i)
            if(arr.length === 0) {
                resultLine += `${line.trim()}`
                }else{
                    resultLine += `${line.trim()}\n`
            }
        }
        if(amendment > 0) {
        const arrT = line.trim().split(' ');
        function corrector([arr,nCorrect]) {
            const correctArr = [];
            const space = ' '
            arr.forEach((el,index)=>{
                if(arr.length === 1) {
                    nCorrect = nCorrect - 1
                }
                if(index < arr.length-1 && nCorrect > 0) {
                    correctArr.push(el.concat(space))
                    nCorrect = nCorrect - 1
                }else {
                    correctArr.push(el)
                }
            })
            return [correctArr,nCorrect]
        }
        function result([arr, nCorrect]) {
            if(nCorrect === 0) return [arr, nCorrect]
            return result(corrector([arr, nCorrect]))
        }
        let otherLine = '';
        const resul = result([arrT,amendment])[0]
        resul.forEach((el)=>{
            otherLine += el + blanc
        })
        arr.splice(0,arrT.length);
        if(arr.length === 0) {
            resultLine += arrT.join(' ')
        }else{
            resultLine += `${otherLine.trim()}\n`
            }
        }
    line = '';
    i=0;
    }
    return resultLine
}
console.log(justify(textLorem50,30))