/* eslint-disable */

$(function() {
  var card = $('#card-container');
  var cardBaseWidth = card.width();
  var arrow = $('.arrow-container');
  var aspectRatio = 312 / 196;
  updateArrowOffset(); /* Initially position the arrow container diagonally to the bottom of the CC */

  card.resizable({
    aspectRatio: aspectRatio,
    handles: 'se',
  });

  card.on('resizestop', function() {
    updateAllRings();
    updateArrowOffset();
  });

  var rings = {
    'ring-4': 56.15888688,
    'ring-4-5': 57.71083555,
    'ring-5': 59.33496789,
    'ring-5-5': 60.85082473,
    'ring-6': 62.4027734,
    'ring-6-5': 63.95472208,
    'ring-7': 65.57885441,
    'ring-7-5': 67.08268064,
    'ring-8': 68.75493542,
    'ring-8-5': 70.03018006,
    'ring-9': 71.38963898,
    'ring-9-5':72.54457753,
    'ring-10': 74.10855681,
    'ring-10-5': 75.55222999,
    'ring-11': 77.11620928,
  };

  $('#increase-btn').on('click', function() {
    card.css('height', 'auto');
    card.css('width', '+=2');
    updateAllRings();
    updateArrowOffset();
  });

  $('#decrease-btn').on('click', function() {
    card.css('height', 'auto');
    card.css('width', '-=2');
    updateAllRings();
    updateArrowOffset();
  });

  function updateAllRings() {
    var changeRatio = 1 + ((card.width() - cardBaseWidth) / cardBaseWidth);

    for (var key in rings) {
      var newDiameter = rings[key] * changeRatio;
      $('.' + key).width(newDiameter).height(newDiameter);
    }
  }

  function updateArrowOffset() {
    var cardXCoor = card.offset().left;
    var offsetArrow = cardXCoor + card.width();

    arrow.css('left', offsetArrow + 'px');
  }
})
