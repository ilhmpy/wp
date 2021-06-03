$(document).ready(function() {

   /*==================================
     Parallax
     ====================================*/


    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // Detect Mobile User // No parallax
        $('.parallaximg').addClass('ismobile');

    } else {
        // All Desktop 
        $(window).bind('scroll', function (e) {
            parallaxScroll();
        });

        function parallaxScroll() {
            var scrolledY = $(window).scrollTop();
            var sc = ((scrolledY * 0.3)) + 'px';
            $('.parallaximg').css('marginTop', '' + ((scrolledY * 0.3)) + 'px');
        }
		
    }
	
	/*==================================
     Slick
     ====================================*/

if ($('.rs-slider-container').length > 0) {
	$('.rs-slider-container').slick({
		infinite: true,
		slidesToShow: 1,
		speed: 800,
		dots: true,
		autoplay: true,
		lazyLoad: 'ondemand',
		cssEase: 'cubic-bezier(0.845, 0.045, 0.355, 1)'
	});
}	
	
/*==================================
     OwlCarousel
     ====================================*/
if ($('.reviews-slider').length > 0) {
        $(".reviews-slider").owlCarousel({
            items: 1,
			margin: 10,
            lazyLoad: true,
            autoplay: false,
            loop: true,
            dots: false,
            nav: false,
            responsiveClass: true,
			autoHeight:true, 
            responsive: {
                0: {
                    items: 1,
					lazyLoad: true,
					autoplay: false,
					loop: true,
					dots: false,
					nav: false,
					responsiveClass: true,
					autoHeight:true
                }
            }
        });
		 $("a.reviews-next").click(function () {
            $(".reviews-slider").trigger('next.owl.carousel');
        });
        $("a.reviews-prev").click(function () {
            $(".reviews-slider").trigger('prev.owl.carousel');
        });
}


function customPager(obj) {
	var pagination = obj.find('.owl-dots');
	obj.find('.owl-next').remove();
	obj.find('.owl-prev').remove();
	if(pagination.hasClass('disabled')){
		return;
	}
	pagination.after("<div class='owl-next'><i class='fa fa-angle-right'></i>  </div>");
    pagination.before("<div class='owl-prev'><i class='fa fa-angle-left'></i> </div>");
}

	
	var latestProductSlider = $("#product-slider");
	if(latestProductSlider.length > 0){
		latestProductSlider.owlCarousel({
			items: 4,
			dots: true,
			nav: false,
			lazyLoad: true,
			responsiveClass:true,
			responsive: {
					0: {
						items: 1
					},
					544: {
						items: 2
					},
					992: {
						items: 3
					},
					1200: {
						items: 4
					}
			},
			onInitialized: function(){customPager(latestProductSlider)},
			onResized: function(){customPager(latestProductSlider)}
		});
		$("#product-slider .owl-next").click(function () {
        latestProductSlider.trigger('next.owl.carousel');
		});
		$("#product-slider .owl-prev").click(function () {
			latestProductSlider.trigger('prev.owl.carousel');
		});
	}
	
	var similarProductSlider = $("#similar-product-slider");
	if(similarProductSlider.length > 0){
		similarProductSlider.owlCarousel({
			items: 5,
			dots: true,
			nav: false,
			lazyLoad: true,
			responsiveClass:true,
			responsive: {
					0: {
						items: 1
					},
					480: {
						items: 2
					},
					768: {
						items: 3
					},
					992: {
						items: 4
					},
					1200: {
						items: 5
					}
			},
			onInitialized: function(){customPager(similarProductSlider)},
			onResized: function(){customPager(similarProductSlider)}
		});
		$("#similar-product-slider .owl-next").click(function () {
        similarProductSlider.trigger('next.owl.carousel');
		});
		$("#similar-product-slider .owl-prev").click(function () {
			similarProductSlider.trigger('prev.owl.carousel');
		});
	}

  	
	// search-btn, search-close
	$(".search-btn").on('click', function (e) {
        $('.search-full').addClass("active"); //you can list several class names 
        e.preventDefault();
    });

    $('.search-close').on('click', function (e) {
        $('.search-full').removeClass("active"); //you can list several class names 
        e.preventDefault();
    });
	
	
	 
	// Product Details Modal Change large image when click thumb image
    $(".modal-product-thumb a").click(function () {
        var largeImage = $(this).find("img").attr('data-large');
        $(".product-largeimg").attr('src', largeImage);
        $(".zoomImg").attr('src', largeImage);
    });
	
	
	
	// product details color switch
    $(".swatches li").click(function () {
        $(".swatches li.selected").removeClass("selected");
        $(this).addClass('selected');
    });
	
    $(".product-color a").click(function () {
        $(".product-color a").removeClass("active");
        $(this).addClass('active');

    });

    // Modal thumb link selected
    $(".modal-product-thumb a").click(function () {
        $(".modal-product-thumb a.selected").removeClass("selected");
        $(this).addClass('selected');

    });
	
	
	// customs select by select2
    // $("select").minimalect(); // REMOVED with  selct2.min.js
	$(function(){	
		if($('select.form-control').length > 0){
			$('select.form-control').select2();
		}
	});
	
	
	//NekoAnim
	$(function(){	
		if($('.activateAppearAnimation').length > 0){
			nekoAnimAppear();
			$('.reloadAnim').click(function (e) {
				$(this).parent().parent().find('img[data-nekoanim]').attr('class', '').addClass('img-responsive');
				nekoAnimAppear();
				e.preventDefault();
			});
		}
	});
	
	//checkbox modal
	$(function(){
		$('input[type="checkbox"].agreement-check').prop('checked',false);
		$('button.modal-btn').prop('disabled',true);
		$('input[type="checkbox"].agreement-check').on('change',function(){
			if(this.checked){
				$('button.modal-btn').attr('disabled',false);
			}else{
				$('button.modal-btn').prop('disabled',true);
			}
		});
	});
	
	
	//scroll up
	$(function(){
		$(window).scroll(function(){		
			if($(this).scrollTop()>200){
				$("#button-up").fadeIn();			
			}else{
				$("#button-up").fadeOut();
			}		
		});
		$("#button-up").click(function() {
		$("body,html").animate({scrollTop:0},800);
		});
	});
	
	//Validate
	if($('#contact-form').length > 0){
		$('#contact-form').validate({
			submitHandler: function (form){
				form.submit();
			},
			rules: {
				name: {
						required: true,
						minlength: 2
					   },
				
				email: {
						required: true,
						email: true
					   },
			   
				phone: {
						required: true,
						minlength: 10
					   }
				},
				messages: {
						name: {
							required: "Введите свое имя",
							minlength: "Длина должна быть больше 2-х символов"
						},
						 email: {
							required: "Введите email",
							email: "Введите корректный email"
						},
						 phone: {
							required: "Введите телефон",
							minlength: "Введите корректный телефон"
							
						}
				}
		});
	}
	
	if($('#order-call .form-order').length > 0){
		$('#order-call .form-order').validate({
			submitHandler: function (form){
				form.submit();
			},
			rules: {
				name: {
						required: true,
						minlength: 2
					   },
				
				email: {
						required: true,
						email: true
					   },
			   
				phone: {
						required: true,
						minlength: 10
					   }
				},
				messages: {
						name: {
							required: "Введите свое имя",
							minlength: "Длина должна быть больше 2-х символов"
						},
						 email: {
							required: "Введите свой email",
							email: "Введите корректный email"
						},
						 phone: {
							required: "Введите свой телефон",
							minlength: "Введите корректный телефон"
							
						}
				}
		});
	}
	
	if($('#order-call2 .form-order').length > 0){
		$('#order-call2 .form-order').validate({
			submitHandler: function (form){
				form.submit();
			},
			rules: {
				name: {
						required: true,
						minlength: 2
					   },
				
				email: {
						required: true,
						email: true
					   }
				},
				messages: {
						name: {
							required: "Введите свое имя",
							minlength: "Длина должна быть больше 2-х символов"
						},
						email: {
							required: "Введите свой email",
							email: "Введите корректный email"
						}
						 
				}
		});
	}
	
	if($('#order-call3 .form-order').length > 0){
		$('#order-call3 .form-order').validate({
			submitHandler: function (form){
				form.submit();
			},
			rules: {
				name: {
						required: true,
						minlength: 2
					   },
				
				
				phone: {
						required: true,
						minlength: 10
					   }
				},
				messages: {
						name: {
							required: "Введите свое имя",
							minlength: "Длина должна быть больше 2-х символов"
						},
						phone: {
							required: "Введите свой телефон",
							minlength: "Введите корректный телефон"
						},
						 
				}
		});
	}
	
	if($('.contacts-form').length > 0){
		$('.contacts-form').validate({
			submitHandler: function (form){
				form.submit();
			},
			rules: {
				contacts_name: {
						required: true,
						minlength: 2
					   },
				
				contacts_email: {
						required: true,
						email: true
					   },
			   
				contacts_phone: {
						required: true,
						minlength: 10
					   }
				},
				messages: {
						contacts_name: {
							required: "Введите свое имя",
							minlength: "Длина должна быть больше 2-х символов"
						},
						contacts_email: {
							required: "Введите свой email",
							email: "Введите корректный email"
						},
						contacts_phone: {
							required: "Введите свой телефон",
							minlength: "Введите корректный телефон"
							
						}
				}
		});
	}
	
	$(function(){
		if($('.smoothscroll').length > 0){
			$(".smoothscroll").mCustomScrollbar({
				advanced: {
					updateOnContentResize: true

				},

				scrollButtons: {
					enable: false
				},

				mouseWheelPixels: "100",
				theme: "dark-2"

			});
		
		}
	});
	
	//fancybox
	$(function(){	
		if($('[data-fancybox]').length > 0){
		$('[data-fancybox]').fancybox({
					loop : true,
					infobar : false,
					toolbar  : true,
					
					buttons : [
						'close'
					],
					thumbs : {
						autoStart : true
					}
					});
		}
	});
	
	// cart quantity changer sniper
	$(function(){
		if($("input[name='quanitySniper']").length > 0){
			$("input[name='quanitySniper']").TouchSpin({
				buttondown_class: "btn btn-link",
				buttonup_class: "btn btn-link"
			});
		}
	});
	
	
	// product-carousel
	$(function(){
		if($('#product-carousel').length > 0){
			$('#product-carousel').carousel({
				interval: false,
				wrap: false,
				keyboard: false,
				pause: 'null'
			});
			$('#product-carousel').carousel('pause');
			
			// zoom product
			var productHeight = $('#product-carousel .product-carousel-item').height();
			var productWidth = $('#product-carousel .product-carousel-item').width();
			
			$('#product-carousel .product-carousel-item a').each(function(){
				var productWidthImg = $(this).find('img').naturalWidth();
				var productHeightImg = $(this).find('img').naturalHeight();
				if((productWidthImg > productWidth)&&(productHeightImg > productHeight)){
					$(this).zoom();
				}
			})	
		}
	});
	
//change-view	
	$(function(){
		$('.change-view .grid-view').click(function(){
			if($(this).hasClass('active')) {
				$(this).siblings().removeClass('active');
				$('.categoryProduct').addClass('grid-view');
			}
			else {
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
				$('.categoryProduct').addClass('grid-view');
				}
			$('.categoryProduct').removeClass('list-view');
						
			return false;
			});
					
					
		$('.change-view .list-view').click(function(){
			if($(this).hasClass('active')) {
				$(this).siblings().removeClass('active');
				$('.categoryProduct').addClass('list-view');
			}
			else {
				$(this).siblings().removeClass('active');
				$(this).addClass('active');
				$('.categoryProduct').addClass('list-view');
			}
			$('.category').removeClass('grid-view');
						
			return false;
			});
	});

	// Customs tree menu script
	$(function(){
		$(".dropdown-tree-a").click(function () { //use a class, since your ID gets mangled
			$(this).parent('.dropdown').toggleClass("open"); //add the class to the clicked element
		});
	});
	
	$(function(){
		panelClose();
		$(window).resize(function(){
			panelClose();
		});
	});
	
});

