const GM="GM"
const GN="GN"

let gmaction=()=>{
    console.log('test1')
    return {type:GM}
}
let gnaction=()=>{
    console.log('test2')
    return {type:GN}
}
export{gmaction,gnaction,GM,GN}