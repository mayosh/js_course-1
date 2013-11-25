"use strict";

function deepCopy(obj){
  if (obj === null || typeof obj != "object"){
    return obj;
  }
  else{
    var clone = obj.constructor();
    for(var i in obj){
        if (obj.hasOwnProperty(i)){
            clone[i] = obj[i] instanceof Object?deepCopy(obj[i]):obj[i]
        }
    }
    return clone;
  }
}