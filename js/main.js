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

  interact('#ring-container')
    .draggable({
      onmove: window.dragMoveListener
    })
    .resizable({
      preserveAspectRatio: true,
      edges: { left: true, right: true, bottom: true, top: true }
    })
    .on('resizemove', function (event) {
      var target = event.target,
          x = (parseFloat(target.getAttribute('data-x')) || 0),
          y = (parseFloat(target.getAttribute('data-y')) || 0);

      // update the element's style
      target.style.width  = event.rect.width + 'px';
      target.style.height = event.rect.height + 'px';

      // translate when resizing from top or left edges
      x += event.deltaRect.left;
      y += event.deltaRect.top;

      target.style.webkitTransform = target.style.transform =
          'translate(' + x + 'px,' + y + 'px)';

      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
      target.textContent = Math.round(event.rect.width) + '×' + Math.round(event.rect.height);
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

