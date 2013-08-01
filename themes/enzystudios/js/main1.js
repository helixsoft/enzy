
$(document).ready(function() {
     $(window).load(function(){
        $('.doc-loader').fadeOut('slow');
     });
	//$('.header').height($(window).height());
	$('.first-section').height($(window).height());
    $('.gallery').code4netslideshow({
        'navigation' : [
            {
                'id' : 'gallery-nav',
                'type' : 'bullet'           //bullet/arrow
            }
        ],
        'slideInterval' : 5,
        'pauseInterval' : 10, 
        'type' : 'horizontal',
        'autoSlide' : true
    });
	
	$('.gallery_r').code4netslideshow({
        'navigation' : [
            {
                'id' : 'gallery-nav_r',
                'type' : 'arrow'           //bullet/arrow
            }
        ],
        'slideInterval' : 5,
        'pauseInterval' : 10, 
        'type' : 'horizontal',
        'autoSlide' : true
    });

	$('.navigation li a').hover(  
		function() {  
			$(this).stop().animate({'paddingLeft': '1.2em', 'paddingRight': '1.2em'}, 'fast');  
		},  
		function() {
			$(this).stop().animate({'paddingLeft': '0.5em', 'paddingRight': '0.5em'}, 'fast');  
		}
	); 	
	
	$(function() {	
		$('.roll').css('opacity','0');
		$('.roll').hover(function () {
				$(this).stop().animate({opacity: .7}, 'slow');
			},
			function () {
				$(this).stop().animate({opacity: 0}, 'slow');
			});
	});
	
	$(function() {
		if (window.PIE) {
			$('.rounded').each(function() {
				PIE.attach(this);
			});
		}
	});
	$(".summary ul li").live("click", function() { 
		
		$(".summary ul li").css("color","#AC1F39");
		
		if($(this).attr("id")=="all"){
			$(".pic-frame").fadeIn();
			$(this).css("color","#000");
		}
		if($(this).attr("id")=="s1"){
            $(".pic-frame").fadeOut();
            $(this).css("color","#000");
            $(".pic-frame").filter(function (index) {
                if($(this).attr("id") == "s1")
                {
                	$(this).fadeIn();
                }
            });

		}
		if($(this).attr("id")=="s2"){
			$(".pic-frame").fadeOut();
			$(this).css("color","#000");
            $(".pic-frame").filter(function (index) {
                if($(this).attr("id") == "s2")
                {
                	$(this).fadeIn();
                }
            });
		}
	});
	$(".summary ul li").live("click", function() { 
		
		$(".summary ul li").css("color","#AC1F39");
		
		if($(this).attr("id")=="all"){
			$(".pic-frame").fadeIn();
			$(this).css("color","#000");
		}
		if($(this).attr("id")=="s1"){
            $(".pic-frame").fadeOut();
            $(this).css("color","#000");
            $(".pic-frame").filter(function (index) {
                if($(this).attr("id") == "s1")
                {
                	$(this).fadeIn();
                }
            });
		}
		if($(this).attr("id")=="s2"){
			$(".pic-frame").fadeOut();
			$(this).css("color","#000");
            $(".pic-frame").filter(function (index) {
                if($(this).attr("id") == "s2")
                {
                	$(this).fadeIn();
                }
            });
		}
		if($(this).attr("id")=="a"){
			$(".pict").fadeIn();
			$(this).css("color","#000");
		}
		if($(this).attr("id")=="b"){
            $(".pict").fadeOut();
            $(this).css("color","#000");
            $(".pict").filter(function (index) {
                if($(this).attr("id") == "b")
                {
                	$(this).fadeIn();
                }
            });

		}
		if($(this).attr("id")=="af"){
			$(".pict").fadeOut();
			$(this).css("color","#000");
            $(".pict").filter(function (index) {
                if($(this).attr("id") == "af")
                {
                	$(this).fadeIn();
                }
            });
		}
	});
	var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();
		
		$('#calendar').fullCalendar({
			theme: true,
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			editable: false,
			events: [
				{
					title: 'All Day Event',
					start: new Date(y, m, 1)
				},
				{
					title: 'Long Event',
					start: new Date(y, m, d-5),
					end: new Date(y, m, d-2)
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: new Date(y, m, d-3, 16, 0),
					allDay: false
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: new Date(y, m, d+4, 16, 0),
					allDay: false
				},
				{
					title: 'Meeting',
					start: new Date(y, m, d, 10, 30),
					allDay: false
				},
				{
					title: 'Lunch',
					start: new Date(y, m, d, 12, 0),
					end: new Date(y, m, d, 14, 0),
					allDay: false
				},
				{
					title: 'Birthday Party',
					start: new Date(y, m, d+1, 19, 0),
					end: new Date(y, m, d+1, 22, 30),
					allDay: false
				},
				{
					title: 'Click for Google',
					start: new Date(y, m, 28),
					end: new Date(y, m, 29),
					url: 'http://google.com/'
				}
			]
		});
		$("img").mouseover(function(){

     			if($(this).attr("id")=="x1"){
     				//alert("hah");
     				$(this).attr("src","images/c_logo/1.png");
				}
				if($(this).attr("id")=="x2"){
					//alert("hah");
     				$(this).attr("src","images/c_logo/2.png");
				}
				if($(this).attr("id")=="x3"){
     				$(this).attr("src","images/c_logo/3.png");
				}
				if($(this).attr("id")=="x4"){
     				$(this).attr("src","images/c_logo/4.png");
				}
				if($(this).attr("id")=="x5"){
     				$(this).attr("src","images/c_logo/5.png");
				}
				if($(this).attr("id")=="x6"){
     				$(this).attr("src","images/c_logo/6.png");
				}
				if($(this).attr("id")=="x7"){
     				$(this).attr("src","images/c_logo/7.png");
				}
    		}).mouseout(function(){
      			if($(this).attr("id")=="x1"){
     				$(this).attr("src","images/c_logo/whita/1.png");
				}
				if($(this).attr("id")=="x2"){
     				$(this).attr("src","images/c_logo/whita/2.png");
				}
				if($(this).attr("id")=="x3"){
     				$(this).attr("src","images/c_logo/whita/3.png");
				}
				if($(this).attr("id")=="x4"){
     				$(this).attr("src","images/c_logo/whita/4.png");
				}
				if($(this).attr("id")=="x5"){
     				$(this).attr("src","images/c_logo/whita/5.png");
				}
				if($(this).attr("id")=="x6"){
     				$(this).attr("src","images/c_logo/whita/6.png");
				}
				if($(this).attr("id")=="x7"){
     				$(this).attr("src","images/c_logo/whita/7.png");
				}
   		});
});