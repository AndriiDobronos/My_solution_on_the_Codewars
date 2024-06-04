//Write a function that when given a URL as a string,
// parses out just the domain name and returns it as a string.
// For example:
//
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    if(url.includes('//www.')) {
        return url.split('//www.').pop().split('.').splice(0,1)[0]
    }
    if(url.includes('//') && !url.includes('//www.')) {
        return url.split('//').pop().split('.').splice(0,1)[0]
    }else{
        return url.split('www.').pop().split('.').splice(0,1)[0]
    }
}
console.log(domainName("http://google.com"))
console.log(domainName("http://google.co.jp"))
console.log(domainName("www.xakep.ru"))
console.log(domainName("https://youtube.com"))
console.log(domainName("https://www.zombie-bites.com"))