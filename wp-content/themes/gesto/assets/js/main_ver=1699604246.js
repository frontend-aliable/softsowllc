(function ($) {
"use strict";

if (typeof ($.fn.knob) != 'undefined') {
	$('.knob').each(function () {
		var $this = $(this),
			knobVal = $this.attr('data-rel');

		$this.knob({
			'draw': function () {
				$(this.i).val(this.cv + '%')
			}
		});

		$this.appear(function () {
			$({
				value: 0
			}).animate({
				value: knobVal
			}, {
				duration: 2000,
				easing: 'swing',
				step: function () {
					$this.val(Math.ceil(this.value)).trigger('change');
				}
			});
		}, {
			accX: 0,
			accY: -150
		});
	});
}

/**
 * Back To Top
 */
var backtotop = $('.scroll-top');

$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
	backtotop.addClass('show');
	} else {
	backtotop.removeClass('show');
	}
});

backtotop.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '700');
});

// search-popup
$('.search_1_popup_toggle').on('click', function() {
	$('.overlay, .search_1_popup_active').addClass('active');
});
$('.overlay, .search_1_popup_close').on('click', function() {
	$('.search_1_popup_active').removeClass('active');
	$('.overlay').removeClass('active');
})
  
$(document).ready(function () {
	buttonEffect();
});
$(window).on('load', function(){
	const boxes = gsap.utils.toArray('.feature-img-animation');
	boxes.forEach(img => {
		gsap.to(img, {
			scrollTrigger: {
				trigger: img,
				start: "top 70%",
				end: "bottom bottom",
				toggleClass: "active",
				once: true,
			}
		});
	});
});
const buttonEffect = () => {
	$('.gt-keyfeature-item')
	.on('mouseenter', function (e) {
		var parentOffset = $(this).offset(),
		relX = e.pageX - parentOffset.left,
		relY = e.pageY - parentOffset.top;
		$(this).find('.decor').css({top: relY, left: relX})
	})
	.on('mouseout', function (e) {
		var parentOffset = $(this).offset(),
		relX = e.pageX - parentOffset.left,
		relY = e.pageY - parentOffset.top;
		$(this).find('.decor').css({top: relY, left: relX})
	});
}


if ($("input.product-count").length) {
	$("input.product-count").TouchSpin({
		min: 1,
		max: 1000,
		step: 1,
		buttondown_class: "btn btn-link",
		buttonup_class: "btn btn-link",
	});
}  



// mobile-menu
$('#mobile_menu').meanmenu({
	meanMenuContainer: '.mobile_menu',
	meanScreenWidth: "991"
});

//sidebar-toggle
$('.menu_toggle').on('click', function () {
	$('.sidebar_toggle').addClass('sidebar_open');
	$('.offcanvas-overlay').addClass('overlay_open');
})
$('.close_sidebar,.offcanvas-overlay').on('click', function () {
	$('.sidebar_toggle').removeClass('sidebar_open');
	$('.offcanvas-overlay').removeClass('overlay_open');
});

// banner-slide-active
function bannerActiveOne($scope, $) {
	/*------------------------------------
	Slider
	--------------------------------------*/

	if (jQuery(".banner_1_slider_active").length > 0) {

		let sliderActive1 = '.banner_1_slider_active';
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			paginationClickable: true,
			loop: true,
			autoplay: {
				delay: 5000,
					},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
				renderBullet: function (index, className) {
				  return '<span class="' + className + '">' + (index + 1) + "</span>";
				},
			  },

		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + ' [data-animation]').each(function () {
					let anim = $(this).data('animation');
					let delay = $(this).data('delay');
					let duration = $(this).data('duration');

					$(this).removeClass('anim' + anim)
						.addClass(anim + ' animated')
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration
						})
						.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
							$(this).removeClass(anim + ' animated');
						});
				});
			};
			animated();
			// Make animated when slide change
			init.on('slideChange', function () {
				$(sliderActive1 + ' [data-animation]').removeClass('animated');
			});
			init.on('slideChange', animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}}


// services-slider
if (jQuery(".service_slider_active").length > 0) {
	let acooterbrand = new Swiper('.service_slider_active', {
		slidesPerView: 3,
		loop: true,
		rtl: false,
		infinite: true,
		autoplay: {
		delay: 5000,
			},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			480: {
			slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 3,
			},
		}

});}


