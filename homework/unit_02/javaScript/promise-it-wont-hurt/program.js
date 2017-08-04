// Warm up
// Fulfill a promise
// Reject a promise
// To reject or not to reject
// Always asynchronous
// Shortcuts
// Promise after promise


// warm up
setTimeout(function(){
    console.log('TIMED OUT!');
}, 300);

// fulfill a promise

var promise = new Promise(function (fulfill, reject) {
    setTimeout(function(){
        fulfill('FULFILLED!');
    }, 300);
});
promise.then(console.log);

//reject a promise
var promise = new Promise(function (fulfill, reject) {
    setTimeout(function() {
        reject(new Error('REJECTED!'));
    }, 300);
});
function onReject (error) {
    console.log(error.message);
}
promise.then(null, onReject);
