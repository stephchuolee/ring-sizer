
$(function(){
  var card = $('#resizable');
  var cardBaseWidth = card.width();

  card.resizable({
    aspectRatio: 312 / 196
  });
  
  card.on('resizestop', function(){
    updateAllRings(rings, cardBaseWidth, card.width());
  });

  var rings = {
    "ring-4": 56.15888688,
    "ring-4-5": 57.71083555,
    "ring-5": 59.33496789,
    "ring-5-5": 60.85082473,
    "ring-6": 62.4027734,
    "ring-6-5": 63.95472208,
    "ring-7": 65.57885441,
    "ring-7-5": 67.08268064,
    "ring-8": 68.75493542,
    "ring-8-5": 70.03018006,
    "ring-9": 71.38963898
  }


  $('#increase-btn').on('click', function(){
    card.css('width', '+=2');
    updateAllRings(rings, cardBaseWidth, card.width());
  });

  $('#decrease-btn').on('click', function(){
    card.css('width', '-=2');
    updateAllRings(rings, cardBaseWidth, card.width());
  });


  function updateRing(ring, ringBaseWidth, baseCardWidth, newCardWidth){

    var ring = $('.'+ring);
    var changeRatio = 1 + ((newCardWidth - baseCardWidth) / baseCardWidth); 
    
    var newRingWidth = ringBaseWidth * changeRatio;
    console.log('new ring width: '+newRingWidth);

    ring.css('width', newRingWidth);
    ring.css('height', newRingWidth);
  }

  function updateAllRings(rings, baseCardWidth, newCardWidth){
    for(var key in rings){
      updateRing(key, rings[key], baseCardWidth, newCardWidth);
    }
  }

})

