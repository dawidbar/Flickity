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
	
    window.initMap = function() {
        var tbg = {lat: 50.574646, lng: 21.673120};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: tbg 
        });
        for (var i = 0; i < items.length; i++) {
            var cords = items[i].coords;
            var marker = new google.maps.Marker({
                position: cords,
                map: map
            });
        }
    }
})();

