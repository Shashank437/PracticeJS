var inputs = process.argv.slice(2);
var result = inputs.map((ele)=>ele[0]).reduce((total,ele)=>total+ele);

console.log(`[${inputs}] becomes "${result}"`)