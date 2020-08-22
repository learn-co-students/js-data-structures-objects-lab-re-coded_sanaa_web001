let driver = {
  name: 'Sam'
};
function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({},driver,{[key]:value});
}

updateDriverWithKeyAndValue(driver, "address", "11 Broadway");

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
 driver[key] = value;
 return driver;
}
destructivelyUpdateDriverWithKeyAndValue(driver, "address", "12 Broadway");

function deleteFromDriverByKey(driver, key) {
    let newObj = Object.assign({},driver);
    delete newObj[`${key}`];
    return newObj;
}
deleteFromDriverByKey(driver,"name");

function destructivelyDeleteFromDriverByKey(driver, key) {
    Object.assign({},driver);
    delete driver[`${key}`];
    return driver;
}
