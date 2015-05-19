1. Ajax -> Ajax -> Ajax

2. Ajax
   Ajax
   Ajax
   
   
Async
=====

1. Callbacks
2. Events
3. Promises

Async?
Non Blocking

//Sync
function add(x,y){
    console.log("returning result");
    var result = x + y;
    return result;
}

function usingAdd(x,y){
    console.log("invoking add");
    var result = add(x,y);
    console.log("result = ", result);
}

//Async Using Callbacks
function addAsync(x,y, onResult){
    setTimeout(function(){
        console.log("returning result");
        var result = x + y;
        if (typeof onResult === "function")
            onResult(result);
    },5000);
}

function usingAddAsync(x,y){
    console.log("invoking add");
    addAsync(x,y, function(result){
        console.log("result = ", result);
    });
}


//Async Using Events
function getAsyncAdder(){
    var _callbacks = [];
    return {
        addOnResult : function(onResultCallback){
            _callbacks.push(onResultCallback);
        },
        add : function(x,y){
            setTimeout(function(){
                console.log("returning result");
                var result = x + y;
                _callbacks.forEach(function(callback){
                    callback(result);
                });
            },5000)
        }
    }
}

var adder = getAsyncAdder();
adder.add(100,200);


adder.addOnResult(function(result){
  console.log("result = ", result);
});


//Async using Promises
function addUsingPromise(x,y){
    var promise = new Promise(function(resolve, reject){
       setTimeout(function(){
           console.log("returning result [add]");
           var result = x + y;
           resolve(result);
       }, 5000); 
    });
    return promise;
}

function multiplyUsingPromise(x,y){
    var promise = new Promise(function(resolve, reject){
       setTimeout(function(){
           console.log("returning result [ multiply ]");
           var result = x + y;
           resolve(result);
       }, 10000); 
    });
    return promise;
}

function subtractUsingPromise(x,y){
    var promise = new Promise(function(resolve, reject){
       setTimeout(function(){
           console.log("returning result [subtract]");
           var result = x + y;
           resolve(result);
       }, 15000); 
    });
    return promise;
}


