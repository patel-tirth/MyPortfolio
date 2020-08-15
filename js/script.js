
$(window).on("load",function(){
	$(".loader .inner").fadeOut(850, function(){
		$(".loader").fadeOut(750);
	});

	$(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false

		} 
	});
});

$(document).ready(function(){

$('#slides').superslides({
	animation:'fade',
	play : 3500,
	pagination: false
})

var type = new Typed(".typed",{
	strings: ["Web Developer","Student.","Web Developer"],
	typeSpeed: 100,
	loop:true,
	startDelay: 1000,
	showCursor: false

});

// var type = new Typed(".typed2",{
// 	strings: ["My name is Tirth Patel and I am Sophomore currently pursing bachelors in Computer Science at University of Illnois at Chicago."],
// 	typeSpeed:100,
// 	loop:false,
// 	// startDelay: 1000,
// 	// showCursor: false

// });



$('.owl-carousel').owlCarousel({
    loop:true,
    // margin:10,
    // nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

		var skillsTopOffset = $(".skillsSection").offset().top;
		$(window).scroll(function(){

			 if(window.pageYOffset > skillsTopOffset - $(window).height() + 250)
			 {
			 	$('.chart').easyPieChart({
            
	            easing: 'easeInOut',
	            barColor: '#fff',
	            trackColor: false,
	            scaleColor: false,
	            lineWidth: 4,
	            size: 152,
	            onStep: function(from,to,percent){

	            	$(this.el).find('.percent').text(Math.round(percent));
	            }
        });
			 }
			//  if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
			// 	$(".counter").each(function() {
			// 		var element = $(this);
			// 		var endVal = parseInt(element.text());
	
			// 		element.countup(endVal);
			// 	})
	
			// 	countUpFinished = true;
	
			// }

		});

		$("[data-fancybox]").fancybox();
		

		$("#filters a").click(function(){
			$("#filters .current").removeClass("current");
			$(this).addClass("current");

			var selector = $(this).attr("data-filter");
			$(".items").isotope({
				filter: selector,
				animationOptions: {
					duration: 1500,
					easing: 'linear',
					queue: false
	
				} 
			});

			return false;
		});

		$("#navigation li a").click(function(e){
			e.preventDefault();

			var targetElement = $(this).attr("href");
			var targetPosition = $(targetElement).offset().top;

			$("html, body").animate({scrollTop: targetPosition - 60 }, "slow");
		});

		const nav = $("#navigation");
		const navTop = nav.offset().top;

		$(window).on("scroll", stickyNavigation);

		function stickyNavigation()
		{
			const body = $("body");

			if($(window).scrollTop() >= navTop)
			{
				body.css("padding-top",nav.outerHeight() + "px");
				body.addClass("fixedNav");
			}
			else
			{
				body.css("padding-top",0);

				body.removeClass("fixedNav");
			}
		}
		// $(".counter").each(fucntion(){
		// 	var element = $(this);
		// 	var endVal = parseInt(element.text());
		// 	element.countup(endVal);
		// });
});

