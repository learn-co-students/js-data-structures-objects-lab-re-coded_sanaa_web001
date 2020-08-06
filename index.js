// Write your solution in this file!
let driver={name:"ali",
            age:28}

function updateDriverWithKeyAndValue(obj,key,val){
  return Object.assign({},obj,{ [key]: val })
}

function destructivelyUpdateDriverWithKeyAndValue(obj,key,val){
   return Object.assign(obj,{ [key]: val })
}
function deleteFromDriverByKey(obj,key){
 const newObj = Object.assign({}, obj);
 delete newObj[key];
 return newObj;
}
function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}
