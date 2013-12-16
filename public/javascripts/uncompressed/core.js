/* -------------------- Check Browser --------------------- */
function browser() {
	
	var isOpera = !!(window.opera && window.opera.version);  // Opera 8.0+
	var isFirefox = testCSS('MozBoxSizing');                 // FF 0.8+
	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
	    // At least Safari 3+: "[object HTMLElementConstructor]"
	var isChrome = !isSafari && testCSS('WebkitTransform');  // Chrome 1+
	//var isIE = /*@cc_on!@*/false || testCSS('msTransform');  // At least IE6

	function testCSS(prop) {
	    return prop in document.documentElement.style;
	}
	
	if (isOpera) {
		
		return false;
		
	}else if (isSafari || isChrome) {
		
		return true;
		
	} else {
		
		return false;
		
	}
	
}

jQuery(document).ready(function($){
	
	/* ---------- Remove elements in IE8 ---------- */
	if(jQuery.browser.version.substring(0, 2) == "8.") {
		 
		$('.hideInIE8').remove();
		
	}
	
	/* ---------- Disable moving to top ---------- */
	$('a[href="#"][data-top!=true]').click(function(e){
		e.preventDefault();
	});
	
	/* ---------- Notifications ---------- */
	$('.noty').click(function(e){
		e.preventDefault();
		var options = $.parseJSON($(this).attr('data-noty-options'));
		noty(options);
	});


	/* ---------- Tabs ---------- */
	$('#myTab a:first').tab('show');
	$('#myTab a').click(function (e) {
	  e.preventDefault();
	  $(this).tab('show');
	});

	/* ---------- Tooltip ---------- */
	$('[rel="tooltip"],[data-rel="tooltip"]').tooltip({"placement":"bottom",delay: { show: 400, hide: 200 }});

	/* ---------- Popover ---------- */
	$('[rel="popover"],[data-rel="popover"],[data-toggle="popover"]').popover();

	/* ---------- Fullscreen ---------- */
	$('#toggle-fullscreen').button().click(function () {
		var button = $(this), root = document.documentElement;
		if (!button.hasClass('active')) {
			$('#thumbnails').addClass('modal-fullscreen');
			if (root.webkitRequestFullScreen) {
				root.webkitRequestFullScreen(
					window.Element.ALLOW_KEYBOARD_INPUT
				);
			} else if (root.mozRequestFullScreen) {
				root.mozRequestFullScreen();
			}
		} else {
			$('#thumbnails').removeClass('modal-fullscreen');
			(document.webkitCancelFullScreen ||
				document.mozCancelFullScreen ||
				$.noop).apply(document);
		}
	});
	
	$('.btn-close').click(function(e){
		e.preventDefault();
		$(this).parent().parent().parent().fadeOut();
	});
	$('.btn-minimize').click(function(e){
		e.preventDefault();
		var $target = $(this).parent().parent().next('.box-content');
		if($target.is(':visible')) $('i',$(this)).removeClass('fa fa-chevron-up').addClass('fa fa-chevron-down');
		else 					   $('i',$(this)).removeClass('fa fa-chevron-down').addClass('fa fa-chevron-up');
		$target.slideToggle('slow', function() {
		    widthFunctions();
		});
		
	});
	$('.btn-setting').click(function(e){
		e.preventDefault();
		$('#myModal').modal('show');
	});

});


/* ---------- Delete Comment ---------- */
jQuery(document).ready(function($){
    $('.discussions').find('.delete').click(function(){
		
		$(this).parent().fadeTo("slow", 0.00, function(){ //fade
			$(this).slideUp("slow", function() { //slide up
		    	$(this).remove(); //then remove from the DOM
		    });
		});
	
	});
});

/* ---------- IE8 list style hack (:nth-child(odd)) ---------- */
jQuery(document).ready(function($){
	
	if($('.messagesList').width()) {
		
		if(jQuery.browser.version.substring(0, 2) == "8.") {

			$('ul.messagesList li:nth-child(2n+1)').addClass('odd');
			
		}
		
	}
	
});


/* ---------- Check Retina ---------- */
function retina(){
	
	retinaMode = (window.devicePixelRatio > 1);
	
	return retinaMode;
	
}

