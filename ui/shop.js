$(document).ready(function()  {
// draggable widget to all imgs 
   $('#gallery img').draggable( {
      cursor: 'grabbing',
      revert: true
   });
// droppable cart
   $('#cart').droppable({
      drop: function(event, ui){
         $alt = (ui.draggable.attr('alt'));
         if ($alt) {
         $(this)
            .find("ul")
            .append("<li>" + $alt + "</li>");
         }
      }
   });
// droppable wishlist
   $('#wishes').droppable({
      drop: function(event, ui){
         $alt = (ui.draggable.attr('alt'));
         if ($alt) {
         $(this)
            .find("ol")
            .append("<li>" + $alt + "</li>");
         }
      }
   });
// sort list 
$( "#cartlist, #wishlist" ).sortable({
   connectWith: ".connectedSortable"
 }).disableSelection();

}); //EO Doc ready fx