// sponser-slider
function brandActiveCarousel($scope, $) {
	let acooterbrand = new Swiper('.sponser_slider_active', {
		slidesPerView: 3,
		loop: true,
		rtl: false,
		infinite: true,
		autoplay: {
		delay: 3000,
			},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			480: {
			slidesPerView: 2,
			},
			576: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 4,
			},
			1400: {
				slidesPerView: 4,
			},
		}

		

});
var about = new Swiper('.gto_about_1_active', {
	loop: true,
	speed: 1000,
	autoplay: {
		delay: 5000,
		},

	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		480: {
		slidesPerView: 2,
		},
		576: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 4,
		},
		992: {
			slidesPerView: 5,
		},
		1200: {
			slidesPerView: 6,
		},
	},
});
}

$('.tilt_scale').tilt({
    glare: true,
    maxGlare: .5
})

$(document).on('click', '.accordion-item', function(){
	$(this).addClass('faq_bg').siblings().removeClass('faq_bg')
})

//	project filter
function enableMasonry2  () {
	// ----------------------------- isotop gallery

	$(window).on("load", function () {
	  if ($("#fillter_item_active").length) {
		var $grid = $("#fillter_item_active").isotope({
		  // options
		  itemSelector: ".isotop-item",
		  percentPosition: true,
		  masonry: {
			// use element for option
			columnWidth: ".grid-sizer",
		  },
		});

		// filter items on button click
		$(".project_filter_menu").on("click", "li", function () {
		  var filterValue = $(this).attr("data-filter");
		  $grid.isotope({ filter: filterValue });
		});

		// change is-checked class on buttons
		$(".project_filter_menu").each(function (i, buttonGroup) {
		  var $buttonGroup = $(buttonGroup);
		  $buttonGroup.on("click", "li", function () {
			$buttonGroup.find(".is-checked").removeClass("is-checked");
			$(this).addClass("is-checked");
		  });
		});
	  }
	});
}

enableMasonry2();

// Active Odometer Counter 
jQuery('.odometer').appear(function (e) {
	var odo = jQuery(".odometer");
	odo.each(function () {
		var countNumber = jQuery(this).attr("data-count");
		jQuery(this).html(countNumber);
	});
});

$('.counter').counterUp({
	delay: 10,
	time: 3000
});

// data background
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})
function dataBgEditorLoad($scope, $) {
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})}

// data width
$("[data-width]").each(function(){
	$(this).css("width",$(this).attr("data-width"))
})

// data background color
$("[data-bg-color]").each(function(){
	$(this).css("background-color",$(this).attr("data-bg-color"))
})

//for menu active class
$('.portfolio_nav button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});
function sliderTwoActive($scope, $) {
	let slider_thumb5 = new Swiper('.hero_2_slider_thumb', {
		loop: false,
		spaceBetween: 20,
		slidesPerView: 3,
		direction: "vertical",
		rtl: false,
		centeredSlides: true,
		watchSlidesProgress: false,		
	
	});


	let sliderActive1 = '.hero_2_slider_active';
	let sliderInit1 = new Swiper(sliderActive1, {
		// Optional parameters
		slidesPerView: 1,
		paginationClickable: true,
		loop: true,
		autoplay: {
			delay: 7000,
				},
		thumbs: {
			swiper: slider_thumb5,
		},

	});

	function animated_swiper(selector, init) {
		let animated = function animated() {
			$(selector + ' [data-animation]').each(function () {
				let anim = $(this).data('animation');
				let delay = $(this).data('delay');
				let duration = $(this).data('duration');

				$(this).removeClass('anim' + anim)
					.addClass(anim + ' animated')
					.css({
						webkitAnimationDelay: delay,
						animationDelay: delay,
						webkitAnimationDuration: duration,
						animationDuration: duration
					})
					.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
						$(this).removeClass(anim + ' animated');
					});
			});
		};
		animated();
		// Make animated when slide change
		init.on('slideChange', function () {
			$(sliderActive1 + ' [data-animation]').removeClass('animated');
		});
		init.on('slideChange', animated);
	}

	animated_swiper(sliderActive1, sliderInit1);
		
	}
	function brandTwoActive($scope, $) {
	let acooterbrand = new Swiper('.sponser_2_slider_active', {
		slidesPerView: 6,
		loop: true,
		rtl: false,
		infinite: true,
		autoplay: {
		delay: 3000,
			},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			480: {
			slidesPerView: 2,
			},
			576: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 5,
			},
			1400: {
				slidesPerView: 6,
			},
		}

})}

