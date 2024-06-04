const string = "Going to WAH today. NRN. OOO"//"I am IAM so will be OOO until EOD"//"BRB I need to go into a KPIs meeting before EOP EOD"
const arr = string.split('.').join(' .').split(' ')
let amount = 0
arr.forEach((element,index,array) => {
    switch (element) {
        case 'KPI': arr.splice(index,1,"key performance indicators");
          break;
        case  'TBD': arr.splice(index,1,"to be decided");
          break;
        case 'WAH': arr.splice(index,1,"work at home");
          break;
        case 'IAM': arr.splice(index,1,"in a meeting");
          break;
        case 'OOO': arr.splice(index,1,"out of office");
          break;
        case 'NRN': arr.splice(index,1,"no reply necessary");
          break;
        case 'CTA': arr.splice(index,1,"call to action");
          break;
        case 'EOD': arr.splice(index,1,"the end of the day");
          break;
        case 'SWOT': arr.splice(index,1,"strengths, weaknesses, opportunities and threats");
          break;
        default: if (element.match(/[A-Z]{3,}/) && amount < 1) {
            arr.splice(0,arr.length,`[${element}] is an acronym. I do not like acronyms. Please remove them from your email.`)
            amount +=1
        }
    }
});

arr.forEach((el,index)=>{
    if(el === '.') {
        arr.splice(index+1,1,arr[index+1].split('')[0].toUpperCase().concat(arr[index+1].split('').splice(1,arr[index+1].length).join('')))
    }
})
console.log(arr.join(' ').split(' .').join('.'))
//console.log(arr)