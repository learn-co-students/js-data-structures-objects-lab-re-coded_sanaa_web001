// Write your solution in this file!

const driver ={};
function updateDriverWithKeyAndValue(driver, key, value) {
  const driverN = { ...driver };

  driverN[key] = value;

  return driverN;
}


function destructivelyUpdateDriverWithKeyAndValue(driver ,key ,value){
  driver[key] = value;

  return driver;
}

function deleteFromDriverByKey(driver ,key ){
  const newObj = Object.assign({}, driver);

   delete newObj[key];

  return newObj;
}
function destructivelyDeleteFromDriverByKey(driver ,key ){
  delete driver[key];

  return driver;
}