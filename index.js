function theBeatlesPlay(arrayMusicians,arrayInstruments) {
  var array = [];
  for(var i = 0;i < arrayMusicians.length;i++) {
    //console.log(arrayMusicians[i])
    array.push(arrayMusicians[i] +" plays " + arrayInstruments[i]);
  }

  return array
}
function johnLennonFacts(arrayFacts) {
    var array = [];
  for(var i = 0;i < arrayFacts.length;i++) {
    //console.log(arrayFacts[i])
    array.push(arrayFacts[i] +"!!!");
  }
  return array
}