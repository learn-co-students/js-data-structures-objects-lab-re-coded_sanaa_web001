// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
 return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]: value});
}

function deleteFromDriverByKey(driver, key) {
  let results =  Object.assign({}, driver);
  delete results[key];
  return results;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}

updateDriverWithKeyAndValue(driver, 'key1', 'value1');
console.log(deleteFromDriverKey(driver, 'key1'));