$(function(){
  var card = $('#card-container');
  var cardBaseWidth = card.width();

  var rings = {
    "ring-4": 45,
    "ring-4-5": 50 
  }


  $('#increase-btn').on('click', function(){
    card.css('width', '+=10');
    updateAllRings(rings);
  });

  $('#decrease-btn').on('click', function(){
    card.css('width', '-=10');
    updateAllRings(rings);
  });


  function updateRing(ring, ringBaseWidth){
    var newCardWidth = card.width();

    var ring = $('.'+ring);
    var changeRatio = 1 + ((newCardWidth - cardBaseWidth) / cardBaseWidth); 
    
    var newRingWidth = ringBaseWidth * changeRatio;
    console.log('new ring width: '+newRingWidth);

    ring.css('width', newRingWidth);
    ring.css('height', newRingWidth);
  }

  function updateAllRings(rings){
    for(var key in rings){
      updateRing(key, rings[key]);
    }
  }

})

