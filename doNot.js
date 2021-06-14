$(document).ready(function() {
   // executes after html is loaded
   // apply mouseover event to all images on the page - including those added later
   $('body').delegate('img','mouseover',function() {
    $(this).css('border','LawnGreen 2px solid');
})
// apply mouseout event to all images on the page - including those added later
$('body').delegate('img','mouseout',function() {
    $(this).css('border','cornsilk 2px solid');
})

// apply click event to items on the page with class="pick" (pick me button) - including those added later
$('body').delegate('.pick','click',function() {
   // find the closest ancestor figure element and assign the selector to a variable so it can be reused
   $petFig = $(this).closest('figure');
   // modify the css for the $petFig selector variable
    $petFig.css('border','darkGreen 3px double');
    // get the parent of this element, then select the image siblings and fade them in
    $(this).parent().siblings('img').fadeTo('normal', 1, 'linear');
    // select the next element (delete button) and reduce opacity to 0 (can't remove selected pet)
    $(this).next().css('opacity',0);
    $(this).css('opacity',0);
    // find all images in the petFigure selector and increase the size tho 110%
    $petFig.find('img').css('transform', 'scale(1.1)');
    // change the border of all the siblings to cornsilk to blend into the background
    // note: removing the border messed up the spacing so I opted to just change the color to match the background
    $petFig.siblings().css('border','cornsilk 3px double');
    // for all the image children of the sibling elements, fade them out and scale them to 100% (to remove any prior selections)
    $petFig.siblings().children('img').fadeTo('normal', .5, 'linear').css('transform', 'scale(1)');
    // make the delete button visible for all sibling pets
    $petFig.siblings().find('.del').css('opacity', 1);
    $petFig.siblings().find('.pick').css('opacity', 1);
})

// apply a click function to all del class elements including those added later
$('body').delegate('.del','click',function() {
   /* to delete the pet, find the figure ancestor element
   * and change it to absolute positioning with -10 z-index so it doesn't cover up any other element
   * then empty the element. Using empty leaves the element, so to avoid any issues with spacing,
   * I opted to use absolute positioning to remove it from the flow of the page */
    $(this).closest('figure').css('position','absolute').css('z-index',-10);
    $(this).closest('figure').empty();

})

// add a function for the click event for the addDog button
$('#addDog').click(function() {
   // create the html to append
   $dogHTML='<figure><img src="dog5.png"><figcaption><span class="pick">Pick Me</span> <span class="del">Delete Me</span></figcaption></figure>';
    // append the html to the previous paragraph
    $(this).prev().append($dogHTML);
    //wrap a new span with an id of na around the text to alert the user there are no more pets
    $(this).wrapInner("<span id='na'></span>");
    //remove the click event from addDog
    $(this).unbind('click');
})
// addCat click event - same as addDog
$('#addCat').click(function() {
   $catHTML='<figure><img src="cat5.jpg"><figcaption><span class="pick">Pick Me</span> <span class="del">Delete Me</span></figcaption></figure>';
    $(this).prev().append($catHTML);
    $(this).wrapInner("<span id='na'></span>");
    $(this).unbind('click');
})
// add a click event to the na id - even though it does not exist when the page loads. It will apply when created
$('body').delegate('#na','click',function() {
    alert("Sorry, we are out of additional pets.");
})
}); // end ready 