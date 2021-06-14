$(document).ready(function() {
// hide sign up link
      $('#newsSignup').hide();
// slideToggle open
$('#signuplink').click(function() {
   $('#newsSignup').slideToggle(speed, ease);
});
$('#signuplink').toggle(function() {
   $('#openclose').text("-");
},
function() {
   $('#openclose').text("+");
});
/*$('#signuplink').click(function(evt) {
      evt.preventDefault();
      if($('#newsSignup form').is(':hidden')) {
         $('#openClose').text("-");
         $('#newsSignup form').slideToggle(speed);
         $(this).addClass('close');
      }else{
         $('#openClose').text('+');
         $(this).removeClass('close');
      };//end of else
  });*///end of toggle function
// slogan
   var speed = 'normal';
   var ease = 'swing';

   $('#slogan').mouseover(fadeOut);
   $('#slogan').mouseout(fadeIn);

   function fadeOut ()   {
      ease = 'linear';
      $('#slogan').fadeOut(speed, ease);
      $('#slogan').text("Hand Picked Just for You")
      $('#slogan').fadeIn('slow', ease)
   }//close fadeOut
   function fadeIn() {
      $('#slogan').fadeOut('fast', ease);
      $('#slogan').text("The Power of Flowers");
      $('#slogan').fadeIn('slow', 'linear');
   }//close fadeIn
// animated rose
   $('#rose').fadeIn('slow','swing', function() {
      $('#rose').animate(
      {
         right: '100px',
         opacity: 1
      })//close animate
  });//close animated rose
// form submission event
   $('#newsSignup').submit(function(evt)   {
      evt.preventDefault();
      alert("Thank you for registering");
      $('#newsSignup').hide();
      $('#openclose').text("+");
      $('#signuplink').animate(
         {
            opacity: .30
         })
   });//click function close
});//end of ready