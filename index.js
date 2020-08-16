// Write your solution in this file!

var driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const driver2 = Object.assign({}, driver);
  driver2[key] = value;

  return driver2;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
   driver[key] = value;
   return driver;
}

function deleteFromDriverByKey(driver, key) {
  // copy object
  const newObject = Object.assign({}, driver);
  delete newObject[key];
  return newObject;
  // delete from the object copy
  // return
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
