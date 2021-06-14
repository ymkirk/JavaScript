$(document).ready(function()  {
//  Dialog boxes
   $('#sale').dialog({
      resizable: false,
      height: "auto",
      width: 400,
      autoOpen: true
   });
   $('#zone').dialog({
      resizable: false,
      height: "auto",
      width: 400,
      autoOpen: false
   });
   $( "#zonePopup" ).click(function() {
      $( "#zone" ).dialog( "open" );
   });
//  Tabs
   $('#tabs').tabs({
      activate: function( event, ui ) {
         var result = $( "#result-2" ).empty();
         result.append( "activated" );
      },
      create: function( event, ui ) {
         var result = $( "#result-1" ).empty();
         result.append( "created" );
      }
   });
}); //EO ready fx