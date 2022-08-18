'use strict';

function attachTitle(name){
    return 'DR. ' + name;
}

var myPromise = Promise.resolve('MANHATTAN');

myPromise.then(attachTitle).then(function(data){
    console.log(data)
})