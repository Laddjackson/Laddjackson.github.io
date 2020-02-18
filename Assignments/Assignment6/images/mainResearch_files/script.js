/* Author: Peter Schmolze */

$(document).ready(function(){
	var siteController = {
		init: function() {
			siteController.placeholderPolyfill();
			siteController.mobileNav();
			siteController.addSpanToLinks();
			siteController.accessibility();
			siteController.toggleSearchMobile();
			siteController.fixedHeaderScroll();
			siteController.expandCollapse();
			siteController.accordion();
			siteController.activeNavItemDesktop();
			siteController.activeNavItemMobile();
			siteController.dataTable();
			siteController.responsiveTable();
			siteController.lightbox();
			siteController.blogCallout();
			siteController.blogFlexslider();
			siteController.responsiveVids();
		},
		placeholderPolyfill: function() {
			if(!Modernizr.input.placeholder){
				$('[placeholder]').focus(function() {
				  var input = $(this);
				  if (input.val() === input.attr('placeholder')) {
					input.val('');
					input.removeClass('placeholder');
				  }
				}).blur(function() {
				  var input = $(this);
				  if (input.val() === '' || input.val() === input.attr('placeholder')) {
					input.addClass('placeholder');
					input.val(input.attr('placeholder'));
				  }
				}).blur();
				$('[placeholder]').parents('form').submit(function() {
				  $(this).find('[placeholder]').each(function() {
					var input = $(this);
					if (input.val() === input.attr('placeholder')) {
					  input.val('');
					}
				  });
				});
			}
		},
		mobileNav: function() {
			// Initialize the mobile nav
			var $mobileMenu = $('#sidr');
			$mobileMenu.css("display", "none");
			$('.menu-btn-mobile').on('click', function() {
				$mobileMenu.toggleClass('is-open');
				$mobileMenu.stop().animate({right: '0px'}, 500, 'linear');
				if ( $mobileMenu.hasClass('is-open') ) {
					var $sidr = $('.sidr-inner'),
						$selected = $('.mobile-nav .selected');

					$mobileMenu.css("display", "block");
					// Close the search form on blur
					$("#search").stop().slideUp('fast').find('.search-input').val('').blur();
					// Open parent ULs to show user navigation path on mobile nav
					$selected.parents('ul').show().prev('span').toggleClass("plus minus");
					// Scroll to selected item
					$sidr.scrollTop(0).scrollTop( ( $selected.offset().top - $sidr.offset().top ) - $(window).height() / 2);
				} else {
					$mobileMenu.stop().animate({right: '-1000px'}, 500, 'linear');
				}
			})
		},
		addSpanToLinks: function() {
			// For all links that only have text
			$(window).on('load', function() {
				if( $("a[data-region-style='button']").length ) {} else { 
					$('a:not(:has(*))').each(function(){
						$(this).wrapInner('<span></span>');
					});
				}
			});
		},
		accessibility: function() {
			// Enable focus overlay transitions
			var fo = new FocusOverlay();
			
			$('.main-nav').on('focus', ".nav-links > li", function(e) {
				$('.nav-links .hover').removeClass('hover');
				$(this).closest('li').addClass('hover');
			});
			$('.main-nav_top, #main-content, .footer-wrapper').on('focusin', function(){
				$('.nav-links .hover').removeClass('hover');
				$('.menu-btn').removeClass('is-opened');
			});

		    $('#search-desktop').on('focus', ".search-input", function() {
				$(this).parent().addClass('hover');
			}).on('focusout', ".search-input", function () {
				$(this).parent().removeClass('hover');
			});
		},
		toggleSearchMobile: function() {
			// Show search (mobile)
			$(".search-btn-mobile").on("click", function(e){
				e.preventDefault();
				var $searchForm = $('#search');

				if( $searchForm.is(":hidden") ) {
					$searchForm.stop().slideToggle('fast')
							.find('.search-input').focus();
				} else {
					$searchForm.stop().slideToggle('fast');
				}
			});
		},
		fixedHeaderScroll: function() {
			// Add fixed class to header on scroll
			var mainNavHeight = $('.main-nav').height();
			$(window).scroll(function(){
				var bannerHeight = $('.banner').height();
				if ($(this).scrollTop() > bannerHeight) {
					$('.banner').addClass('is-fixed');
					$('#main-wrapper').css('margin-top', mainNavHeight + 'px')
				} else {
					$('.banner').removeClass('is-fixed');
					$('#main-wrapper').removeAttr('style');
				}
			}).scroll();	
		},
		expandCollapse: function() {
			// Expand/Collapse
			$(".plus").on("click", function(){
				$(this).toggleClass("plus minus").siblings('ul').stop().slideToggle();
				$(this).attr('aria-expanded', function (i, attr) {
					return attr == 'true' ? 'false' : 'true'
				});
				if( $(this).closest(".mobile-nav").length>0 ) {
					$(this).attr('aria-label', function (i, attr) {
						return attr == 'expand section' ? 'collapse section' : 'expand section'
					});
				}
			});

			// Add aria attributes for accessibility on expand/collapse
			$( ".js-tab-target" ).each(function( index ) {
				var i = index + 1;
				if ( $(this).hasClass('accordion-summary') ) {
					$(this).find('span').first().attr("id","accordion-header"+i);
				} else {
					$(this).closest("li").find("span").attr("id","accordion-header"+i);
				}
				$(this).attr({
					"aria-controls":"accordion-content"+i,
					"aria-expanded": "false"
				});
				$(this).next().attr({
					"id": "accordion-content"+i,
					"aria-labelledby": "accordion-header"+i
				});	
			});	
			
			// Add aria attributes on list-widgets attached to the header
			$('.list-widget').each(function( index ) {
				var i = index + 1;
				$(this).closest('nav').attr("aria-labelledby","list-widget-head"+i)
					   .prev('h2').attr("id","list-widget-head"+i);
			});
		},
		accordion: function() {
			// Expand/Collapse for content pages
				//expand or collapse all boxes
			var sum = '.accordion-summary';
			$(".accordion-expand").click(function(){
				$(this).text($(this).text() === "Collapse All" ? "Expand All" : "Collapse All");
				if($(this).hasClass("expand-all")){
					$(this).nextAll('.accordion-details').addClass('opened');
					$(this).nextAll(sum).addClass('selected').attr('aria-expanded', 'true');
				}
				else {
					$(this).nextAll('.accordion-details').removeClass('opened');
					$(this).nextAll(sum).removeClass('selected').attr('aria-expanded', 'false');
				}
			});
			$(sum).on("click", function(){
				$(this).next().toggleClass('opened');
				$(this).toggleClass('selected');
				$(this).attr('aria-expanded', function (i, attr) {
					return attr == 'true' ? 'false' : 'true'
				});
			});	
		},
		activeNavItemDesktop: function() {
			// Highlight current top level section nav item
			 OUC = typeof OUC === "undefined" ? {} : OUC;
			 OUC.dirname = typeof OUC.dirname === "undefined" ? window.location.pathname : OUC.dirname;
			 OUC.rootDirectory = OUC.dirname.replace(/\//,"");
			 OUC.rootDirectory = OUC.rootDirectory.replace(/\/.*/,"");

			 $("ol.nav-links>li>a").each(function (){
				var linkPath = $(this).attr('href').replace(/\//,"");
				linkPath = linkPath.replace(/\/.*/,"");

				if(linkPath == OUC.rootDirectory)
					$(this).addClass("active");
			});
		},
		activeNavItemMobile: function() {
			 //Select current page anchor in mobile site nav
			 $("nav.mobile-nav a").each(function (){
				if($(this).attr('href') == window.location.pathname)
					$(this).addClass('selected');
				else if(window.location.pathname.match(/[\/]*$/) &&
						$(this).attr('href') == (window.location.pathname + 'index.php'))
					$(this).addClass('selected');
			});
		},
		dataTable: function() {
			// Initialize Data Table Sorter
			if ($('table.display:not([id])').length > 0) {
				$(function() {
					$.urlParam = function(name){
						var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
						if (!results)
						{
							return;
						}
						return decodeURIComponent(results[1] || "");
					}

					var ts = $('table.display');
					for (i=0; i < ts.length; i++) {
						ts[i].id = "DataTables_Table_" + i;

						var oTable = $('#DataTables_Table_' + i).DataTable({
							"dom": "Rf<\"#reset-table" + i + "\">rtpil",
							"autoWidth": false,
							"pageLength": 25,
							"pagingType": "full_numbers",
							"columnDefs": [
								{ orderable: false, aTargets: ['noSort'] }, // Disable sorting on columns marked as so		
								{ visible: false, aTargets: ['dt-hidden-column'] }
							],
							"order": [[ 0, "asc" ]],
							"language": {
								"search": "Filter: "
							},
							"search": {"search": $.urlParam('search')}
						});	
						$("#reset-table" + i).html('<span id="reset-table-btn' + i +'" class="reset-table"><a href="#">Reset Table</a></span>');
						$("#DataTables_Table_" + i + "_filter input").attr("placeholder", "type keywords to filter table results");
						getResetClick(i);
					}

					function getResetClick(i)
					{
						var input = $("#DataTables_Table_" + i + "_filter input");
						$("#reset-table-btn" + i).on( "click", function(event) {
							event.preventDefault()
							var oTable =  $('#DataTables_Table_' + i).DataTable();
							input.val('').keyup();
							oTable.order([ 0, 'asc' ]).draw();
						});

						if ( input.val() != '' ) {
							$("#reset-table" + i).show();
						} else {
							$("#reset-table" + i).hide();
						}

						$('#DataTables_Table_' + i + ' th').on( "click", function() {
							$("#reset-table" + i).show();
						});

						input.on({
							keydown: function() {
								$("#reset-table" + i).show();
							},
							keyup: function() {
								if ( input.val() == '' ) {
									$("#reset-table" + i).hide();
								}
							}  
						});
					}
				});
			}
		},
		responsiveTable: function() {
			/* Increment numbered class for responsive tables */
			$('table.regular').each(function(index, elem) {
				var i = index + 1;
				$(this).addClass('regular-' + i);
			});
		},
		lightbox: function() {
			// Initialize Fancybox
			jQuery.fn.extend({
				renameAttr: function(name, newName, removeData) {
					var val;
					return this.each(function() {
						val = jQuery.attr(this, name);
						jQuery.attr(this, newName, val);
						jQuery.removeAttr(this, name);
						// move original data
						if (removeData !== false) {
							jQuery.removeData(this, name.replace('data-', ''));
						}
					});
				}
			});

			var fancyboxItems = '.fancybox, a.lightbox-img, span.lightbox-img a';

			$(fancyboxItems).renameAttr("rel", "data-fancybox");
			$(fancyboxItems).renameAttr("data-fancybox-group", "data-fancybox");
			$(fancyboxItems).renameAttr("title", "data-caption");

			var updatefc = function(instance, current) {
				var $fc = current.$fc;
			}

			if ($(fancyboxItems).length > 0) {
				$(fancyboxItems).fancybox({
					preventCaptionOverlap: false,
					wheel: false,
					idleTime: false,
					infobar: true,
					caption: $.noop,
					afterLoad : function(instance, current) {
						current.$fc = $('<div class="fancybox-custom-caption">' + current.opts.$orig.data('caption') + '</div>').appendTo(current.$content);
						updatefc(instance, current);
					},
					onUpdate: function(instance, current) {
						updatefc(instance, current);	
					},
					mobile: {
						clickSlide: "close",
					}
				});
			}

			// Add class to media callouts
			$('.lightbox-video, .callout img').closest('.callout').addClass('mod-media')


			if ($('.lightbox-video').length > 0) {
				$('.lightbox-video').fancybox({
					idleTime: false,
					youtube : {
						autoplay: 1
					}
				});
			}
		},
		blogCallout: function() {
			// Calculate width of blog inline callout image and adjust callout accordingly
			$(window).on('load', function() {
				if($(window).width() >= 767) {
					$('.callout.mod-inline img').each(function(index, elem) {
						// Get the callout image width and add 20px for the padding around the callout
						var imgWidth = $(elem).width();
						$(elem).closest('.callout.mod-inline').css('width', imgWidth);
					});
				}
			});
		},
		blogFlexslider: function() {
			// Fleslider for callouts mainly on blogs
			(function() {
				var centerControls = function() {
					var imgHeight = $('.callout.mod-slider img').height();
					$('.flex-direction-nav').css('height', imgHeight);
				};
				$(window).resize(centerControls);
				$('.callout.mod-slider .sub-text').prepend('Image <span class=\"current-slide\"></span> of <span class=\"total-slides\"></span> - ');
				var $currentSlide = $('.current-slide');
				var $totalSlides = $('.total-slides');
				if($('.flexslider').length > 0) {
					$('.callout.mod-slider .flexslider').flexslider({
						slideshow: false,
						controlNav: false,
						start: function(slider){
							$(slider).find($currentSlide).html(slider.currentSlide+1);
							$(slider).find($totalSlides).html(slider.count);
							centerControls();
						},
						after: function(slider){
							$(slider).find($currentSlide).html(slider.currentSlide+1);
							$(slider).find($totalSlides).html(slider.count);
						}
					});
				}
			})();
		},
		responsiveVids: function() {
			function vidRatio() {
				fluidvids.init({
					selector: ['iframe', 'object'], // runs querySelectorAll()
					players: ['www.youtube.com', 'player.vimeo.com', 'www.facebook.com'] // players to support
				});
			}

			vidRatio();

			if ($('.lazyload-video').length > 0) {
				$('.lazyload-video').lazyload({
					load: vidRatio,
					trigger: 'click'
				});
			}
		}
	}; 

	siteController.init();
 });
