var myFirstPromise = first() //global function provided by tester

myFirstPromise.then(function(value){
     return second(value);
}).then((res)=>console.log(res))