function portfolioSliderActive($scope, $) {
var swiper = new Swiper('.portfolio_2_slider_active', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	coverflowEffect: {
	rotate: 0,
	stretch: 300,
	depth: 500,
	modifier: 1,
	slideShadows : true,
	},
	autoplay: {
		delay: 3000,
			},

	loop: true,
	navigation: {
        nextEl: ".p-2-button-next",
        prevEl: ".p-2-button-prev",
      },
});}

$(".gst__blog-3-item").on("mouseover", function(){
	var current_class = document.getElementsByClassName("gst__blog-3-item active");
	current_class[0].className = current_class[0].className.replace(" active", "");
	this.className += " active";
});

// team-1-hover-active
$(".agency__our-team-membar").on("mouseover", function(){
	var current_class = document.getElementsByClassName("agency__our-team-membar active");
	current_class[0].className = current_class[0].className.replace(" active", "");
	this.className += " active";
  });

// team-2-hover-active
$(".gst__team-membar-2-parson-bg").on("mouseover", function(){
	var current_class = document.getElementsByClassName("gst__team-membar-2-parson-bg active");
	current_class[0].className = current_class[0].className.replace(" active", "");
	this.className += " active";
  });

// WOW active
new WOW().init();

function heroSliderThreeActive($scope, $) {
	let slider_thumb = new Swiper('.hero_3_slider_thumb', {
		loop: false,
		spaceBetween: 20,
		slidesPerView: 3,
		direction: "vertical",
		rtl: false,
		centeredSlides: true,
		watchSlidesProgress: false,		
	
	});
if (jQuery(".hero_3_slider_active").length > 0) {
	let sliderActive1 = '.hero_3_slider_active';
	let sliderInit1 = new Swiper(sliderActive1, {
		// Optional parameters
		slidesPerView: 1,
		paginationClickable: true,
		loop: true,
		effect: 'fade',
		autoplay: {
			delay: 5000,
				},
		thumbs: {
			swiper: slider_thumb,
		},

	});

	function animated_swiper(selector, init) {
		let animated = function animated() {
			$(selector + ' [data-animation]').each(function () {
				let anim = $(this).data('animation');
				let delay = $(this).data('delay');
				let duration = $(this).data('duration');

				$(this).removeClass('anim' + anim)
					.addClass(anim + ' animated')
					.css({
						webkitAnimationDelay: delay,
						animationDelay: delay,
						webkitAnimationDuration: duration,
						animationDuration: duration
					})
					.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
						$(this).removeClass(anim + ' animated');
					});
			});
		};
		animated();
		// Make animated when slide change
		init.on('slideChange', function () {
			$(sliderActive1 + ' [data-animation]').removeClass('animated');
		});
		init.on('slideChange', animated);
	}

	animated_swiper(sliderActive1, sliderInit1);
}}

$(document).ready(function () {
	initStickyCursorWithDelay();

});
function initStickyCursorWithDelay() {


	var cursorImage = $(".project-move-img")
	var cursorBtn = $(".mouse-pos-list-btn");
	var cursorSpan = $(".mouse-pos-list-span");

	var posXImage = 0
	var posYImage = 0
	var posXBtn = 0
	var posYBtn = 0
	var posXSpan = 0
	var posYSpan = 0
	var mouseX = 0
	var mouseY = 0

	if(document.querySelector(".project-move-img, .mouse-pos-list-btn, .mouse-post-list-span")) {
		gsap.to({}, 0.0083333333, {
			repeat: -1,
			onRepeat: function() {

				if(document.querySelector(".project-move-img")) {
					posXImage += (mouseX - posXImage) / 12;
					posYImage += (mouseY - posYImage) / 12;
					gsap.set(cursorImage, {
						css: {
							left: posXImage,
							top: posYImage
						}
					});
				}
				if(document.querySelector(".mouse-pos-list-btn")) {
					posXBtn += (mouseX - posXBtn) / 7;
					posYBtn += (mouseY - posYBtn) / 7;
					gsap.set(cursorBtn, {
						css: {
							left: posXBtn,
							top: posYBtn
						}
					});
				}
				if(document.querySelector(".mouse-pos-list-span")) {
					posXSpan += (mouseX - posXSpan) / 6;
					posYSpan += (mouseY - posYSpan) / 6;   
					gsap.set(cursorSpan, {
						css: {
							left: posXSpan,
							top: posYSpan
						}
					});
				}
			}
		});
	}
	$(document).on("mousemove", function(e) {
		mouseX = e.clientX;
		mouseY = e.clientY;
	});
	$('.project-move-img-wrap a').on('mouseenter', function() {
		$('.project-move-img, .mouse-pos-list-btn, .mouse-pos-list-span, .mouse-pos-list-span-big').addClass('active');
	});
	$('.project-move-img-wrap a').on('mouseleave', function() {
		$('.project-move-img, .mouse-pos-list-btn, .mouse-pos-list-span, .mouse-pos-list-span-big').removeClass('active');
	});
	$('.project-move-img-wrap li.img-rotate').on('mouseenter', function() {
		var $elements = $(".project-move-img-wrap li.img-rotate");
		var index =  $elements.index($(this));
		var count = $(".project-move-img li.img-rotate").length;
		if($(".float-image-wrap")) {
			gsap.to($(".float-image-wrap"), {
				y: (index*100)/(count*-1) + "%",
				duration: .6,
				ease: Power2.easeInOut
			});
		}
		$(".project-move-img.active .project-move-img-bounce").addClass("active").delay(400).queue(function(next){
			$(this).removeClass("active");
			next();
		});

	});
}

