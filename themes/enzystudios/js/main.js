$(document).ready(function() {
     $(window).load(function(){
        $('.doc-loader').fadeOut('slow');
     });
     $('.pict').mouseover(function(){
	    $(this).children("a").children("img").animate({
	    opacity: 1
	  }, 1000);
     });
      $('.pict').mouseleave(function(){
	    $(this).children("a").children("img").animate({
	    opacity: 0.2
	  }, 1000);
     });
     
       $("#sta").live("click", function(event) { 
       	event.preventDefault();

		$("#sliderA").show("slow");
		$("#showcaseA").show("slow");
		$("#showcaseB").hide();
		$("#sliderB").hide();
		$("#showcaseC").hide();
		$("#sliderC").hide();
		$("#showcaseD").hide();
		$("#sliderD").hide();	
	
	});
       $("#stb").live("click", function(event) { 
       		event.preventDefault();
		$("#sliderA").hide();
		$("#showcaseA").hide();
		$("#showcaseB").show("slow");
		$("#sliderB").show("slow");
		$("#showcaseC").hide();
		$("#sliderC").hide();
		$("#showcaseD").hide();
		$("#sliderD").hide();	
	
	});
       $("#lr").live("click", function(event) { 
       		event.preventDefault();
		$("#sliderA").hide();
		$("#showcaseA").hide();
		$("#showcaseB").hide();
		$("#sliderB").hide();
		$("#showcaseC").show("slow");
		$("#sliderC").show("slow");
		$("#showcaseD").hide();
		$("#sliderD").hide();	
	
	
	});
       $("#lg").live("click", function(event) { 
       		event.preventDefault();
		$("#sliderA").hide();
		$("#showcaseA").hide();
		$("#showcaseB").hide();
		$("#sliderB").hide();
		$("#showcaseC").hide();
		$("#sliderC").hide();
		$("#showcaseD").show("slow");
		$("#sliderD").show("slow");	
	
	
	});
       $("#sta1").live("click", function(event) { 
       		event.preventDefault();
		$("#sliderA1").show("slow");
		$("#showcaseA1").show("slow");
		$("#showcaseB1").hide();
		$("#sliderB1").hide();
		$("#showcaseC1").hide();
		$("#sliderC1").hide();
		$("#showcaseD1").hide();
		$("#sliderD1").hide();	
	
	});
       $("#stb1").live("click", function(event) { 
       		event.preventDefault();
		$("#sliderA1").hide();
		$("#showcaseA1").hide();
		$("#showcaseB1").show("slow");
		$("#sliderB1").show("slow");
		$("#showcaseC1").hide();
		$("#sliderC1").hide();
		$("#showcaseD1").hide();
		$("#sliderD1").hide();	
	
	});
       $("#lr1").live("click", function(event) { 
       		event.preventDefault();
		$("#sliderA1").hide();
		$("#showcaseA1").hide();
		$("#showcaseB1").hide();
		$("#sliderB1").hide();
		$("#showcaseC1").show("slow");
		$("#sliderC1").show("slow");
		$("#showcaseD1").hide();
		$("#sliderD1").hide();	
	
	
	});
       $("#lg1").live("click", function(event) { 
       		event.preventDefault();
		$("#sliderA1").hide();
		$("#showcaseA1").hide();
		$("#showcaseB1").hide();
		$("#sliderB1").hide();
		$("#showcaseC1").hide();
		$("#sliderC1").hide();
		$("#showcaseD1").show("slow");
		$("#sliderD1").show("slow");	
	
	
	});
        $("#hm").live("click", function(event) { 
        		event.preventDefault();
		$("#slides").fadeIn("slow");
		$("#aboutnew").hide();
		$("#rpnew").hide();	
	
	});
      $("#ab").live("click", function(event) {
      	event.preventDefault(); 
		$("#slides").hide();
		$("#aboutnew").show("slow");
		$("#rpnew").hide();	
	
	});
       
      $("#rp").live("click", function(event) { 
      		event.preventDefault();
		$("#slides").hide();
		$("#aboutnew").hide();
		$("#rpnew").show("slow");	
	
	});
      $("#tr").live("click", function(event) { 
      		event.preventDefault();
		$("#text-recording").fadeIn("slow");
		$("#text-mixing").hide();
		$("#text-sampling").hide();
		$("#text-mastering").hide();	
	
	});
       $("#tm").live("click", function(event) { 
       		event.preventDefault();
		$("#text-recording").hide();
		$("#text-mixing").fadeIn("slow");
		$("#text-sampling").hide();
		$("#text-mastering").hide();	
	
	});
        $("#ts").live("click", function(event) { 
        		event.preventDefault();
		$("#text-recording").hide();
		$("#text-mixing").hide();
		$("#text-sampling").fadeIn("slow");
		$("#text-mastering").hide();	
	
	});
         $("#omm").live("click", function(event) { 
         		event.preventDefault();
		$("#text-recording").hide();
		$("#text-mixing").hide();
		$("#text-sampling").hide();
		$("#text-mastering").fadeIn("slow");	
	
	});
   	//$('.header').height($(window).height());
	$(window).scroll(function(){
               
                    var h = $(window).height();
                    var y = $(window).scrollTop();
                    if ( y >= h ){
                        $(".navigation").fadeIn("slow");
                    } else {
                        $(".navigation").fadeOut('slow');
                    }
          });
        $('.fancybox-media')
						.attr('rel', 'media-gallery')
						.fancybox({
							openEffect : 'none',
							closeEffect : 'none',
							prevEffect : 'none',
							nextEffect : 'none',
		
							arrows : false,
							helpers : {
								media : {},
								buttons : {}
							}
						});
	$('#ca-containerA').contentcarousel();
	$('#ca-containerB').contentcarousel();
	$('#ca-containerC').contentcarousel();
	$('#ca-containerD').contentcarousel();
	$('#ca-containerA1').contentcarousel();
	$('#ca-containerB1').contentcarousel();
	$('#ca-containerC1').contentcarousel();
	$('#ca-containerD1').contentcarousel();
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
		
		$(".summary ul li").css("color","#0084ff");
		
		if($(this).attr("id")=="all"){
			$(".pic-frame").fadeIn();
			$(this).css("color","#000");
			$("#studioimg").attr("src","images/layout/all.png");
		}
		if($(this).attr("id")=="s1"){
            $(".pic-frame").fadeOut();
            $(this).css("color","#000");
            $(".pic-frame").filter(function (index) {
                if($(this).attr("id") == "s1")
                {
                	$(this).fadeIn();
                	$("#studioimg").attr("src","images/layout/a.png");
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
                	$("#studioimg").attr("src","images/layout/b.png");
                }
            });
		}
		if($(this).attr("id")=="s3"){
			$(".pic-frame").fadeOut();
			$(this).css("color","#000");
            $(".pic-frame").filter(function (index) {
                if($(this).attr("id") == "s3")
                {
                	$(this).fadeIn();
                	$("#studioimg").attr("src","images/layout/b.png");
                }
            });
		}
		if($(this).attr("id")=="s4"){
			$(".pic-frame").fadeOut();
			$(this).css("color","#000");
            $(".pic-frame").filter(function (index) {
                if($(this).attr("id") == "s4")
                {
                	$(this).fadeIn();
                	$("#studioimg").attr("src","images/layout/b.png");
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
    		$(".services-list .col img").live("click", function() { 
    			var id=this;
    			$(".services-text").fadeOut(1,function(){
	    			if($(id).attr("id")=="recording")
	    			{
	    				$("#text-recording").fadeIn(1);
	    			}
	    			if($(id).attr("id")=="mixing")
	    			{
	    				$("#text-mixing").fadeIn(1);
	    			}
	    			if($(id).attr("id")=="sampling")
	    			{
	    				$("#text-sampling").fadeIn(1);
	    			}
	    			if($(id).attr("id")=="mastering")
	    			{
	    				$("#text-mastering").fadeIn(1);
	    			}
    			});
    		});

    		$(function() {
				var $menu				= $('#ei_menu > ul'),
					$menuItems			= $menu.children('li'),
					$menuItemsImgWrapper= $menuItems.children('a'),
					$menuItemsPreview	= $menuItemsImgWrapper.children('.ei_preview'),
					totalMenuItems		= $menuItems.length,
				
					ExpandingMenu 	= (function(){
						/*
							@current
							set it to the index of the element you want to be opened by default,
							or -1 if you want the menu to be closed initially
						 */
						var current				= 0,
						/*
							@anim
							if we want the default opened item to animate initialy set this to true
						 */
						anim				= true,
						/*
							checks if the current value is valid -
							between 0 and the number of items
						 */
						validCurrent		= function() {
							return (current >= 0 && current < totalMenuItems);
						},
						init				= function() {
								/* show default item if current is set to a valid index */
							if(validCurrent())
								configureMenu();

							initEventsHandler();
						},
						configureMenu		= function() {
								/* get the item for the current */
							var $item	= $menuItems.eq(current);
								/* if anim is true slide out the item */
							if(anim)
								slideOutItem($item, true, 900, 'easeInQuint');
							else{
									/* if not just show it */
								$item.css({width : '593px'})
								.find('.ei_image')
								.css({left:'0px', opacity:1});

									/* decrease the opacity of the others */
									$menuItems.not($item)
											  .children('.ei_preview')
											  .css({opacity:0.2});
							}
						},
						initEventsHandler	= function() {
								/*
								when we click an item the following can happen:
								1) The item is already opened - close it!
								2) The item is closed - open it! (if another one is opened, close it!)
								*/
							$menuItemsImgWrapper.bind('click.ExpandingMenu', function(e) {
								var $this 	= $(this).parent(),
								idx		= $this.index();

								if(current === idx) {
									//slideOutItem($menuItems.eq(current), false, 1500, 'easeOutQuint', true);
									//current = -1;
								}
								else{
									if(validCurrent() && current !== idx)
											slideOutItem($menuItems.eq(current), false, 250, 'jswing');

									current	= idx;
										slideOutItem($this, true, 250, 'jswing');
								}
								return false;
							});
						},
							/* if you want to trigger the action to open a specific item */
							openItem			= function(idx) {
								$menuItemsImgWrapper.eq(idx).click();
							},
							/*
							opens or closes an item
							note that "mLeave" is just true when all the items close,
							in which case we want that all of them get opacity 1 again.
							"dir" tells us if we are opening or closing an item (true | false)
							*/
						slideOutItem		= function($item, dir, speed, easing, mLeave) {
							var $ei_image	= $item.find('.ei_image'),

							itemParam	= (dir) ? {width : '593px'} : {width : '75px'},
							imageParam	= (dir) ? {left : '0px'} : {left : '75px'};

								/*
								if opening, we animate the opacity of all the elements to 0.1.
								this is to give focus on the opened item..
								*/
							if(dir)
							/*
									alternative:
									$menuItemsPreview.not($menuItemsPreview.eq(current))
													 .stop()
													 .animate({opacity:0.1}, 500);
							 */
								$menuItemsPreview.stop()
							.animate({opacity:0.1}, 1000);
							else if(mLeave)
								$menuItemsPreview.stop()
							.animate({opacity:1}, 1500);

								/* the <li> expands or collapses */
							$item.stop().animate(itemParam, speed, easing);
								/* the image (color) slides in or out */
							$ei_image.stop().animate(imageParam, speed, easing, function() {
									/*
									if opening, we animate the opacity to 1,
									otherwise we reset it.
									*/
								if(dir)
									$ei_image.animate({opacity:1}, 2000);
								else
									$ei_image.css('opacity', 0.2);
							});
						};

						return {
							init 		: init,
							openItem	: openItem
						};
					})();
					
				/*
				call the init method of ExpandingMenu
				*/
				ExpandingMenu.init();
			
				/*
				if later on you want to open / close a specific item you could do it like so:
				ExpandingMenu.openItem(3); // toggles item 3 (zero-based indexing)
				*/
			});



$(function() {
				/**
				* build the carousel for the Albums
				*/
				$('#mp_albums').jcarousel({
					scroll : 3
				}).children('li')
				  .bind('click',function(){
					//when clicking on an album, display its info, and hide the current one
					var $this = $(this);
					$('#mp_content_wrapper').find('.mp_content:visible')
											.hide();
											
												$('#mp_content_wrapper')
												.find('.mp_content:nth-child('+ parseInt($this.index()+1) +')')
											    .fadeIn(1000);
											
			});

				/****  The Player  ****/
				// Local copy of jQuery selectors, for performance.
				var jpPlayTime = $("#jplayer_play_time");
				var jpTotalTime = $("#jplayer_total_time");
				var $list 		= $("#jplayer_playlist ul");

				/**
				* Innitialize the Player 
				* (see jPlayer documentation for other options)
				*/
				$("#jquery_jplayer").jPlayer({
					oggSupport	: true,
					preload		:"auto"
				})
				.jPlayer("onProgressChange", 
					function(loadPercent, playedPercentRelative, playedPercentAbsolute, playedTime, totalTime) {
					jpPlayTime.text($.jPlayer.convertTime(playedTime));
					jpTotalTime.text($.jPlayer.convertTime(totalTime));
				})
				.jPlayer("onSoundComplete", function() {
					playListNext();
				});

				/**
				* click previous button, plays previous song
				*/
				$("#jplayer_previous").bind('click', function(){
					playListPrev();
					$(this).blur();
					return false;
				});

				/**
				* click next button, plays next song
				*/
				$("#jplayer_next").bind('click', function() {
					playListNext();
					$(this).blur();
					return false;
				});

				/**
				* plays song in position i of the list of songs (playlist)
				*/
				function playSong(i){
					var $next_song 		= $list.find('li:nth-child('+ i +')');
					var mp3				= $next_song.find('.mp_mp3').html();
					var ogg				= $next_song.find('.mp_ogg').html();
					$list.find('.jplayer_playlist_current').removeClass("jplayer_playlist_current");
					$next_song.find('a').addClass("jplayer_playlist_current");
					$("#jquery_jplayer").jPlayer("setFile", mp3, ogg).jPlayer("play");
				}

				/**
				* plays the next song in the playlist
				*/
				function playListNext() {
					var $list_nmb_elems = $list.children().length;
					var $curr 			= $list.find('.jplayer_playlist_current');
					var idx				= $curr.parent().index();
					var index 			= (idx < $list_nmb_elems-1) ? idx+1 : 0;
					playSong(index+1);
				}

				/**
				* plays the previous song in the playlist
				*/
				function playListPrev() {
					var $list_nmb_elems = $list.children().length;
					var $curr 			= $list.find('.jplayer_playlist_current');
					var idx				= $curr.parent().index();
					var index 			= (idx-1 >= 0) ? idx-1 : $list_nmb_elems-1;
					playSong(index+1);
				}
				
				/**
				* User clicks the play icon on one of the songs listed for an Album.
				* Adds it to the Playlist, and plays it
				*/
				function addFirst(song_idx,name,mp3,ogg) {
					$list.empty();
					/**
					* each song element in the playlist has:
					* - span for the close / remove action
					* - the mp3 path
					* - the ogg path
					*/
					var song_html = "<a href='#' class='jplayer_playlist_current' tabindex='1'>" + name + "</a>";
					song_html 	 += "<span></span>";
					song_html 	 += "<div class='mp_mp3' style='display:none;'>"+mp3+"</div>";
					song_html 	 += "<div class='mp_ogg' style='display:none;'>"+ogg+"</div>";
					var $listItem = $("<li/>",{
						id			: song_idx,	
						className	: 'jplayer_playlist_current',
						html 		: song_html
					});
					$list.append($listItem);
					//event to play the song when User clicks on it
					$listItem.find('a').bind('click',clickSong);
					//event to remove the song from the playlist when User clicks the remove button
					$listItem.find('span').bind('click',removeSong);
					//start playing it
					$("#jquery_jplayer").jPlayer("setFile", mp3, ogg).jPlayer("play");
					jpTotalTime.show();
					jpPlayTime.show();
				}
				
				/**
				* adds a song to the playlist, if not there already.
				* if it is the only one, start playing it
				*/
				function addToPlayList(song_idx,name,mp3,ogg) {
					var $list_nmb_elems = $list.children().length;
					//if already in the list return
					if($list.find('#'+song_idx).length)
						return;
					//class for the current song being played
					var c = '';
					if($list_nmb_elems == 0)
						c = 'jplayer_playlist_current';
					var song_html = "<a href='#' class="+c+" tabindex='1'>" + name + "</a>";
					song_html 	 += "<span></span>";
					song_html 	 += "<div class='mp_mp3' style='display:none;'>"+mp3+"</div>";
					song_html 	 += "<div class='mp_ogg' style='display:none;'>"+ogg+"</div>";
					var $listItem = $("<li/>",{
						id			: song_idx,	
						html 		: song_html
					});
					$list.append($listItem);
					//if its the only song play it
					if($list_nmb_elems == 0){
						$("#jquery_jplayer").jPlayer("setFile", mp3, ogg).jPlayer("play");
						jpTotalTime.show();
						jpPlayTime.show();
					}
					$listItem.find('a').bind('click',clickSong);
					$listItem.find('span').bind('click',removeSong);
				}
				
				/**
				* removes a song from the playlist.
				* if the song was the current one, and there are more songs 
				* in the playlist, then plays the next one.
				* if there are no more, stops the player, and removes the status bar
				* otherwise keeps playing whatever song was being played
				*/
				function removeSong() {
					var $this 	= $(this); 
					var current = $this.parent().find('a.jplayer_playlist_current').length;
					$this.parent().remove();
					var $list_nmb_elems = $list.children().length;
					if($list_nmb_elems > 0 && current)
						playListNext();
					else if($list_nmb_elems == 0){
						$("#jquery_jplayer").jPlayer("clearFile");
						jpTotalTime.hide();
						jpPlayTime.hide();
					}	
					return false;
				}
				
				/**
				* User clicks on a song in the playlist. Plays it
				*/
				function clickSong() {
						var index = $(this).parent().index();
						playSong(index+1);
						return false;
				}
				
				/**
				* The next are the events for clicking on both "play" and "add to playlist" icons
				*/
				$('#mp_content_wrapper').find('.mp_play').bind('click',function(){
					var $this 		= $(this);
					var $paths		= $this.parent().siblings('.mp_song_info');
					var title   	= $paths.find('.mp_song_title').html();
					var mp3			= $paths.find('.mp_mp3').html();
					var ogg			= $paths.find('.mp_ogg').html();
					var album_id 	= $this.closest('.mp_content').attr('id');
					var song_index	= $this.parent().parent().index();
					var song_idx	= album_id + '_' + song_index;
					//add to playlist and play the song
					addFirst(song_idx,title,mp3,ogg);
				});
				$('#mp_content_wrapper').find('.mp_addpl').bind('click',function(){
					var $this 		= $(this);
					var $paths		= $this.parent().siblings('.mp_song_info');
					var title   	= $paths.find('.mp_song_title').html();
					var mp3			= $paths.find('.mp_mp3').html();
					var ogg			= $paths.find('.mp_ogg').html();
					var album_id 	= $this.closest('.mp_content').attr('id');
					var song_index	= $this.parent().parent().index();
					var song_idx	= album_id + '_' + song_index;
					//add to playlist and play the song if none is there
					addToPlayList(song_idx,title,mp3,ogg);
				});
				
				/**
				* we want to show on the album image, the play button for playing the whole album
				*/
				$('#mp_content_wrapper').find('.mp_content').bind('mouseenter',function(){
					var $this 		= $(this);
					$this.find('.mp_playall').show();
					$this.find('.mp_downall').show();
				}).bind('mouseleave',function(){
					var $this 		= $(this);
					$this.find('.mp_playall').hide();
					$this.find('.mp_downall').hide();
				});
				
				

				
				/**
				* to play the whole album, we play the first song and add all the others to the playlist.
				* playing the first one, guarantees us that the playlist is set to empty before
				*/
				$('#mp_content_wrapper').find('.mp_playall').bind('click',function(event){
					var $this 		= $(this);
					var $album		= $this.parent();
					event.preventDefault();
					$album.find('.mp_play:first').trigger('click');
					$album.find('.mp_addpl').trigger('click');
				})
				
				/**
				* playlist songs can be reordered
				*/
				$list.sortable();
				$list.disableSelection();
				
			});
			
});