// Write your solution in this file!
let driver={name: 'Sam'};
function updateDriverWithKeyAndValue(obj, key, value){
  let copy = Object.assign({}, obj);
  copy[key]=value;
  return copy;
}
function destructivelyUpdateDriverWithKeyAndValue(obj,key,value){
  // delete driver['key'];
  // driver.key=value;
  driver['address']=value;
  return driver;
}
function deleteFromDriverByKey(driver, key){
  let newObj=Object.assign({},driver);
  delete newObj[key];
  return newObj;
}
function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}
updateDriverWithKeyAndValue(driver, 'address', '11 Broadway');
destructivelyUpdateDriverWithKeyAndValue(driver, 'address', '12 Broadway');