var ltn__active_item = $('.gt-team-item-seven')
ltn__active_item.mouseover(function() {
	ltn__active_item.removeClass('active');
	$(this).addClass('active');
});

$('.open_mobile_menu').on("click", function() {
	$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
});
$('.open_mobile_menu').on('click', function () {
	$('body').toggleClass('mobile_menu_overlay_on');
});
if($('.mobile_menu li.dropdown ul').length){
	$('.mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-caret-right"></span></div>');
	$('.mobile_menu li.dropdown .dropdown-btn').on('click', function() {
		$(this).prev('ul').slideToggle(500);
	});
}
$(".dropdown-btn").on("click", function () {
	$(this).toggleClass("toggle-open");
});

function serviceGridActive($scope, $) {
var swiper = new Swiper(".gt-service-slider", {
	slidesPerView: 3,
	spaceBetween: 35,                  
	loop: true,
	pagination: false,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		1500: {
			slidesPerView: 3,
		},
		1199: {
			slidesPerView: 3,
		},
		991: {
			slidesPerView: 3,
		},
		920: {
			slidesPerView: 2,
		},
		767: {
			slidesPerView: 2,
		},
		600: {
			slidesPerView: 1,
		},
		500: {
			slidesPerView: 1,
		},
		400: {
			slidesPerView: 1,
		},
		300: {
			slidesPerView: 1,
		},
	},
});}
function mainSliderFour($scope, $) {
var swiper = new Swiper(".gt-main-slider-nav", {
	spaceBetween: 10,
	slidesPerView: 3,
	pagination: {
		el: ".swiper-main-paginations",
		clickable: true,
	},
});
var swiper2 = new Swiper(".gt-main-slider-for", {
	spaceBetween: 0,
	effect: "fade",
	pagination: {
		el: ".swiper-main-paginations",
		clickable: true,
	},
	thumbs: {
		swiper: swiper,
	},
});
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})
}

function postGridSlider($scope, $) {
	var slider = new Swiper('.orix-blog-slider', {
		spaceBetween: 30,
		slidesPerView: 3,
		roundLengths: true,
		loop: true,
		loopAdditionalSlides: 30,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		speed: 400,
		breakpoints: {
			'1600': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});
}
function testimonialSlider($scope, $) {
var slider = new Swiper('.single-item-carousel', {
	spaceBetween: 0,
	slidesPerView: 1,
	roundLengths: true,
	loop: true,
	loopAdditionalSlides: 30,
	speed: 400,
	pagination: {
		el: ".swiper-testimonial-paginations",
		clickable: true,
	},
});}

function featureSlideActive($scope, $) {
var services1 = new Swiper('.gto_services_1_active', {
	loop: true,
	speed: 1000,
	autoplay: {
		delay: 5000,
		},
	navigation: {
		nextEl: ".gto_services_1_next",
		prevEl: ".gto_services_1_prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		480: {
		slidesPerView: 1,
		},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3,
		},
	},
});}

