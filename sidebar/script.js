$(document).ready(function() {
		$menuLeft = $('.pushmenu-left');
		$nav_list = $('#nav_list');
		
		$nav_list.click(function() {
			$(this).toggleClass('active');
			$('.pushmenu-push').toggleClass('pushmenu-push-toright');
			$menuLeft.toggleClass('pushmenu-open');
		});
	});

// <script type="text/javascript">
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-36251023-1']);
	_gaq.push(['_setDomainName', 'jqueryscript.net']);
	_gaq.push(['_trackPageview']);

	(function() {
		var ga = document.createElement('script');
		ga.type = 'text/javascript';
		ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';

		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(ga, s);
	})();

// </script>
/**********************************************************************************************************************/

$(document).on('ready', function(){
		$(".links li").on("click", function() {
			if ($(window).width() <= '480')  {	 					
				$(".pushmenu-push.pushmenu-push-toright").removeClass("pushmenu-push-toright");
				$("nav.pushmenu-open").removeClass("pushmenu-open");	  		
		    }

		var name_li = $(this).attr("data-filter"),
			block_li = $('.' + name_li).offset().top,
			height_heder = $(".buttonset").outerHeight(true);
		// $('.' + name_li).css("margin-top" , 100);

		$('body,html').animate({
 	        'scrollTop': block_li - height_heder
 	    },1000);
	})
});
/**********************************************************************************************/

   

