$(document).ready(function() {
// place cursor in name field
   $('#name').focus();
//validate name
   $('#name').blur(function() {
      if ($(this).val() == "") {
         $('#nameErr').text('Name is required');
      } else if ($(this).val().length < 0) {
         $('#nameErr').text('Name must be more than 0 characters');
      } else {
// set error to blank in case a prior error message was displayed.
         $('#nameErr').text('');
      }
   }); // end validate name

// Validate address
   $('#address').blur(function() {
      if ($(this).val() == "") {
         $('#addressErr').text('Address is required');
      } else if ($(this).val().length < 0) {
         $('#addressErr').text('Address must be longer than 0 characters');
      } else {
   // set error to blank in case a prior error message was displayed.
         $('#addressErr').text('');
      }
   }); // end validate address
// validate city
   $('#city').blur(function() {
      if ($(this).val() == "") {
         $('#cityErr').text('Address is required');
      } else if ($(this).val().length < 0) {
         $('#cityErr').text('City must be longer than 0 characters');
      } else {
   // set error to blank in case a prior error message was displayed.
         $('#cityErr').text('');
      }
   }); // end validate city
// validate zipcode
   zipregex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
   $('#zip').blur(function() {
      if (!$('#zip').val().match(zipregex)) {
         $('#zipErr').text('Please input a valid zip code');
      } else {
         $('#zipErr').text('');
      }
   });
// create regex for email
   emailregex = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;

// validate email using regular expression
   $('#email').blur(function() {
      if (!$('#email').val().match(emailregex)) {
         $('#emailErr').text('Email format user@domain.com');
      } else {
         $('#emailErr').text('');
      }
   }); // end email validation

// validate that the emails match if the email or confirmation email is changed 
   $('#email2').blur(function() {
      if ($('#email2').val() != $('#email2').val()) {
         $('#email2Err').text("Emails do not match");
      } else {
         $('#email2Err').text("");
      }
   }); // end email validation
// If the user selects same as shipping, check the shipping checkbox use .val
$('#copy').click(function() {
	if ($(this).prop('checked')) {
		// copies a value from #address
		var address = $('#address').val();
      var city = $('#city').val();
      var state = $('#state').val();
      var zipcode = $('#zip').val();
		// assigns the value from #address to #shipaddr
		$('#shipaddr').val(address);
      $('#shipcity').val(city);
      $('#shipstate').val(state);
      $('#shipzip').val(zipcode);
	}
});
 // If the user unchecks longsleeves, uncheck the hoodie checkbox also
   $('#copy').change(function() {
      if (!$(this).prop('checked')) {
      $('#copy').prop('checked', false);
      location.reload();
      }
   });

// submit validation
   $('#entry').submit(function() {
// set valid flag to true
      valid = true;
// validate username
      if ($('#name').val() == "") {
         $('#nameErr').text('Name is required');
         valid = false; // set valid flag to false if error found
      } else if ($('#name').val().length < 0) {
         $('#nameErr').text('Name must be at more than 0 characters');
         valid = false;
      } else {
         $('#nameErr').text(' ');
      }
// validate address
      if ($('#address').val() == "") {
         $('#addressErr').text('Address is required');
         valid = false; // set valid flag to false if error found
      } else if ($('#address').val().length < 0) {
         $('#addressErr').text('Address must be at more than 0 characters');
         valid = false;
      } else {
         $('#addressErr').text(' ');
      }
// validate city
      if ($('#city').val() == "") {
         $('#cityErr').text('city is required');
         valid = false; // set valid flag to false if error found
      } else if ($('#city').val().length < 0) {
         $('#cityErr').text('city must be at more than 0 characters');
         valid = false;
      } else {
         $('#cityErr').text(' ');
      }
//validate zip
      if ($('#zip').val() == "") {
         $('#zipErr').text('zip code is required');
         valid = false; // set valid flag to false if error found
      } else {
         $('#zipErr').text(' ');
      }
// validate email
      if ($('#email').val() != $('#email2').val()) {
            $('#emailErr').text("Emails do not match");
            valid = false;
      } else {
         $('#emailErr').text(" ");
      }

// return the valid flag (true or false). False will stop submission of the form
      return valid;
   }); // end form submission validation

// initiate order total to 0
   var ordertotal = 0;
   var taxRate = 0;
   var tax = 0;
	var shipping = 0;
	var gTotal = 0;
	// assign totals a value of 0
	$(".total").each(function(){
		$(this).text(0);
	});

   $('.qty').blur(function() {
      var qty = $(this).val();
      if (isNaN(qty))   {
         qty = 0;
         $(this).val(0);
      }
      var id = $(this).attr('id');
      var price = $('#price' + id).text();
      var total = price * qty;
      $('#total' + id).text(total);
      
      if (id == 1)   {
         subtotal1 = Number(total);
      } else{
         subtotal1 = Number($('#total1').text());
      }

      if (id == 2)   {
         subtotal2 = total;
      }else{
         subtotal2 = Number($('#total2').text());
      }

      if (id == 3)   {
         subtotal3 = total;
      }else{
         subtotal3 = Number($('#total3').text());
      }
      var ordertotal = subtotal1 + subtotal2 + subtotal3;
      $('#subt').text(ordertotal);
   })

// shipping
   if (ordertotal == 0){
      shipping = 0;
   } else {
   switch($("#shipstate").val()){
      case "TX":
         shipping = 5.00;
         break;
      case "NY":
         shipping = 20.00;
         break;
      case "CA":
         shipping = 20.00;
         break;
      default:
         shipping = 10.00;
         break;
   }
   $("#ship").text(shipping);

// Tax
   
   if ($("#shipstate").val() == "TX"){
      taxRate = 0.08;
   } else {
      taxRate = 0;
   }
   tax = taxRate * ordertotal;
   tax = tax.toFixed(2);
   $("#tax").text(tax);
//   Total

      gTotal = ordertotal + tax + shipping;
      gTotal = gTotal.toFixed(2);
   $("#gTotal").text(gTotal);
   }

   console.log('ready!');
});