var about = new Swiper('.gto_about_1_active', {
	loop: true,
	speed: 1000,
	autoplay: {
		delay: 5000,
		},

	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		480: {
		slidesPerView: 2,
		},
		576: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 4,
		},
		992: {
			slidesPerView: 5,
		},
		1200: {
			slidesPerView: 6,
		},
	},
});

document.addEventListener("mousemove" , parallax);
function parallax(e){

	document.querySelectorAll(".object").forEach(function(move){

		var moving_value = move.getAttribute("data-value");
		var x = (e.clientX * moving_value) /250;
		var y = (e.clientY * moving_value) /250;

		move.style.transform = "translateX(" + x + "px) translateY(" + y +"px)";
	})

}
function projectSliderActive($scope, $) {
var project1 = new Swiper('.gto_project_1_active', {
	spaceBetween: 20,
	loop: true,
	speed: 1000,
	centeredSlides: true,
	autoplay: {
		delay: 5000,
		},
	navigation: {
		nextEl: ".gto_project_1_next",
		prevEl: ".gto_project_1_prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		480: {
		slidesPerView: 1,
		},
		576: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3,
		},
	},
});
}

$(window).on("load", function () {
	Splitting();
});

function testimonialTwoActive($scope, $) {
let testimonial1_thumb = new Swiper('.gto_testimonial_1_preview', {
	spaceBetween: 10,
	loop: true,
	speed: 1000,
	slidesPerView: 2,
	rtl: false,
	centeredSlides: false,
	watchSlidesProgress: false,	
	
	breakpoints: {
		320: {
			slidesPerView: 2,
		},
		576: {
			slidesPerView: 2,

		},
		768: {
			slidesPerView: 2,

		},
		993: {
			slidesPerView: 2,
		},
	}
});

let testimonial1 = new Swiper('.gto_testimonial_1_active', {
	loop: true,
	spaceBetween: 0,
	rtl: false,
	slidesPerView: 1,
	effect: 'fade',
	autoplay: {
		delay: 5000,
		},
	fadeEffect: {
		crossFade: true
	},
	thumbs: {
		swiper: testimonial1_thumb,
	},
});}

function progressSliderActive($scope, $) {
let progress1_thumb = new Swiper('.gto-progress-1-preview-active', {
	spaceBetween: 60,
	loop: true,
	speed: 1000,
	slidesPerView: 3,
	rtl: false,
	centeredSlides: false,
	watchSlidesProgress: false,	
	
	breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        993: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    }
});

let progress1 = new Swiper('.gto-progress-1-main-active', {
	loop: true,
	spaceBetween: 0,
	rtl: false,
	slidesPerView: 1,
	effect: 'fade',
	autoplay: {
		delay: 5000,
		},
	fadeEffect: {
		crossFade: true
	},
	thumbs: {
		swiper: progress1_thumb,
	},
});}

function teamSliderActive($scope, $) {
var services1 = new Swiper('.gto_team_1_slider_active', {
	spaceBetween: 10,
	loop: true,
	speed: 1000,
	slidesPerView: 'auto',
	navigation: {
		nextEl: ".gto_team_1_next",
		prevEl: ".gto_team_1_prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		480: {
		slidesPerView: 1,
		},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 3,
		},
	},
});}
const boxes = gsap.utils.toArray('.tx-animation-style1,.h1-animation');
boxes.forEach(img => {
	gsap.to(img, {
		scrollTrigger: {
			trigger: img,
			start: "top 90%",
			end: "bottom bottom",
			toggleClass: "active",
			once: true,
		}
	});
});
gsap.registerPlugin(ScrollTrigger);
function heroVideoAnimation($scope, $) {
gsap.utils.toArray('.gto-hero-2-video-item ').forEach((el, index) => { 
	let tl1 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 90%",
		end: "buttom 50%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl1
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 1, scale: .5, y: "+=100"}, {opacity: 1, scale: 1, y: 0, duration: 1, immediateRender: false})
  })
}
$('.tilt_scale').tilt({
    glare: true,
    maxGlare: .5
})
$('.plyvideo').on("click", function() {
	$('.gto-hero-2-video-item, .btn-position').toggleClass("active");
});

$('.js-tilt').tilt({})

const boxesTwo = gsap.utils.toArray('.tx-animation-style1,.asx-class,.h1-animation');
boxesTwo.forEach(img => {
	gsap.to(img, {
		scrollTrigger: {
			trigger: img,
			scrub: 1,
			start: "top 80%",
			end: "bottom bottom",
			toggleClass: "active",
			toggleActions: "play none none reverse",
			once: true,
		}
	});
});

