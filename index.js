// Code your solution in this file!
function distanceFromHqInBlocks(givenValue){

  return Math.abs(42-givenValue)

}

function distanceFromHqInFeet(givenValue){

  totalFeet = distanceFromHqInBlocks(givenValue) * 264
  return totalFeet
}

function distanceTravelledInFeet(firstValue, secondValue){

  return Math.abs((firstValue - secondValue)*264)

}

function calculatesFarePrice(firstValue, secondValue){
  let total;
  let totalFeet = distanceTravelledInFeet(firstValue,secondValue)
  if(totalFeet > 2500){
    total = "cannot travel that far"

  }else if (totalFeet < 2500 && totalFeet > 2000){
    total = 25

  }else if (totalFeet < 2000 && totalFeet > 400){
    total = (totalFeet-400 )* .02;

  }else {
    total = 0
  }
  return total
}