jQuery(document).ready(function($){
	
	/* ---------- Add class .active to current link  ---------- */
	$('ul.main-menu li a').each(function(){
		
			if($($(this))[0].href==String(window.location)) {
				
				$(this).parent().addClass('active');
				
			}
	
	});
	
	$('ul.main-menu li ul li a').each(function(){
		
			if($($(this))[0].href==String(window.location)) {
				
				$(this).parent().addClass('active');
				$(this).parent().parent().show();
				
			}
	
	});

	/* ---------- Submenu  ---------- */

	$('.dropmenu').click(function(e){

		e.preventDefault();

		$(this).parent().find('ul').slideToggle();

	});

});


/* ---------- Main Menu Open/Close ---------- */
jQuery(document).ready(function($){
	
	var startFunctions = true;
	
	$('#main-menu-toggle').click(function(){
		
		if($(this).hasClass('open')){
			
			$(this).removeClass('open').addClass('close');
			
			var span = $('#content').attr('class');
			var spanNum = parseInt(span.replace( /^\D+/g, ''));
			var newSpanNum = spanNum + 2;
			var newSpan = 'span' + newSpanNum;
			
			$('#content').addClass('full');
			$('.navbar-brand').addClass('noBg');
			$('#sidebar-left').hide();
			
		} else {
			
			$(this).removeClass('close').addClass('open');
			
			var span = $('#content').attr('class');
			var spanNum = parseInt(span.replace( /^\D+/g, ''));
			var newSpanNum = spanNum - 2;
			var newSpan = 'span' + newSpanNum;
	
			$('#content').removeClass('full');
			$('.navbar-brand').removeClass('noBg');
			$('#sidebar-left').show();
			
		}				
		
	});
	
});	


jQuery(document).ready(function($){

	if($(".boxchart").length) {

		if (retina()) {

			$(".boxchart").sparkline('html', {
			    type: 'bar',
			    height: '60', // Double pixel number for retina display
				barWidth: '8', // Double pixel number for retina display
				barSpacing: '2', // Double pixel number for retina display
			    barColor: '#ffffff',
			    negBarColor: '#eeeeee'}
			);
			
			if (jQuery.browser.mozilla) {
				$(".boxchart").css('MozTransform','scale(0.5,0.5)').css('height','30px;');
				$(".boxchart").css('height','30px;').css('margin','-15px 15px -15px -15px');
			} else {
				$(".boxchart").css('zoom',0.5);
			}

		} else {

			$(".boxchart").sparkline('html', {
			    type: 'bar',
			    height: '30',
				barWidth: '4',
				barSpacing: '1',
			    barColor: '#ffffff',
			    negBarColor: '#eeeeee'}
			);

		}		

	}
	
	if($('.chart-stat').length) {
	
		if (retina()) {

			$(".chart-stat > .chart").each(function(){

				var chartColor = $(this).css('color');	

				$(this).sparkline('html', {				
				    width: '180%',//Width of the chart - Defaults to 'auto' - May be any valid css width - 1.5em, 20px, etc (using a number without a unit specifier won't do what you want) - This option does nothing for bar and tristate chars (see barWidth)
					height: 80,//Height of the chart - Defaults to 'auto' (line height of the containing tag)
					lineColor: chartColor,//Used by line and discrete charts to specify the colour of the line drawn as a CSS values string
					fillColor: false,//Specify the colour used to fill the area under the graph as a CSS value. Set to false to disable fill
					spotColor: false,//The CSS colour of the final value marker. Set to false or an empty string to hide it
					maxSpotColor: false,//The CSS colour of the marker displayed for the maximum value. Set to false or an empty string to hide it
					minSpotColor: false,//The CSS colour of the marker displayed for the mimum value. Set to false or an empty string to hide it
					spotRadius: 2,//Radius of all spot markers, In pixels (default: 1.5) - Integer
					lineWidth: 2//In pixels (default: 1) - Integer
				});
				
				if (jQuery.browser.mozilla) {
					$(this).css('MozTransform','scale(0.5,0.5)');
					$(this).css('height','40px;').css('margin','-20px 0px -20px -25%');
				} else {
					$(this).css('zoom',0.5);
				}

			});

		} else {

			$(".chart-stat > .chart").each(function(){

				var chartColor = $(this).css('color');

				$(this).sparkline('html', {				
				    width: '90%',//Width of the chart - Defaults to 'auto' - May be any valid css width - 1.5em, 20px, etc (using a number without a unit specifier won't do what you want) - This option does nothing for bar and tristate chars (see barWidth)
					height: 40,//Height of the chart - Defaults to 'auto' (line height of the containing tag)
					lineColor: chartColor,//Used by line and discrete charts to specify the colour of the line drawn as a CSS values string
					fillColor: false,//Specify the colour used to fill the area under the graph as a CSS value. Set to false to disable fill
					spotColor: false,//The CSS colour of the final value marker. Set to false or an empty string to hide it
					maxSpotColor: false,//The CSS colour of the marker displayed for the maximum value. Set to false or an empty string to hide it
					minSpotColor: false,//The CSS colour of the marker displayed for the mimum value. Set to false or an empty string to hide it
					spotRadius: 2,//Radius of all spot markers, In pixels (default: 1.5) - Integer
					lineWidth: 2//In pixels (default: 1) - Integer
				});

			});

		}
	
	}
});