gsap.utils.toArray(' .asslideup').forEach((el, index) => { 
	let tl2 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 90%",
		end: "top 70%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl2
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 1, scale: 0, y: "+=100"}, {opacity: 1, scale: 1, y: 0, duration: 1, immediateRender: false})
  })
  
  gsap.utils.toArray(' .asslideupcta').forEach((el, index) => { 
	let tlcta = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 80%",
		end: "top 40%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tlcta
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 1,  y: "+=300"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
  })
  
  
  // For each images with class "animate-image" on page
  gsap.utils.toArray('.animate-image').forEach((el, index) => { 
	  let tl3 = gsap.timeline({
		scrollTrigger: {
		  trigger: el,
		  start: "top 90%",
		  end: "buttom 40%",
		  toggleActions: "play none none reverse",
		   markers: false
		}
	  })
	  
	  tl3
	  .set(el, {transformOrigin: 'center center'})
	  .from(el, { opacity: 0, scale: 0.8, y: "+=100"}, {opacity: 1, scale: 1, y: 0, duration: 1, immediateRender: false})
	})
  
  // For each images with class "animate-image" on page
  gsap.utils.toArray('.asa3bg').forEach((el, index) => { 
	  let vasa3bg = gsap.timeline({
		scrollTrigger: {
		  trigger: el,
		  start: "top 90%",
		  end: "buttom 40%",
		  toggleActions: "play none none reverse",
		   markers: false
		}
	  })
	  
	  vasa3bg
	  .set(el, {transformOrigin: 'center center'})
	  .from(el, { opacity: 1, scale: 0.2, y: "+=100"}, {opacity: 1, scale: 1, y: 0, duration: 1, immediateRender: false})
	})
  
  // For each images with class "animate-image" on page
  gsap.utils.toArray('.ass3bgsl').forEach((el, index) => { 
	  let vass3bgsl = gsap.timeline({
		scrollTrigger: {
		  trigger: el,
		  scrub: 1,
		  start: "top 95%",
		  end: "top 70%",
		  toggleActions: "play none none reverse",
		   markers: false
		}
	  })
	  
	  .fromTo(el, {
		  x: -200,
		  duration: 1,
		}, {
		  x: 0,
		})
	})
  
  // For each images with class "animate-image" on page
  gsap.utils.toArray('.ass3bgsr').forEach((el, index) => { 
	  let vass3bgsr = gsap.timeline({
		scrollTrigger: {
		  trigger: el,
		  scrub: 1,
		  start: "top 95%",
		  end: "top 70%",
		  toggleActions: "play none none reverse",
		   markers: false
		}
	  })
	  
	  vass3bgsr
	  .fromTo(el, {
		  x: 200,
		  duration: 1,
		}, {
		  x: 0,
		})
	})
  
  gsap.utils.toArray('.ass3vrd').forEach((el, index) => { 
	  let vass3vrd = gsap.timeline({
		scrollTrigger: {
		  trigger: el,
		  scrub: 1,
		  start: "top 95%",
		  end: "top 5%",
		  toggleActions: "play none none reverse",
		   markers: false
		}
	  })
	  
	  vass3vrd
	  .to(el, {
		  rotateZ: 360,
		  duration: 3,
		})
	})
  
  gsap.utils.toArray('.ast3vrd').forEach((el, index) => { 
	  let vast3vrd = gsap.timeline({
		scrollTrigger: {
		  trigger: el,
		  // scrub: 1,
		  start: "top 95%",
		  end: "top 5%",
		  toggleActions: "play none none reverse",
		   markers: false
		}
	  })
	  
	  vast3vrd
	  .fromTo(el, {
		  rotateZ: 90,
		  duration: 2,
		}, {
		  rotateZ: 0,
		})
	})
  
  
  gsap.utils.toArray('.ascta3y').forEach((el, index) => { 
	  let vascta3y = gsap.timeline({
		scrollTrigger: {
		  trigger: el,
		  scrub: 1,
		  start: "top 95%",
		  end: "top 5%",
		  toggleActions: "play none none reverse",
		   markers: false
		}
	  })
	  
	  vascta3y
	  .fromTo(el, {
		  y: 150,
		  duration: 2,
		}, {
		  y: 0,
		})
	})

	

  $(".gto-team-2-member").on("mouseover", function(){
	var current_class = document.getElementsByClassName("gto-team-2-member active");
	current_class[0].className = current_class[0].className.replace(" active", "");
	this.className += " active";
  });

  function postCarouselActiveTwo($scope, $) {
  var blog2 = new Swiper('.gto_blog_2_active', {
	loop: true,
	spaceBetween: 30,
	slidesPerView: 2,
	speed: 1000,
	centeredSlides: false,
	autoplay: {
		delay: 4000,
	},
	pagination: {
		el: ".blgo_2_pagination",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		480: {
		slidesPerView: 1,
		},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 2,
		},
	},
});}
function testimonialActiveThree($scope, $) {
var testimonial2 = new Swiper('.gto_testimonial_2_active', {
	loop: true,
	speed: 1000,
	centeredSlides: true,
	autoplay: {
		delay: 4000,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	}
});}

