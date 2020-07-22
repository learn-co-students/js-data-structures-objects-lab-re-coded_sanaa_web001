let driver={1:"one",2:"two",3:"three"};
function updateDriverWithKeyAndValue(driver,key,val){
  return Object.assign({},driver,{[key]:val});
}
function destructivelyUpdateDriverWithKeyAndValue(driver,key,val){
   return Object.assign(driver,{[key]:val});
}
function deleteFromDriverByKey(driver,key){
  let newObj=Object.assign({},driver);
  delete newObj[[key]];
  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver,key){

  delete driver[[key]];
  return driver;
}