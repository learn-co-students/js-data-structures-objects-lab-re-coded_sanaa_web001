// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  const newdri = Object.assign( {},driver)
  newdri[key] =value
  return newdri
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key]=value
  return driver
}

function deleteFromDriverByKey(driver,key){
  const newdri = Object.assign({},driver)
  delete newdri[key];
  return newdri
}

function destructivelyDeleteFromDriverByKey(driver,key){
  delete driver[key];
  return driver
}