function heroSliderActive($scope, $) {
	if (jQuery(".gto_hero_3_active").length > 0) {
		let sliderActive1 = '.gto_hero_3_active';
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			// paginationClickable: true,
			loop: true,
			effect: "fade",
			keyboard: true,
			// cssMode: true,
			// mousewheel: true,
			autoplay: {
				delay: 8000,
			},
			pagination: {
				el: ".gto_hero_3_pagination",
				type: "fraction",
			},
			navigation: {
				nextEl: ".gto_hero_3_next",
				prevEl: ".gto_hero_3_prev",
			},
			

		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + ' [data-animation]').each(function () {
					let anim = $(this).data('animation');
					let delay = $(this).data('delay');
					let duration = $(this).data('duration');

					$(this).removeClass('anim' + anim)
						.addClass(anim + ' animated')
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration
						})
						.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
							$(this).removeClass(anim + ' animated');
						});
				});
			};
			animated();
			// Make animated when slide change
			init.on('slideChange', function () {
				$(sliderActive1 + ' [data-animation]').removeClass('animated');
			});
			init.on('slideChange', animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}
}
$(".gto-testimonial-3-item").on("mouseover", function(){
	var current_class = document.getElementsByClassName("gto-testimonial-3-item active");
	current_class[0].className = current_class[0].className.replace(" active", "");
	this.className += " active";
  });


  function testimonialThCrActive($scope, $) {
let testimonial4_thumb = new Swiper('.testiomonial_4_preview_active', {
	spaceBetween: 15,
	loop: true,
	speed: 1000,
	slidesPerView: 3,
	rtl: false,
	centeredSlides: false,
	watchSlidesProgress: false,	
	
	breakpoints: {
		320: {
			slidesPerView: 2,
		},
		576: {
			slidesPerView: 3,

		},
		768: {
			slidesPerView: 3,

		},
		993: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 3,
		},
	}
});

let testimonial4 = new Swiper('.gto_testimonial_4_main_active', {
	loop: true,
	spaceBetween: 0,
	rtl: false,
	slidesPerView: 1,
	// effect: 'fade',
	autoplay: {
		delay: 5000,
		},
	fadeEffect: {
		crossFade: true
	},
	thumbs: {
		swiper: testimonial4_thumb,
	},
});}

$('.popup-video').magnificPopup({
	type: 'iframe'
});

/**
 * Preloader
 */
function preloader() {
	$('.preloader').delay(0).fadeOut();
};
$(window).on('load', function () {
	preloader();
});


