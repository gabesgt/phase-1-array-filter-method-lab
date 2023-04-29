// Code your solution here
function findMatching(drivers, atturibute ){
  return drivers.filter(function (driver){
    return driver.toLowerCase()=== atturibute.toLowerCase()



  })
}
function fuzzyMatch(drivers,atturibute){
  return drivers.filter(function(driver){
    return driver.toLowerCase().substring(0,atturibute.length) ===atturibute.toLowerCase()})
  }
  function matchName(drivers, argument){
    return drivers.filter(function(driver){
      return driver.name === argument
    })
  }




