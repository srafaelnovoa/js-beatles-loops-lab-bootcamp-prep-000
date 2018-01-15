function theBeatlesPlay(arrayMusicians,arrayInstruments) {
  var array = new Object
  for(var i = 0;i < arrayMusicians.length;i++) {
    //console.log(arrayMusicians[i])
    array.push(arrayMusicians[i] +" plays " + arrayInstruments[i])
  }

  return array
}