/*
project-page-2
====start====
*/
function projectFilterActive($scope, $) {
	// ----------------------------- isotop gallery

	$(window).on("load", function () {
	  if ($(".project-filter-item-wrap").length) {
		var $grid = $(".project-filter-item-wrap").isotope({
		  // options
		  itemSelector: ".isotop-item",
		  percentPosition: true,
		  masonry: {
			// use element for option
			columnWidth: 1,
		  },
		});

		// filter items on button click
		$(".project-filter-btn").on("click", "li", function () {
		  var filterValue = $(this).attr("data-filter");
		  $grid.isotope({ filter: filterValue });
		});

		// change is-checked class on buttons
		$(".project-filter-btn").each(function (i, buttonGroup) {
		  var $buttonGroup = $(buttonGroup);
		  $buttonGroup.on("click", "li", function () {
			$buttonGroup.find(".is-checked").removeClass("is-checked");
			$(this).addClass("is-checked");
		  });
		});
	  }
	});}

	function projectCarouselTwo($scope, $) {
	let project4 = new Swiper('.gto_project_4_active', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		centeredSlides: true,
		rtl: false,
		infinite: false,
		grabCursor: true,
		speed: 1000,
		autoplay: {
			delay: 500000,
		},
		navigation: {
			nextEl: ".gto_project_4_next",
			prevEl: ".gto_project_4_prev",
		},
	
	
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 3,
			},
			2000: {
				slidesPerView: 4,
			},
		}
	
	});}
	function testimonialFourActive($scope, $) {
	let testimonial5 = new Swiper('.gto_t5_active', {
		slidesPerView: "auto",
		spaceBetween: 30,
		speed: 1000,
		loop: false,
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: ".gto_testimonial_5_next",
			prevEl: ".gto_testimonial_5_prev",
		},
		pagination: {
			el: ".gto_t5_pagination",
			type: "progressbar",
		  },
	
	
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 3,
			},
			2000: {
				slidesPerView: 4,
			},
		}
	
	});}

$(window).on('elementor/frontend/init', function () {
	elementorFrontend.hooks.addAction('frontend/element_ready/bin-slider.default', bannerActiveOne);
	elementorFrontend.hooks.addAction('frontend/element_ready/bin-brand-logo.default', brandActiveCarousel);
	elementorFrontend.hooks.addAction('frontend/element_ready/bin-slider-two.default', dataBgEditorLoad);
	elementorFrontend.hooks.addAction('frontend/element_ready/bin-tst-carousel.default', testimonialSlider);
	elementorFrontend.hooks.addAction('frontend/element_ready/bin-slider-two.default', dataBgEditorLoad);
	elementorFrontend.hooks.addAction('frontend/element_ready/gst-hero-banner.default', dataBgEditorLoad);
	elementorFrontend.hooks.addAction('frontend/element_ready/gst-hero-banner-tw.default', dataBgEditorLoad);
	elementorFrontend.hooks.addAction('frontend/element_ready/bin-slider-two.default', sliderTwoActive);
	elementorFrontend.hooks.addAction('frontend/element_ready/bin-brand-logo-two.default', brandTwoActive);
	elementorFrontend.hooks.addAction('frontend/element_ready/bin-portfolio-tw.default', portfolioSliderActive);
	elementorFrontend.hooks.addAction('frontend/element_ready/bin-slider-three.default', heroSliderThreeActive);
	elementorFrontend.hooks.addAction('frontend/element_ready/bin-service-grid.default', serviceGridActive);
	elementorFrontend.hooks.addAction('frontend/element_ready/bin-slider-four.default', mainSliderFour);
	elementorFrontend.hooks.addAction('frontend/element_ready/bin-post-carousel.default', postGridSlider);
	elementorFrontend.hooks.addAction('frontend/element_ready/bin-features-carousel.default', featureSlideActive);
	elementorFrontend.hooks.addAction('frontend/element_ready/bin-project-car.default', projectSliderActive);
	elementorFrontend.hooks.addAction('frontend/element_ready/bin-tst-carousel-two.default', testimonialTwoActive);
	elementorFrontend.hooks.addAction('frontend/element_ready/bin-progress-slider.default', progressSliderActive);
	elementorFrontend.hooks.addAction('frontend/element_ready/int-team-carousel.default', teamSliderActive);
	elementorFrontend.hooks.addAction('frontend/element_ready/gst-video-hero-banner.default', heroVideoAnimation);
	elementorFrontend.hooks.addAction('frontend/element_ready/bin-post-carousel-tw.default', postCarouselActiveTwo);
	elementorFrontend.hooks.addAction('frontend/element_ready/bin-tst-3-carousel.default', testimonialActiveThree);
	elementorFrontend.hooks.addAction('frontend/element_ready/gst-hero-slider.default', heroSliderActive);
	elementorFrontend.hooks.addAction('frontend/element_ready/bin-tst-carousel-three.default', testimonialThCrActive);
	elementorFrontend.hooks.addAction('frontend/element_ready/bin-project-filter.default', projectFilterActive);
	elementorFrontend.hooks.addAction('frontend/element_ready/bin-project-car-two.default', projectCarouselTwo);
	elementorFrontend.hooks.addAction('frontend/element_ready/bin-tst-carousel-4.default', testimonialFourActive);
});

})(jQuery);