$(document).ready(function() {
 // hide scientific name
    $('.botanic').hide();
    $('.botanic').click(function(evt) {
        evt.preventDefault();
        $(this).hide();
    });
// hide images
    $('.imgdiv').hide();
    $('.imgdiv').click(function(evt)   {
        evt.preventDefault();
        $(this).hide();
    })
// mouseOver and mouseOut
    $('h1', 'h2').mouseover(changeColor);
    $('h1', 'h2').mouseout(removeColor);

// function to change css
    function changeColor()  {
        $('h1').css('color', 'red');
        $('h2').css('color', 'lightblue');
    }
// remove
    function removeColor()  {
        $('h1').css('color', 'darkgreen');
        $('h2').css('color', 'darkgreen');
    }
// h1
    $('h1').mouseover(function() {
        $('h1').css('color','red');
      });
        $('h1').mouseout(function() {
        $('h1').css('color','darkgreen');
      });
// h2
    $('h2').mouseover(function() {
        $('h2').css('color','lightblue');
      });
      $('h2').mouseout(function() {
        $('h2').css('color','darkgreen');
    });

// Click Events, display scientific name on click, can not click back off
    $('.flower').click(function(evt)  {
        evt.preventDefault();
        $(this).children('.botanic').show();
        // $(this).click(function()    {
        //      $('.botanic').hide()});   
    });
// bind
$('imgdiv').each(function()    {
    flowerId = $(this).attr('id').slice(0,$(this).attr('id').length-4);
    flowerData = {
        flower: flowerId,
        photo: flowerId+".jpg",
    };
    $(this).bind('hover', flowerData, showFlower);
})//end of each

// Hover --lost on this one come back to it
    function showFlower(evt)    {
        flowerImg = "<figure><img src='"+evt.data.photo+"'></figure>";
    };
//show absolute position to 150px
// Keypress event
$(document).keypress(function(evt)  {
    var keyPressed = String.fromCharCode(evt.which);
    switch (keyPressed) {
        case "a":
        case "A":
            window.location = "#a" +keyPressed;
            break;
        case "b":
        case "B":
            window.location = "#b" +keyPressed;
            break;
        case "c":
        case "C":
            window.location = "#c" +keyPressed;
            break;
        case "d":
        case "D":
            window.location = "#d" +keyPressed;
            break;
        case "e":
        case "E":
            window.location = "#e" +keyPressed;
            break;
        case "f":
        case "F":
            window.location = "#f" +keyPressed;
            break;
        case "g":
        case "G":
            window.location = "#g" +keyPressed;
            break;
        case "h":
        case "H":
            window.location = "#h" +keyPressed;
            break;
        case "i":
        case "I":
            window.location = "#i" +keyPressed;
            break;
        case "j":
        case "J":
            window.location = "#j" +keyPressed;
            break;
        case "k":
        case "K":
            window.location = "#k" +keyPressed;
            break;
        case "l":
        case "L":
            window.location = "#l" +keyPressed;
            break;
        case "m":
        case "M":
            window.location = "#m" +keyPressed;
            break;
        case "n":
        case "N":
            window.location = "#n" +keyPressed;
            break;
        case "o":
        case "O":
            window.location = "#o" +keyPressed;
            break;
        case "p":
        case "P":
            window.location = "#p" +keyPressed;
            break;
        case "q":
        case "Q":
            window.location = "#q" +keyPressed;
            break;
        case "r":
        case "R":
            window.location = "#r" +keyPressed;
            break;
        case "s":
        case "S":
            window.location = "#s" +keyPressed;
            break;
        case "t":
        case "T":
            window.location = "#t" +keyPressed;
            break;
        case "u":
        case "U":
            window.location = "#u" +keyPressed;
            break;
        case "v":
        case "V":
            window.location = "#v" +keyPressed;
            break;
        case "w":
        case "W":
            window.location = "#w" +keyPressed;
            break;
        case "x":
        case "X":
            window.location = "#x" +keyPressed;
            break;
        case "y":
        case "Y":
            window.location = "#y" +keyPressed;
            break;
        case "z":
        case "Z":
            window.location = "#z" +keyPressed;
            break;
    }
})
    console.log("ready");
  });