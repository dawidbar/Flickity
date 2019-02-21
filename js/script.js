'use strict';
(function () {

    var templateItem = document.getElementById('template-product-item').innerHTML;
    Mustache.parse(templateItem);
    var listItems = '';
    for (var i = 0; i < items.length; i++) {
        listItems += Mustache.render(templateItem, items[i]);
    }
    var main = document.querySelector('.main-carousel');
    main.innerHTML = listItems;


var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    hash: true
});

var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});


var button = document.querySelector('.button');

button.addEventListener('click', function (event) {
    // filter for button clicks
    if (!matchesSelector(event.target, '.button')) {
        return;
    }
    var selector = event.target.getAttribute('data-selector');
    flkty.selectCell(selector);
});
})();