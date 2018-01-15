function theBeatlesPlay(arrayMusicians,arrayInstruments) {
  var array = {};
  for(var i = 0;i < arrayMusicians.length;i++) {
    console.log(arrayMusicians[i])
    array[i] = "${arrayMusicians[i]} plays ${arrayInstruments[i]}"
    console.log(arrayMusicians[i])
  }

  return array
}