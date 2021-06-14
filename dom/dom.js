$(document).ready(function () {
// cart count
   var itemCount = 0;

   $('.add').click(function (){
      itemCount ++;
      $('#itemCount').html(itemCount).css('display', 'block');
   });
  // console.log(itemCount)
// add click fx del button
$('#addDel').click(function () {
   $delHTML= '<button>Delete</button>';
   $('this').append($delHTML);
   $('this').wrapInner("<span id='del'></span>");
   $('this').unbind('click');
});
// click fx to all del 
// delete button

// click function to remove buttons.. use delegate

// rating click event
console.log('ready');
}); //EO Ready