function panelClose(){
	if($(window).width() <= 768) {
		$('#accordionNo .panel').each(function(){
				$(this).find('.panel-collapse').removeClass('in');
				$(this).find('[data-toggle="collapse"]').addClass('collapsed').attr("aria-expanded",false);
			});
		} else{
			$('#accordionNo .panel').each(function(){
				$(this).find('.panel-collapse').addClass('in');
				$(this).find('[data-toggle="collapse"]').removeClass('collapsed').attr("aria-expanded",true);
			});
		}
}
function nekoAnimAppear(){
	$("[data-nekoanim]").each(function() {

		var $this = $(this);

		$this.addClass("nekoAnim-invisible");
		
		if($(window).width() > 767) {
			
			$this.appear(function() {

				var delay = ($this.data("nekodelay") ? $this.data("nekodelay") : 1);
				if(delay > 1) $this.css("animation-delay", delay + "ms");

				$this.addClass("nekoAnim-animated");
				$this.addClass('nekoAnim-'+$this.data("nekoanim"));

				setTimeout(function() {
					$this.addClass("nekoAnim-visible");
				}, delay);

			}, {accX: 0, accY: -150});

		} else {
			$this.animate({ opacity: 1 }, 300, 'easeInOutQuad',function() { });
		}
	});
}

(function($){
		  var
		  props = ['Width', 'Height'],
		  prop;

		  while (prop = props.pop()) {
		  (function (natural, prop) {
			$.fn[natural] = (natural in new Image()) ? 
			function () {
			return this[0][natural];
			} : 
			function () {
			var 
			node = this[0],
			img,
			value;

			if (node.tagName.toLowerCase() === 'img') {
			  img = new Image();
			  img.src = node.src,
			  value = img[prop];
			}
			return value;
			};
		  }('natural' + prop, prop.toLowerCase()));
		  }
		}(jQuery));