// create a months array
    var months = ['January', 'February','March','April','May','June','July','August','September','October','November', 'December'];
    var now = new Date();
    var currentMonth = now.getMonth();

    // create a tips arrayS
    var tips=["<p>Those of  us who live through our gardens know how bittersweet it can be to see the lush green growth of  summer disappear during the cold months of  winter. Hellebores are the perfect winter garden companion to plant with another winter blooming favorite, Camellias.</p><p>Visit us this season for the exciting selection of  both of  these cool season beauties and enjoy them in your garden for years to come.</p>",
    "<p>Spring is a time of  renewal for both the gardener and the garden. Suggestions for this monthName: </p><ul><li> Transplants of  tomatoes should be planted by March 15th</li><li> Fertilize your  lawn after warm-season grasses are growing and have been mowed 2-3 times.</li><li> Release beneficial nematodes to control ticks, fleas, chiggers, and fire ants. </li></ul>",
    "<p><strong>Summer is the TIME</strong><ul><li>Select rose bushes from the huge selection of  varieties we offer.</li><li>Transplants of  peppers, eggplant and tender herbs can be planted.</li><li>Plant fruit trees, shrubs, roses, perennials, herbs and colorful annuals like geraniums and snapdragons.</li></ul>",
    "<p>Fall is the best time to plant in north Texas. Milder temperatures and increased rainfall mean that new plants—especially trees and shrubs—can establish root systems much more easily than during hot summer months.</p><p>Also with the changing season comes the changing of  our color plantings: petunias, dianthus, ornamental kale and mums bringing cheerful color ahead of  winter’s trusted and long-lasting pansies and violas.</p>"];
    var seasonalTips = tips[currentMonth];

    // create a specials array
    var specials = ["<p>Don't forget our feathered friends!</p><p>All bird feeders and birdseed are 50% off this" + monthName +".</p> ",
    "<p>Roses for your sweetheart!</p><p>All roses are $24.99 this" +  monthName + "</p>",
    "<p>Add some color to your garden!</p><p>This " + monthName + "all petunias are $10.99 for a flat of 16.</p>",
    "<p>Time to fertilize!</p><p>All fertilizers 20% off.</p>",
    "<p>Geraniums: 6 inch pot is only $6.99 all "+ monthName +"!</p>",
    "<p>These can take the heat!</p><p>Zinnias: $1.00 each for a 4 inch pot.</p>",
    "<p><strong>BOGO</strong></p><p>All containers, buy one, get one of equal or lesser value 1/2 price</p>",
    "<p>Cacti and succulents, 25% off</p>",
    "<p>Get ready for fall!<p><p>Mums: 6 inch pot $5.99</p>",
    "<p><strong>Jack-O-Lanterns</strong></p><p>Pumpkins: <br>large $8.99<br>small $5.99<br>Decorative pumpkins: <br>$7.99-11.99<br>Gourds: $6.99</p>",
    "<p>Trees and shrubs: 1/2 price - in stock only.</p>",
    "<p>Christmas trees!</p><p>We have sizes from 3' to 15' and lots of varieties. Find the perfect fit for your family while they last!</p>"];



    // currentMonth =11;
    var currentYear = now.getFullYear();
    var monthName = months [currentMonth];
    var monthSpecial = specials [currentMonth];

    var backgroundImage = currentMonth;
    
    $(document).ready(function() {
        // console.log('ready');

    if (monthName == 'December')  {
        $('#slogan').after("<h3> Happy Holidays!</h3>");
    }

    switch  (currentMonth)  {

        case 11:
        case 0:
        case 1: 
            season = 'Winter';
            backgroundImage = 'winterbg.jpg';
            seasonColor = "#00f";
            seasonIndex = 0;
            break;
        case 2:
        case 3:
        case 4:
            season = 'Spring';
            backgroundImage = 'springbg.jpg';
            seasonColor = "#d7d";
            seasonIndex = 1;
            break;
        case 5:
        case 6:
        case 7:            
            season = 'Summer';
            backgroundImage = 'summerbg.jpg';
            seasonColor = "#006400";
            seasonIndex = 2;
            break;
        case 8:
        case 9:
        case 10:
            season = 'Fall';
            backgroundImage = 'fallbg.jpg';
            seasonColor = "#930";
            seasonIndex = 3;
            break;
    }
    
    // Month in Heading
    $("#month").text(monthName + " Tips");

    // Specials for the month
    $("#specials h3").after("<p>" + monthSpecial + "</p>");

    // backgrouond
    $("body background-image").css("background-image", "backgroundImage");
    console.log(backgroundImage)
    // add class
    $("#specials").addClass("season");

    // 
    $("#seasontips p").after("<p>" + seasonalTips + "</p>");

    //   $('selector').append("content to append");
    $("#copy").append(currentYear);
     
  });