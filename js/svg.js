$(function() {

   var two = new Two({
     fullscreen: true,
     autostart: true
   }).appendTo(document.body);

   var rect = two.makeRectangle(two.width *0.7, two.height *0.15, 75, 75);
   rect.noStroke().fill = getRandomColor();

   // Update the renderer in order to generate corresponding DOM Elements.
   two.update();

   $(rect._renderer.elem)
     .css('cursor', 'pointer')
     .click(function(e) {
       rect.fill = getRandomColor();
     });

   two.bind('update', function(frameCount, timeDelta) {
     rect.rotation = frameCount / 60;
   });

   function getRandomColor() {
     return 'rgb(37,37,37)'
     return 'rgb('
       + Math.floor(Math.random() * 255) + ','
       + Math.floor(Math.random() * 255) + ','
       + Math.floor(Math.random() * 255) + ')';
   }

 });