jQuery(document).ready(function($){

	/* ---------- ToDo List Action Buttons ---------- */
	if($(".todo-actions").length) {
		$(".todo-actions > a").click(function(){

			if ($(this).find('i').attr('class') == 'fa fa-square-o') {
				$(this).find('i').removeClass('fa fa-square-o').addClass('fa fa-check-square-o');
				$(this).parent().parent().find('span').css({ opacity: 0.25 });
				$(this).parent().parent().find('.desc').css('text-decoration', 'line-through');

			} else {
				$(this).find('i').removeClass('fa fa-check-square-o').addClass('fa fa-square-o');
				$(this).parent().parent().find('span').css({ opacity: 1 });
				$(this).parent().parent().find('.desc').css('text-decoration', 'none');
			}

			return false;
		});

		/* ---------- ToDo List Active Sortable List ---------- */

		$(function() {
		    $(".todo-list").sortable();
		    $(".todo-list").disableSelection();
		});
	}

});

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function rgbToRgba(rgb, alpha) {
	
	if (jQuery.browser.version <= 8.0) {
		
		rgb = hexToRgb(rgb);
		
		rgba = 'rgba('+ rgb.r +','+ rgb.g +','+ rgb.b +','+ alpha +')';
		
		
	} else {
		
		rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

		rgba = 'rgba('+ rgb[1] +','+ rgb[2] +','+ rgb[3] +','+ alpha +')';
		
	}
	
	return rgba;
	
}

$(document).ready(function(){
				
	widthFunctions();
		
});
           
/* ---------- Page width functions ---------- */

$(window).bind("resize", widthFunctions);

function widthFunctions(e) {
		
	if($('.timeline')) {
		
		$('.timeslot').each(function(){
			
			var timeslotHeight = $(this).find('.task').outerHeight();
			
			$(this).css('height',timeslotHeight);
			
		});
		
	}
		
	var sidebarLeftHeight = $('#sidebar-left').outerHeight();
	var contentHeight = $('#content').height();
	var contentHeightOuter = $('#content').outerHeight();
	
    var winHeight = $(window).height();
    var winWidth = $(window).width();

	if (winWidth > 767) {
		
		if (sidebarLeftHeight > contentHeight) {			
			
			$('#content').css("min-height",sidebarLeftHeight);
			
		} else {
			
			$('#content').css("min-height","auto");
			
		}
				
		$('#white-area').css('height',contentHeightOuter);

	} else {
		
		$('#white-area').css('height','auto');
		
	}
	 
	
	if (winWidth < 768) {
		
		if($('.chat-full')) {

			$('.chat-full').each(function(){

				$(this).addClass('alt');

			});

		}
		
	} else {
		
		if($('.chat-full')) {

			$('.chat-full').each(function(){

				$(this).removeClass('alt');

			});

		}
		
	}
   
}