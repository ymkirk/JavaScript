$(document).ready(function() {
	// accesses the proxy.php file to add the RSS feed source to the page
	$.get('proxy.php?url=https://rss.art19.com/not-another-d-and-d-podcast/?format=xml', function(data) {
		count = 0;
		// console.log('Ready!');
		$(data).find('title').each(function() {
			if (count == 0) {
				var title = $(this).text();
				$("#title").html(title);
				count++;
            // $('#title').load(title);
			}
		});
		count = 0;
		$(data).find('description').each(function() {
			if (count == 0) {
				var description = $(this).text();
				$("#description").html(description);
				count++;
			}
		});
		var itemNum = 0;
		$(data).find('item').each(function() {
			$item = $(this);
			itemNum++;
			// grab the post title
			var title = $item.find('title').text();
			// grab the post's URL
			var link = $item.find('link').text();
			// next, the description
			var description = $item.find('description').text();
			//don't forget the pubdate
			var pubDate = $item.find('pubDate').text();
			pubDate=pubDate.slice(0,pubDate.length-15);
			// grab the related categories and assemble them
			$cat = "<p style='font-size: smaller;'>Categories: "
			$item.find('category').each(function() {
				$cat+=(" | "+$(this).text()+" ");
			});
			$cat+="</p>";
			// format the post
			var post = "<fieldset>" +
			"<legend> Article " +itemNum+ " </legend>" +
			"<h4><a href='"+link+"'>"+title+"</a></h4>" +
			"<p>"+pubDate+"</p>" +
			description +
			$cat +
			"</p>" +
			"</fieldset>";
			// add the post to the feed
			$('#feed').append(post);
		}); // end find
	});
	// end get
});