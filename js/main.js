(function ($) {
	"use strict";

	// meanmenu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "1199"
	});

	//data-background

	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
	});


	// One Page Nav
	var top_offset = $('.header-area').height() - 10;
	$('.main-menu nav ul').onePageNav({
		currentClass: 'active',
		scrollOffset: top_offset,
	});


	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".header-sticky").removeClass("sticky");
		} else {
			$(".header-sticky").addClass("sticky");
		}
	});


	// //testimonial
	// $('.testimonial-active').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 2,
	// 	arrows: false,
	// 	fade: true,
	// 	asNavFor: '.testimonial-image-active',
	// });
	// $('.testimonial-image-active').slick({
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	asNavFor: '.testimonial-active',
	// 	dots: false,
	// 	centerMode: true,
	// 	focusOnSelect: true,
	// 	centerPadding: '0px',
	// 	arrows: false,
	// });


	// // mainSlider
	// function mainSlider() {
	// 	var BasicSlider = $('.slider-active');
	// 	BasicSlider.on('init', function (e, slick) {
	// 		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
	// 		doAnimations($firstAnimatingElements);
	// 	});
	// 	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
	// 		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
	// 		doAnimations($animatingElements);
	// 	});
	// 	BasicSlider.slick({
	// 		autoplay: false,
	// 		autoplaySpeed: 10000,
	// 		dots: false,
	// 		fade: true,
	// 		arrows: false,
	// 		responsive: [
	// 			{ breakpoint: 767, settings: { dots: false, arrows: false } }
	// 		]
	// 	});

	// 	function doAnimations(elements) {
	// 		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	// 		elements.each(function () {
	// 			var $this = $(this);
	// 			var $animationDelay = $this.data('delay');
	// 			var $animationType = 'animated ' + $this.data('animation');
	// 			$this.css({
	// 				'animation-delay': $animationDelay,
	// 				'-webkit-animation-delay': $animationDelay
	// 			});
	// 			$this.addClass($animationType).one(animationEndEvents, function () {
	// 				$this.removeClass($animationType);
	// 			});
	// 		});
	// 	}
	// }
	// mainSlider();


	// owlCarousel
	// $('.owl-carousel').owlCarousel({
	// 	loop: true,
	// 	margin: 0,
	// 	items: 1,
	// 	navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	// 	nav: true,
	// 	dots: false,
	// 	responsive: {
	// 		0: {
	// 			items: 1
	// 		},
	// 		767: {
	// 			items: 3
	// 		},
	// 		992: {
	// 			items: 5
	// 		}
	// 	}
	// })


	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});


	// isotop

	$('#container').imagesLoaded( function() {
		// images have loaded
		$('.grid').isotope({
			itemSelector: '.portfolio-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.portfolio-item'
			}
		});
	});
	

	// filter items on button click
	$('.portfolio-menu').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});

	//for menu active class
	$('.portfolio-menu button').on('click', function (event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});




	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fa fa-arrow-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	//counter
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});


	$('.brand-active').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		autoplay: true,
		responsive: {
			0: {
				items: 1
			},
			550: {
				items: 2
			},
			767: {
				items: 3
			},
			1000: {
				items: 4
			}
		}
	})


	$('.testimonial-active').owlCarousel({
		loop: true,
		margin: 30,
		navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
		nav: true,
		autoplay: true,
		responsive: {
			0: {
				items: 1
			},
			550: {
				items: 1
			},
			768: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	})

	// WOW active
	new WOW().init();

// side-menu

 $(".hamburger").click(function(){
	 $(".side-menu").addClass("side-menu-active");
 });

 $(".close").click(function(){
	 $(".side-menu").removeClass("side-menu-active");
 });



})(jQuery);