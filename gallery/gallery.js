$(document).ready(function() {
// hover over thumbs border
   $('#thumbs img').hover(function(){
      $(this).css('border','2px solid green');
   },function(){
      $(this).css('border','2px solid transparent');
   });//End hover border

// loop through all img tags in the #gallery div (thumbnail images)
   $('#thumbs img').each(function() {
      var lgImage = new Image();
 
   $(this).click(function () {
      // get the alt attribute for the clicked image
      var oldAlt = $(this).attr('alt');
         //change img src attribute of bigImage when the image is clicked
         lgImage.src = "images/"+$(this).attr('id')+"-lg.jpg";
         $('#lgPic').attr('src', lgImage.src);
      //change alt attribute for lgImage when th eimage is clicked
         $('#lgPic').attr('alt', oldAlt);
      $('figcaption').text(oldAlt);
   });
});
// click event open large img into new window
   $('a[rel="external"]').click(function() {
      newWin = open($(this).attr('src'), 'popWin', 'width=640, height=480, top=100, left=200');
   });
   console.log('ready!')
}); // EO Document Ready