// Write your solution in this file!
let driver = {};
function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj = { ...driver};
  newObj[key] = value;
  return newObj;
}
updateDriverWithKeyAndValue(driver, "name", "Sam");
updateDriverWithKeyAndValue(driver, "address", "11 Broadway");

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  let res = Object.assign({}, driver)
  delete res[key]
  return res
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}