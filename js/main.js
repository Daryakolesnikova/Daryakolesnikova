window.addEventListener('DOMContentLoaded', function () {
    var imageElements = document.querySelectorAll('.pic > img');
    var pswpElement = document.querySelectorAll('.pswp')[0];
    var images = Array.prototype.slice.call(imageElements);

    images.forEach(function (image) {
        image.onload = function() {
            image.data = {
                src: image.src,
                w: image.naturalWidth,
                h: image.naturalHeight
            };
        };

        image.onclick = function () {
            var items = images.map(function (image) {
                return image.data;
            });

            var index = items.findIndex(function (item) {
                return item.src === image.src;
            });

            var options = {
                index: index
            };

            var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);

            gallery.init();
        };
    });
});