$(document).ready(function() {
   $('#zoneMap').hide();
// ToolTips
   $('#tooltip1').tooltip({
      track:true
   });
   $('#tooltip2').tooltip({
      position: {
         my: "center bottom",
         at: "center top-10",
         collision: "none"
      }
   });
   $('#tooltip3').tooltip({
      track:true
   });
   $('#tooltip4').tooltip({
      position: {
         my: "center bottom",
         at: "center top-10",
         collision: "none"
      }
   });
   $('#tooltip5').tooltip({
      track:true
   });
   var map = $('#zoneMap').html();
   $('#zone').tooltip({
      content: map
   })
// Accordion
   $( "#accordion" ).accordion({
      collapsible: true,
      animate: 600
    });
   console.log('Ready!'); // debug
});//EO ready