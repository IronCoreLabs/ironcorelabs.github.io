/*  

   _____ _       _                 _  _____ 
  / ___/| (•)   | |               | |/ ___/  v 2.3
 | (___ | |_  __| | ___ ____      | | (___  
  \___ \| | |/ _` |/ _ / __/  _   | |\___ \ 
  ____) | | | (_| |  __\__ \ | |__| |____) |
 /_____/|_|_|\__,_|\___/___/  \____//_____/ 
                                            
                                            
This script is necessary for proper work of your Slides Project.
It requires plugins.js and jquery-2.2.4 to run this script.

http://designmodo.com/slides/

*/

window.inAction = 1;
window.allowSlide = 1;
window.blockScroll = 1;
window.direction = "";
window.effectOffset = 0; //new
window.slideSpeed = 1000;
window.cleanupDelay = 1450;
window.effectSpeed = 800;
window.horizontalMode = 0;
window.sidebarShown = 0;
window.loadingProgress = 0;
window.customScroll = 1;
window.scrollSpeed = 700;
window.preload = 1;
window.setHashLink = 1;
window.hideSidebarOnBodyClick = 1;

var $html = $('html');

//Test Device
window.isMobile = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { window.isMobile = true; }

//Detect Mobile
if(window.isMobile){$html.addClass('mobile');}

//Detect Browser
window.isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
window.isSafari = /^((?!chrome).)*safari/i.test(navigator.userAgent);
window.isChrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase()); 
window.isChromeiOS = navigator.userAgent.match('CriOS'); 
window.isMSIE = navigator.userAgent.match('MSIE');
window.isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
window.isiPad = navigator.userAgent.match(/iPad/i) !== null;

//Detect OS
window.isWindows = navigator.platform.toUpperCase().indexOf('WIN')!==-1;
window.isOSX = navigator.platform.toUpperCase().indexOf('MAC')!==-1;
window.isLinux = navigator.platform.toUpperCase().indexOf('LINUX')!==-1;

//Prepare for CSS Fixes
if (window.isSafari){$html.addClass('safari');}
if (window.isFirefox){$html.addClass('firefox');}
if (window.isChrome){$html.addClass('chrome');}
if (window.isMSIE){$html.addClass('msie');}
if (window.isAndroid){$html.addClass('android');}
if (window.isWindows){$html.addClass('windows');}
if (window.isOSX){$html.addClass('osx');}
if (window.isLinux){$html.addClass('linux');}

//Retina
window.isRetina = ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1.3));

if (window.isRetina){$html.addClass('retina');}

//On DOM ready
$(document).ready(function() { "use strict";
  var $body = $('body'); 
  
  //add window a trigger
  setTimeout(function(){
    $(window).trigger('ready');
  },1);
  
  //redraw
  $body.hide().show(0);
  
  //Fix for android
  if( window.isChromeiOS || $body.hasClass('simplifiedAndroid') ) {
    $body.addClass('simplifiedMobile');
  }
  
  $html.addClass('page-ready');

  //Set speed
  if ($body.hasClass('fast')){
    //fast 
    window.slideSpeed = 600;  
    window.cleanupDelay = 1200;
    window.effectSpeed = 600;
    window.scrollSpeed = 400;
  } else if ($body.hasClass('slow')){
    //slow
    window.slideSpeed = 1400;  
    window.cleanupDelay = 2000;
    window.effectSpeed = 1000;
    window.scrollSpeed = 1000;
  }
  
  //How many stages?
  window.stage = 1;
	window.stages = $('.slide').size();
  
  //Get mode
  window.isScroll = $body.hasClass('scroll');
  window.isSimplifiedMobile = $body.hasClass('simplifiedMobile');
  if (window.isScroll || window.isSimplifiedMobile && window.isMobile) { $html.addClass('scrollable'); }
  
  //Horizonal Mode
  if ($body.hasClass('horizontal')){
    window.horizontalMode = 1; 
  }
  
  //Preload
  if ($body.hasClass('noPreload')){
    window.preload = 0; 
  }
  
  //Is it animated?
  if ($body.hasClass('animated')){
    window.animated = 1;
  }
  
  //Is scroll hijacked?
  if ($body.hasClass('defaultScroll')){
    window.customScroll = 0;
  }
  
  //Check hash on start
  function updateHash(){
    var isHash = window.location.href.split("#")[1];
    if ((isHash)&&($('.slide[name="' +isHash+ '"]').length>0)) {
      var requestedElement = $('.slide[name="' +isHash+ '"]');
      if ( (window.isMobile && window.isSimplifiedMobile) || window.isScroll ){
        if (requestedElement.length) {
          if (!window.preload) {
            $('html,body').stop().clearQueue().animate({scrollTop:requestedElement.position().top},window.effectSpeed);
          } else {
            $(window).load(function(){
              $('html,body').stop().clearQueue().animate({scrollTop:requestedElement.position().top},window.effectSpeed);
            });
          }
        }
      } else {
        window.stage = $('.slide').index(requestedElement) + 1;
        if (window.loaded) {
          showSlide(window.stage); 
        }
      }
    } else {
      $body.addClass('firstSlide stage-1');
    }
  }
  updateHash();
  
  //Listen history changes
  $(window).on('popstate',function(e) {
    setTimeout(function(){
      updateHash();
    },100);
    e.preventDefault();
  });
  
  //
  var isHash = window.location.href.split("#")[1];
  if ((window.debugMode)&&(!isNaN(isHash))) {
    window.stage = Number(isHash);
  }
  
  //Preload images
  if (window.preload){
    var imgs = [];
    $("*").each(function() { 
      if($(this).css("background-image") !== "none") { 
        imgs.push($(this).css("background-image").replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '')); 
      } else if ($(this).is('img')){
        imgs.push($(this).attr("src")); 
      }
    });
    
    window.images = imgs.length;
    $.cacheImage(imgs, { complete: function () { window.loadingProgress++; }});
    
    var loadingInterval = setInterval(function(){
      var progress = 45*(window.loadingProgress/window.images);
      $('.loadingIcon .dash').attr('stroke-dasharray',progress+',100');
      $('.loadingIcon').redraw();
      if (window.loaded){
        $('.loadingIcon .dash').attr('stroke-dasharray','100,100');
        clearInterval(loadingInterval);
      }
    },400);
  }
  
  //on load
  $(window).load(function(){
    //start masonry
    $('.grid.masonry').masonry({
      itemSelector: 'li',
      transitionDuration: '0.1s'
    });
  });
 
  //initiate slide
  showSlide(window.stage); 
  
  //On page load 
  if (!window.preload) {
    runTheCode();
  } else {
    $(window).load(function(){
      runTheCode();
    });
  }
  function runTheCode(){
    $html.addClass('page-loaded');
    window.inAction = 0;
    window.loaded = 1;
    window.blockScroll = 0;
    
    setTimeout(function(){
      if (window.isScroll){
        updateScroll();
        updateNavigation();
      } if (window.isMobile && window.isSimplifiedMobile){
        $('.slide').addClass('selected animate active');
        updateNavigation();
      } else {
        showSlide(window.stage);
      }
    },500);
  }
  
  
  
  
  
  
  
   
  /*
         _____ _       _         _____ _                            
        / ___/| (•)   | |       / ___/| |                           
       | (___ | |_  __| | ___  | |    | |__   __ _ _ __   __ _  ___ 
        \___ \| | |/ _` |/ _ \ | |    | '_ \ / _` | '_ \ / _` |/ _ \
        ____) | | | (_| |  __/ | |____| | | | (_| | | | | (_| |  __/
       /_____/|_|_|\__,_|\___/  \____/|_| |_|\__,_|_| |_|\__, |\___/
                                                          __/ |     
       Slide Appearance Manager                          /___/    
  
  */ 
     
  function showSlide(requested){
    
    requested = parseInt(requested);
    
    if ( window.isMobile && window.isSimplifiedMobile || window.isScroll ){
      return;
    }
    
    updateNavigation();
    
    var newSlide = $('.slide').eq(requested - 1),
        currenSlide = $('.slide.selected'),
        currenSlideIndex = currenSlide.index('.slide') + 1;
        
    //cleanup
    hideShare();
    unzoomImage();
    hideSidebar();
    window.allowSlide = 1;
    
    //reset 
    $html.removeClass('sidebarShown');
    $body.removeClass('sidebarShown lastSlide firstSlide');

    //It it first or last stage?
    if (window.stage === 1){
      $body.addClass('firstSlide');
    }
    if ((window.stages === window.stage)&&(window.stages !== 1)) {
      $body.addClass('lastSlide');
    }
    
    $body.removeClassByPrefix("stage-").addClass('stage-'+window.stage);
    
    //white slide?
    if ( newSlide.hasClass('whiteSlide') ){
      $body.addClass('whiteSlide');
    } else {
      $body.removeClass('whiteSlide');
    }
    
    //prepare slides for transporting
    if (currenSlideIndex !== requested){
      currenSlide.removeClass('selected').removeClass(window.direction).addClass('active');
      newSlide.removeClass('before after').addClass('selected active').addClass(window.direction);
      
      //set order
      newSlide.prevAll('.slide').addClass('before').removeClass('after');
      newSlide.nextAll('.slide').addClass('after').removeClass('before');
      
      //set a trigger
      $(window).trigger("slideChange", [parseInt(requested), newSlide]);
    }
    
    //set hash
    if (window.setHashLink){
      if (newSlide.attr('name')) { 
        window.location.hash = newSlide.attr('name'); 
      } else {
        if ((window.location.toString().indexOf('#')>0)&&(location.protocol !== "file:")&&(location.href.split('#')[0])){
          if (history.pushState) {
            window.history.pushState("", "", location.href.split('#')[0]); 
          } else {
            window.location.hash = "";
          }
        }
      }
    }
    
    //prepare to show slide
    newSlide.find('.content').scrollTop(0);
    
    if (window.loaded){
      //wait for animation
      window.blockScroll = 1;
      
      setTimeout(function(){
        if (currenSlideIndex !== requested){
          currenSlide.removeClass('active animate');
        }
        window.blockScroll = 0;
      },window.slideSpeed);
      
      if (window.effectOffset > window.slideSpeed) { window.effectOffset = window.slideSpeed; }
      
      setTimeout(function(){
        newSlide.addClass('animate');
      },window.slideSpeed - window.effectOffset);
      
        
      //clear element animation on done
      $('.done').removeClass('done');
      
      clearTimeout(window.clearElementAnimation);
      window.clearElementAnimation = setTimeout(function(){
        $(".slide.selected [class*='ae-']").addClass('done');
      }, window.slideSpeed + window.effectSpeed + window.cleanupDelay);
    }
    
    //debug mode
    if (window.debugMode) { window.location.hash = requested; }
  }
  
  //remove animation from a clickable element
  $(".animated").on("click","[class*='ae-']:not('.done')", function(){ $(this).addClass('done'); });
  
  //Change slide
  window.changeSlide = function(n){
    
    if (n === "increase"){
			if ((window.stage + 1) >= window.stages){
				n = window.stages;
			} else {
				n = window.stage + 1;
			}
		} else if (n === "decrease"){
			if ((window.stage - 1) < 1){
				n = 1;
			} else {
				n = window.stage - 1;
			}
		}
    
		if ( window.isMobile && window.isSimplifiedMobile || window.isScroll ){
		  window.stage = n;
		  var requestedElement = $('.slide:eq('+ (window.stage - 1) +')'),
          offsetTop = $(requestedElement).offset().top,
          scrollTop = $(document).scrollTop(),
          finalPosition = (window.isMobile) ? offsetTop + scrollTop : offsetTop;
      
		  $('html,body').stop().clearQueue().animate({scrollTop:finalPosition},1000);
		} else {
		  if (n !== window.stage){
		    if (window.inAction !== 1){	
		      window.inAction = 1;
		      window.stage = n;
		      showSlide(window.stage);
		      setTimeout(function(){ window.inAction = 0; }, window.slideSpeed);
		    }
		  }
		}
	};
  
  $('.nextSlide').on('mouseup touchstart', function(){
    window.changeSlide('increase');
  });
  
  $('.prevSlide').on('mouseup touchstart', function(){
    window.changeSlide('decrease');
  });
  
  $('.toFirstSlide').on('mouseup touchstart', function(){
    window.changeSlide(1);
    if (history.pushState) {
      window.history.pushState("", "", location.href.split('#')[0]); 
    } else {
      window.location.hash = "";
    }
    if (window.isMobile){
      hideSidebar();
    }
  });
  
  $('.toLastSlide').on('mouseup touchstart', function(){
    window.changeSlide(window.stages);
    if (history.pushState) {
      window.history.pushState("", "", location.href.split('#')[0]); 
    } else {
      window.location.hash = "";
    }
    if (window.isMobile){
      hideSidebar();
    }
  });
  
  $('[class*="toSlide-"]').on('mouseup touchstart', function(){
    var num = $(this).attr('class').replace(/[^0-9]/g, '');
    window.changeSlide(num);
    if (window.isMobile){
      hideSidebar();
    }
  });
  
  //zoom out image
  function unzoomImage(){
    if ($('.zoom-overlay-open').length > 0){
      setTimeout(function(){
        $('.zoom-img').click();
      },window.slideSpeed);
    }
  }
  
  
  
  
  
  
  
   
  /*                 |
            *               .   
   .        |               |
   |                .           
    _____          |     _ _   
   / ___/               | | | 
  | (___   ___ _ __ ___ | | |
   \___ \ / __| '_   _ \| | | 
   ____) | (__| | | (_) | | | 
  |_____/ \___|_|  \___/|_|_|
    
  #scrolling */

  $('html,body').on('mousewheel', function(event){
    
    var currentSection = $('.slide.selected .content'),
        scrollsize = Math.abs(Math.round(event.deltaY)),
        minScrollSize = (window.isFirefox) ? 8 : 40,
        browserScrollRate = (window.isFirefox) ? 6.88 : 1,
        OSScrollRate = (window.isWindows) ? browserScrollRate * 2 : browserScrollRate,
        wheelDelta = (event.originalEvent.wheelDelta) ? event.originalEvent.wheelDelta : event.deltaY * event.deltaFactor,
        energy = wheelDelta * browserScrollRate * OSScrollRate,
        scrollDirection = (event.deltaY >= 0) ? "up" : "down",
        curSecScrolltop = $(currentSection).scrollTop(),
        currentSectionHeight = $(currentSection).find('.container').outerHeight(),
        deviceZoom = detectZoom.device();
    
    if ((window.isWindows)||(window.isLinux)){
      minScrollSize = 1;
      scrollsize = Math.abs(event.deltaY) * event.deltaFactor;
    }
    
    //scroll mode
    if ( (window.isMobile && window.isSimplifiedMobile) || window.isScroll ){
      
      if ((!window.sidebarShown)&&(!window.popupShown)&&(!window.blockScroll)) {
      
        //smooth scroll
        if (window.customScroll){
          
          //lock default scroll
          event.preventDefault();
              
          if (energy > 1500) { energy = 1500; }
          if (energy < -1000) { energy = -1500; }
              
          var scrollObject = $(window),
              scrollTop = scrollObject.scrollTop(),
              finalScroll = scrollTop - energy;
                
          TweenLite.to(scrollObject, window.scrollSpeed/1000, {
            scrollTo : { y: finalScroll, autoKill:false },
            ease: Power1.easeOut,
            overwrite: 5							
          });
              
        } else {
          if (!window.isWindows){
            $(currentSection).scrollTop(curSecScrolltop - energy);
          }
        }
      
      }
    } 
    
    //default mode
    if ( !window.isScroll ){
      
      // scroll oversized content
      if ((currentSectionHeight > $(window).height())){
        
        window.allowSlide = 0;
          
        if (( scrollDirection === "up" ) && ( $(currentSection).scrollTop() === 0 )){
          window.allowSlide = 1;
        } else if (( scrollDirection === "down" ) && ( $(currentSection).scrollTop() + $(window).height() >= Math.floor(currentSectionHeight / deviceZoom) )){
          window.allowSlide = 1;
        }
            
        if ((!window.sidebarShown)&&(!window.popupShown)&&(!window.blockScroll)) {
          
          if (window.customScroll){
            //lock default scroll
            event.preventDefault();
            
            //smooth scroll
            if (energy > 1500) { energy = 1500; }
            if (energy < -1000) { energy = -1500; }
              
            TweenLite.to(currentSection, 0.5, {
              scrollTo : { y: curSecScrolltop - energy, autoKill:false },
              ease: Power1.easeOut,
              overwrite: 5							
            });
            
          } else {
            if (!window.isWindows){
              curSecScrolltop = (scrollDirection === "up") ? curSecScrolltop - scrollsize : curSecScrolltop + scrollsize;   
              $(currentSection).scrollTop(curSecScrolltop);
            }
          }
        }
          
      //end scroll oversized content
      }
      
      //change slide on medium user scroll
      if ((scrollsize >= minScrollSize) && (window.allowSlide) && (!window.sidebarShown) && (!window.popupShown) && (!window.disableOnScroll)){
        
        //should we even.. 
        if ((scrollDirection === "down" && window.stage !== window.stages)||(scrollDirection === "up" && window.stage !== 1)){
          
          //ok let's go
          if (window.inAction !== 1){
              
            //we are animating
            window.inAction = 1;
            
            // up or down?
            if (scrollDirection === "down"){
              window.stage++;
            } else if (scrollDirection === "up"){
              window.stage--;
            }
              
            //set range of stages
            if (window.stage > window.stages){
              window.stage = window.stages;
            } else if (window.stage < 1){
              window.stage = 1;
            }
            showSlide(window.stage);
                    
            //we are done
            setTimeout(function(){ window.inAction = 0;}, window.slideSpeed);
          }
        }
      }
    }
    //end on mousewheel event
  });

  $(window).on('scroll', function(){
    if ( (window.isMobile && window.isSimplifiedMobile) || window.isScroll ){
      updateScroll();
    }
  });
  
  //hide share with delay
  var hideShareonScrollDelay = 0;
  function updateScroll(){
    hideShareonScrollDelay++;
    if (hideShareonScrollDelay >= 6){
      hideShare();
      hideShareonScrollDelay = 0;
    }
      
    $('.slide').each(function(index, element) {
        
      var $element = $(element),
          scrollTop = $(document).scrollTop(),
          positionY = (window.isMobile) ? $(element).offset().top + scrollTop : $(element).offset().top,
          elementHeight = $element.height(),
          windowHeight = $(window).height(),
          documentHeight = $(document).height(),
          halfWay = (windowHeight/2 > elementHeight) ? elementHeight/2 : windowHeight/2,
          halfOnScreen = ((positionY < (windowHeight + scrollTop - halfWay)) && (positionY > (scrollTop - elementHeight + halfWay))),
          scale = (scrollTop - positionY) / windowHeight,
          allowToSelect = true;
            
      //checking first slide
      if (scrollTop === 0) {
        if (index === 0) {
          allowToSelect = true;
        } else {
          allowToSelect = false;
        }
      }
            
      //checking last slide
      if (scrollTop + windowHeight === documentHeight) {
        if (index === window.stages - 1) {
          allowToSelect = true;
        } else {
          allowToSelect = false;
        }
      }
      
      if (halfOnScreen && allowToSelect) {
        $element.addClass('selected animate active');
        
        if (window.stage !== $element.index('.slide') + 1){
          window.stage = $element.index('.slide') + 1;
          
          //set a trigger
          $(window).trigger("slideChange", [window.stage, $element]);
        } if (!window.firstTimeTrigger){
          window.firstTimeTrigger = 1;
          $(window).trigger("slideChange", [window.stage, $element]);
        }
          
        if (window.stage === 1){
          $body.addClass('firstSlide');
        } else {
          $body.removeClass('firstSlide');
        }
        if (window.stages === window.stage) {
          $body.addClass('lastSlide');
        } else {
          $body.removeClass('lastSlide');
        }
        
        $body.removeClassByPrefix("stage-").addClass('stage-'+window.stage);
            
        //white slide?
        if ($element.hasClass('whiteSlide')){
          $body.addClass('whiteSlide');
        } else {
          $body.removeClass('whiteSlide');
        }
          
        //clearTimeout(window.clearElementAnimation);
        window.clearElementAnimation = setTimeout(function(){
          $element.find("[class*='ae-']").addClass('done');
        }, window.effectSpeed + window.cleanupDelay);
            
        updateNavigation();
            
      } else {
        $element.removeClass('selected');
      }
        
      //parallax
      if (scale > -1 && scale < 1){
        if ($element.hasClass('parallax')){
          var precentage = 100 - ((scale/2) + 0.5) * 100;
          $element.find('.background').css('-webkit-transform-origin',"50% " + precentage + "%").css('transform-origin',"50% " + precentage + "%");
        }
      }
    });
  }
  
  
  
  
  
  
  
   
  /* 
         ______                      
        / ____/       (•)
       | (_____      ___ _ __   ___ 
        \___ \ \ /\ / | | '_ \ / _ \
        ____) \ V  V /| | |_) |  __/
       /_____/ \_/\_/ |_| .__/ \___/
                        | |                
       Swipe Event      |_|           
  */


  $('.mobile .slides:not(.scroll):not(.simplifiedMobile)').swipe({
    swipeStatus:function(event, phase, direction, distance){
      
      window.allowSwipeUp = 1;
      window.allowSwipeDown = 1;
          
      //set height for current slide
      var currentSection = $('.slide.selected .content'),
          currentSectionHeight = $(currentSection).find('.container').outerHeight(),
          next = "up",
          prev = "down",
          minDistanceMobile = 30,
          windowHeight = window.innerHeight;
          
      if (window.sidebarShown){
        currentSection = $('.sidebar .content');
      } 
      
      if (window.popupShown){
        currentSection = $('.popup .content');
      }
      
      if (phase === "start") {
        window.scrollTop = $(currentSection).scrollTop();
      }
          
      //horizontal mode
      if (window.horizontalMode){
        next = "left";
        prev = "right";
      }
      
      //lock slide
      if ( (!window.horizontalMode) && ( currentSectionHeight > windowHeight) ){
        if (window.scrollTop + windowHeight < currentSectionHeight){
          window.allowSwipeUp = 0;
        } else if (window.scrollTop > 0) {
          window.allowSwipeDown = 0;
        }
      }
      
      if (!window.sidebarShown) {
        // MOBILE
        if (window.horizontalMode){
          if (direction === next && distance > minDistanceMobile){
            window.changeSlide('increase');
          } else if (direction === prev && distance > minDistanceMobile){
            window.changeSlide('decrease');
          }
        } else {
          if (direction === next && distance > minDistanceMobile && window.allowSwipeUp && window.allowSlide){
            window.changeSlide('increase');
          } else if (direction === prev && distance > minDistanceMobile && window.allowSwipeDown && window.allowSlide){
            window.changeSlide('decrease');
          }
        }
      }
    },
    maxTimeThreshold:30,
    fingers:'all',
    allowPageScroll:"vertical"
  });
  
  
  
  
  
  
  
   
  /*    _____                 _       
       |  __ \               | |
       | |__) __ _ _ __   ___| |____
       |  ___/ _` | '_ \ / _ | | __/
       | |  | (_| | | | |  __| |__ \
       |_|   \__,_|_| |_|\___|_|___/
    
       Responsive Panels              */
      
  if($('.panel .compact').length > 0){
    
    $('.panel .compact').each(function(index, element) {
      var panel = $(element).parents('.panel'),
          desktop = $(panel).find('.desktop'),
          compact = element,
          forceMobileView = $(panel).hasClass('forceMobileView');
      
      $(window).on('load resize ready',function(){
        
        var documentWidth = $(document).width(),
            panelsPadding = parseInt($(panel).css('padding-left').replace('px','')) + parseInt($(panel).css('padding-right').replace('px',''));
        
        if ((window.isMobile || $(document).width() < 767) && forceMobileView) {
        
          $(desktop).addClass('hidden');
          $(compact).removeClass('hidden');
        
        } else {
          
          $(desktop).removeClass('hidden');
          $(compact).addClass('hidden');
          
          var totalWidth = 0;
          
          desktop.children().each(function(){
            if ( $(this).outerWidth() > $(this).children().outerWidth() ){
              totalWidth += Math.round($(this).outerWidth());
            } else {
              totalWidth += Math.round($(this).children().outerWidth());
            }
          });
          
          // if width of space is not enough or we are on mobile
          if ((totalWidth + Math.round(panelsPadding) > documentWidth + 2 ) || ((window.isMobile || documentWidth < 767) && forceMobileView)) {
            $(desktop).addClass('hidden');
            $(compact).removeClass('hidden');
          } else {
            $(desktop).removeClass('hidden');
            $(compact).addClass('hidden');
          }
        }
          
      });
      
    });
  }
  
  //HIDE PANELS ON SCROLL
  if (($('.panel.hideOnScroll').length > 0) && (window.isScroll || window.isSimplifiedMobile)){
    var lastScrollTop,
        i = 0,
        sensitivity = 20,
        panelToHide = $('.panel.hideOnScroll');
         
    //hide if height larger than screen size 
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop(),
          windowHeight = $(window).height(),
          documentHeight = $(document).height(),
          $panelToHide = $(panelToHide);
          
      if (scrollTop > lastScrollTop) {
        i++;
        if (i >= sensitivity) {
          $panelToHide.addClass('hide');
          i = sensitivity;
        }
      } else {
        i -= 1;
        if (i <= sensitivity/2) {
          i = 0;
          $panelToHide.removeClass('hide');
        }
      }
      lastScrollTop = scrollTop;
      
      //show on top and bottom
      if ((scrollTop + windowHeight + sensitivity >= documentHeight) || (scrollTop + sensitivity <= 0)) {
        $panelToHide.removeClass('hide');
      }
    }); 
  }
  
  
  
  
  
  
  
   
  /*
         _  __              
        | |/ /              
        | ' / ___ _   _ ____
        |  < / _ \ | | / __/
        | . \  __/ |_| \__ \
        |_|\_\___/\__, |___/
                   __/ |    
                  |___/    
   
        Listen user keys 
                                   */
   
	$(window).on("keydown",function(e){
    var delta = 2.5,
        scrollTime = 0.5,
        scrollDistance = 50,
        currentSection = $('.slide.selected .content'),
        scrollTop = $(currentSection).scrollTop(),
        finalScroll = scrollTop + parseInt(delta*scrollDistance);

    
		/* [ ← ] */
		if (e.keyCode === 37){
      e.preventDefault();
			if (window.horizontalMode){ window.changeSlide('decrease'); }
		}
    
		/* [ ↑ ] */
		if (e.keyCode === 38){
			if (!window.horizontalMode){
        e.preventDefault();
        window.changeSlide('decrease');
      } else {
        e.preventDefault();
        TweenLite.to($(currentSection), scrollTime, {
          scrollTo : { y: finalScroll, autoKill:true },
          ease: Power1.easeOut,
          overwrite: 5							
        });
      }
		}
		
		/* [ → ] */
		if (e.keyCode === 39){
		  if (window.horizontalMode){ 
        e.preventDefault();
        window.changeSlide('increase');
      }
		}
    
		/* [ ↓ ] */
		if (e.keyCode === 40){
      if (!window.horizontalMode) {
        e.preventDefault();
        window.changeSlide('increase');
      } else {
        e.preventDefault();
        TweenLite.to($(currentSection), scrollTime, {
          scrollTo : { y: finalScroll, autoKill:true },
          ease: Power1.easeOut,
          overwrite: 5							
        });
      }
		}
		
		/* [ esc ] */
		if (e.keyCode === 27){
			hideSidebar();
      hideShare();
      hidePopup();
      unzoomImage();
		}
	});
  
  
  
  
  
  
  
   
  /*
       _   _                           _                 
      | \ | |           ( )           | | ( )                 •
      |  \| | __ ___   ___  __ _  __ _| |_ _  ___  _ __       •
      | . ` |/ _` \ \ / | |/ _` |/ _` | __| |/ _ \| '_ \     (•)
      | |\  | (_| |\ V /| | (_| | (_| | |_| | (_) | | | |     •
      |_| \_|\__,_| \_/ |_|\__, |\__,_|\__|_|\___/|_| |_|     •
                            __/ |
      Generate navigation  /___/               
  */
  
  
  
  var navParent = $('.navigation'),
      navigation = $(navParent).find('ul');
  
  if ($(navigation).length > 0) {
  
  
    if ($(navigation).is(':empty')) {
      
      $(navigation).each(function(index, element) {
        for (var i = 1; i <= window.stages; i++){
          var title = $('.slide:eq('+(i - 1)+')').data('title');
          if (title === undefined) { 
            
            if (window.debugMode) {
              $(element).append('<li data-title="#'+i+'"></li>');
            } else {
              $(element).append('<li></li>');
            }
          
          } else {
            $(element).append('<li data-title="'+title+'"></li>');
          }
        }
      });
    }
    
    //Navigation clicks
    $('.navigation li').on("click touchend", function(){
      window.changeSlide($(this).index() + 1);
    });
    
    if (!$('.side').hasClass('compact')){
      //Collapse sidemenu to compact
      $(window).on('load resize ready',function(){
        var containerWidth = $(window).height() - $(window).width()*0.1112 - 100,
            container = $('.side').removeClass('compact').find('ul'),
            totalWidth = 0;
        
        $(container).children().each(function(){
          if ( $(this).outerWidth() > $(this).children().outerWidth() ){
            totalWidth += Math.round($(this).outerWidth());
          } else {
            totalWidth += Math.round($(this).children().outerWidth());
          }
        });
        
        if (totalWidth > containerWidth){
          $('.side').addClass('compact');
        } else {
          $('.side').removeClass('compact');
        }
      });
    }
  }
  
  //In-page #Navigation
  $("a[href^='#'][target!='_blank']").click(function(e){ e.preventDefault();
    
    var url = $(this).attr('href'),
        hashLink = url.split('#')[1];
    
    if( hashLink && $('.slide[name="' +hashLink+ '"]').length > 0 ){
      var requestedElement = $('.slide[name="' +hashLink+ '"]');
      
      if ( window.isMobile && window.isSimplifiedMobile || window.isScroll ){
        var target = requestedElement;
        if (target.length) {
          $('html,body').stop().clearQueue().animate({scrollTop:target.position().top},1000);
        }
        if (window.setHashLink){ 
          window.location.hash = hashLink;
        }
      } else {
        window.stage = $('.slide').index(requestedElement) + 1;
        showSlide(window.stage);
      }
      if (window.isMobile){
        hideSidebar();
      }
    }
    
  });
  
  //Update Navigation
  function updateNavigation(){
    setTimeout(function(){
      if ( $(navigation).length > 0 ){
        $(navigation).each(function(index, element) {
          $(element).find('li.selected').removeClass('selected');
          $(element).find('li').eq(window.stage - 1).addClass('selected');
				});
      }
    },100);
  }
  
  
  
  
  
  
  
   
  /*     _____       _      _                 ☰   
        / ____(•)   | |    | |                
       | (___  _  __| | ___| |__   __ _ _ __   
        \___ \| |/ _` |/ _ | '_ \ / _` | '_/
        ____) | | (_| |  __| |_) | (_| | |   
       |_____/|_|\__,_|\___|_.__/ \__,_|_|   
                                             
       Sidebar Toggle                         */

  $('.sidebarTrigger[data-sidebar-id]').on('click', function(){
    
    var sidebarID = $(this).data('sidebar-id'),
        element = $('.sidebar[data-sidebar-id="' + sidebarID + '"]'),
        isAnimated = $(element).hasClass('animated');
    
    if (!window.sidebarShown){
      if (element.length > 0) {
        window.sidebarShown = 1;
        window.allowSlide = 0;
        $(element).removeClass('animate active').addClass('visible');
        $html.addClass('sidebarShown');
        $(element).find('.content').scrollTop(0);
        
        if (isAnimated){
          clearTimeout(window.removeAnimationTimeout);
          setTimeout(function(){
            $(element).addClass('animate active');
          },100);
        }
      }
    } else {
      hideSidebar();
    }
    
    //clean up
    hideShare();
  });
  
  function hideSidebar(){
    
    if (window.sidebarShown){
      $html.removeClass('sidebarShown');
      var $sidebar = $('.sidebar.visible');
      $sidebar.removeClass('visible');
      
      window.removeAnimationTimeout = setTimeout(function(){
        $sidebar.removeClass('animate active');
      },500);
      window.sidebarShown = 0;
      window.allowSlide = 1;
    }
  }
  
  //Hide on click outside
  $(document).on('mouseup touchstart', function (e){
    var container = $(".sidebarShown .sidebar, .dropdownTrigger");
    if (!container.is(e.target) && container.has(e.target).length === 0 && window.hideSidebarOnBodyClick) {
      hideSidebar();
    }
  });
  
  //Hide on .close Click
  $('.sidebar .close').on('click touchstart', function(){
    hideSidebar();
  });
  
  
  
  
  
  
  
   
  /*    _____                           __
       |  __ \           _   _ _ __    |  |_
       | |__) ___  _ __ | | | | '_ \   |__| |
       |  ___/ _ \| '_ \| | | | |_) |    |__|
       | |  | (_) | |_)  \__,_| .__/
       |_|   \___/| .__/      | |    
                  | |         |_|    
       Popup      |_|                      */
                
  $('.popupTrigger').on('click', function(){
    
    var sidebarID = $(this).data('popup-id'),
        element = $('.popup[data-popup-id="' + sidebarID + '"]'),
        isAnimated = element.hasClass('animated');
 
    
    if (element.length > 0) {
      $(element).addClass('visible');
      
      if (isAnimated){
        setTimeout(function(){
          $(element).addClass('animate active');
          
          clearTimeout(window.clearPopupElementAnimation);
          window.clearPopupElementAnimation = setTimeout(function(){
            $(element).find("[class*='ae-']").addClass('done');
          }, window.effectSpeed + window.cleanupDelay);
        },100);
      }
    
      $html.toggleClass('popupShown');
      $(element).scrollTop(0);
      window.allowSlide = 0;
      window.popupShown = 1;
      
      //Autoplay Iframe
      if ($(element).hasClass('autoplay')){
        var $element = $(element),
            iframe = $element.find('iframe'),
            HTML5video = $element.find('video');
            
        if ( iframe.length > 0  ) {
          var iframeSrc = $(iframe).attr('src'),
              symbol = (iframeSrc.indexOf('?') > -1) ? "&" : "?";
          $(iframe).attr('src',iframeSrc + symbol + "autoplay=1");
        } else if (HTML5video.length > 0){
          $(HTML5video)[0].play();
        }
      }
    }
    
    //clean up
    hideShare();
  });
  
  function hidePopup() {
    //stop video on close
    if (window.popupShown){
      
      var element = $('.popup.visible'),
          iframe = $(element).find('iframe'),
          HTML5video = $(element).find('video');
      
      //stop autoplay
      if (iframe.length > 0) {
        var iframeSrc = $(iframe).attr('src'),
            symbol = (iframeSrc.indexOf('?autoplay') > -1) ? "?" : "&";
            
        $(iframe).attr('src', $(iframe).attr('src').replace(symbol+'autoplay=1',''));
      } else if (HTML5video.length > 0) {
          $(HTML5video)[0].pause();
          $(HTML5video)[0].currentTime = 0;
      }
      
      $html.removeClass('popupShown');
      
      //clear element animation on done
      clearTimeout(window.clearPopupElementAnimation);
      $(element).find('.done').removeClass('done');
      $(element).removeClass('visible animate active');
      
      window.allowSlide = 1;
      window.popupShown = 0;  
    }
  }
  
  //Hide on body click
  $(document).on('click', function (e){
    var container = $(".popupShown .popup .popupContent, .popupTrigger");
    if (!container.is(e.target) && container.has(e.target).length === 0 && container.length > 0) {
      hidePopup();
    }
  });
  
  //Hide on .close Click
  $('.popup .close').on('click', function(){
    hidePopup();
  });
  
  
  
  
  
  
  
   
  /*     _____ ______ ______ 
        / ____|  ___/|  ___/
       | |  _ | |__  | |__   
       | | |_\|  __/ |  __/  
       | |__| | |____| |____ 
        \____/|_____/|_____/
                             
       Grid Element Equalizer    */
  
  $(window).on('resize load ready',function(){
    equalizeELements();
  });
    
  function equalizeELements(){
    
    var gridEl = $('.grid.equal');
    if (gridEl.length) {
      $(gridEl).each(function(index, element) {
          
        var screenWidth = $(window).width(),
            collapseWidth = ($(element).hasClass('later')) ? 767 : 1024,
            equalElement = $(element).find('.equalElement'),
            equalMobile = $(this).hasClass('equalMobile');
            
        if ((screenWidth >= collapseWidth)||(equalMobile)){
          var height = 0;
            
          //fetch max height
          $(equalElement).each(function(index, el) {
            
            $(el).css('height','auto');
            
            if (height < $(el).outerHeight()) {
              height = $(el).outerHeight();
            }
            
          });
              
          //apply
          $(element).find('.equalElement').each(function(index, el) {
            $(el).css('height',height + "px");
          });
        } else {
          $(equalElement).css("height",'auto');
        }
      });
    }
  }
 
  //Detect Resize
  $(window).on('resize',function(){
    $html.addClass('resizing');
  }).on('resizeEnd',function(){
    $html.removeClass('resizing');
  });
  
  
  
  
  
  
  
   
  /*     _____ _       _           
        / ____| (•)   | |          
       | (___ | |_  __| | ___ _ __ 
        \___ \| | |/ _` |/ _ \ '_/
        ____) | | | (_| |  __/ |   
       |_____/|_|_|\__,_|\___/_|   
                                   
                                                           
       Slider     • •(•)• •        */
  
  
  var sliderEl = $('.slider');
  
  if ($(sliderEl).length > 0) {
    $(sliderEl).each(function(index, element) {
      
      //auto height
      if ($(element).hasClass('clickable')){    
        $(element).on('click', function(){
  
          var el = $(this),
              selected = $(el).find('.selected'),
              $selected = $(selected),
              nextElement = $(selected).nextOrFirst('li'),
              nextIndex = $(nextElement).index(),
              sliderID = $(el).data('slider-id'),
              controller = $('.controller[data-slider-id="'+sliderID+'"]');
               
          //select next
          $(selected).removeClass('selected').addClass('hide');
          $(nextElement).removeClass('hide').addClass('selected');
          
          $selected.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
            $(this).removeClass('hide');
          });
                    
          if ( (sliderID) && ($(controller).length > 0) ){
            $(controller).find('.selected').removeClass('selected');
            $(controller).children('li:eq('+nextIndex+')').addClass('selected');
          }
        });
      }
		});
  }
  
  // controller
  var controller = $('.controller');
  
  if ($(controller).length > 0) {
    $(controller).find('li').each(function(index, element) {
      
			 $(element).on('click', function(){
         var controllerElement = $(this),
             selectedElement = $(controllerElement).closest('.controller').find('.selected'),
             elementIndex = $(this).index(),
             controllerId = $(controllerElement).closest('.controller').data('slider-id'),
             sliderId = $('.slider[data-slider-id="'+controllerId+'"]');
         
         if (!$(controllerElement).hasClass('selected')){
            $(selectedElement).removeClass('selected');
            $(controllerElement).addClass('selected');
            sliderId.find('.selected').removeClass('selected').addClass('hide').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
              $(this).removeClass('hide');
            });
            sliderId.children('li:eq('+elementIndex+')').removeClass('hide').addClass('selected');
         }
       });
      
    });
  }
  
  //Next and prev buttons
  $('[data-slider-action]').click(function(){
    
    if ($(this).data('slider-id')){
      var desiredElement, desiredIndex,
          sliderID = $(this).data('slider-id'),
          action = $(this).data('slider-action'),
          slider = $('.slider[data-slider-id="' + sliderID + '"]'),
          controller = $('.controller[data-slider-id="'+sliderID+'"]'),
          selected = $(slider).find('.selected');
          
      if (action === "next"){
        desiredElement = $(selected).nextOrFirst('li');
      } else if (action === "prev") {
        desiredElement = $(selected).prevOrLast('li');
      }
               
      //select next
      desiredIndex = $(desiredElement).index();
      $(selected).removeClass('selected');
      $(desiredElement).removeClass('hide').addClass('selected');
                    
      if ((sliderID) && ($(controller).length > 0) ){
        $(controller).find('.selected').removeClass('selected').addClass('hide').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
          $(this).removeClass('hide');
        });
        $(controller).children('li:eq('+desiredIndex+')').addClass('selected');
      }
      
    }
  });
  
  //Auto Height
  $('[data-slider-id].autoHeight').each(function(index, element) {
		$(window).on('click resize load ready',function(){
      var totalHeight = 0;
      
      $(element).find('.selected').children().each(function(){
        totalHeight += Math.round($(this).outerHeight());
      });
      $(element).height(totalHeight + "px");
		});
	});
  
  
  
  
  
  
  
   
  /*     _____ _                    
        / ___/| |                   
       | (___ | |__   __ _ _ __ ___ 
        \___ \| '_ \ / _` | '__/ _ \
        ____) | | | | (_| | | |  __/
       /_____/|_| |_|\__,_|_|  \___/
    
       Share Window Appereance and Performance */
       
       
  window.dropdownShown = false;
  $('.dropdownTrigger').click(function(){
    if (window.dropdownShown){
      hideShare();
    } else {
      //show
      
      var offset = $(this).offset(),
          offsetY = Math.ceil(offset.top),
          offsetX = Math.ceil(offset.left),
          shareID = $(this).data('dropdown-id'),
          element = $('.dropdown[data-dropdown-id="' + shareID + '"]');
      
      clearTimeout(window.hideDropdown);
      
      if ( $(element).hasClass('bottom') ) {
        offsetY = offsetY - $(element).outerHeight();
      } else {
        offsetY = offsetY + $(this).outerHeight();
      }
      
      if ( $(element).hasClass('right') ) {
        offsetX = offsetX - $(element).outerWidth() + $(this).outerWidth();
      }
      
      $(element).removeClass('show hide').addClass('show').css('top',offsetY).css('left',offsetX);
      $html.addClass('dropdownShown');
      window.dropdownShown = true;
    }
  });
  
  function hideShare(){
    //hide
    if (window.dropdownShown){
      $('.dropdown').addClass('hide');
      $html.removeClass('dropdownShown');
      window.hideDropdown = setTimeout(function(){
        $('.dropdown').removeClass('show hide');
      },500);
      window.dropdownShown = false;
    }
    
    hideShareonScrollDelay = 0;
  }
  
  //remove on resize
  $(window).on('resize',function(){ 
    hideShare();
  });
  
  //remove on click outside
  $(document).on('mouseup touchstart', function (e){
    var container = $(".dropdownShown .dropdown, .dropdownTrigger");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      hideShare();
    }
  });
  
  //set url for share
  window.shareUrl = window.location.href;
  if ($('.share').data('url')) {
    window.shareUrl = $('.dropdown').data('url');
  }
  //set text for share
  window.shareText = document.title;
  if ($('.share').data('text')) {
    window.shareText = $('.dropdown').data('url');
  }
  
  $('.share').sharrre({
    enableHover: false,
    shorterTotal: true,
    url: window.shareUrl,
    text: window.shareText,
    enableCounter: false,
    share: {
      twitter: true,
      facebook: true,
      pinterest: true,
      googlePlus: true,
      stumbleupon: true,
      linkedin: true
    },
    
    buttons: {
      pinterest: {
        media: $('.dropdown').data('pinterest-image'),
        description: $('.dropdown').data('text') + " " + $('.dropdown').data('url')
      }
    },
    
    template: $('.share').html(),
    
    render: function(api) {
      
      $(api.element).on('click touchstart', '.twitter', function() {
        api.openPopup('twitter');
      });
      $(api.element).on('click touchstart', '.facebook', function() {
        api.openPopup('facebook');
      });
      $(api.element).on('click touchstart', '.pinterest', function() {
        api.openPopup('pinterest');
      });
      $(api.element).on('click touchstart', '.googlePlus', function() {
        api.openPopup('googlePlus');
      });
      $(api.element).on('click touchstart', '.stumbleupon', function() {
        api.openPopup('stumbleupon');
      });
      $(api.element).on('click touchstart', '.linkedin', function() {
        api.openPopup('linkedin');
      });
      $(api.element).on('click touchstart', '.mail', function() {
        var subject = ($(this).data('subject') ? $(this).data('subject') : "");
        var body = ($(this).data('body') ? $(this).data('body') : "");
        var url = window.location.href;
        if ( $('.dropdown').data('url') ) { url = $('.dropdown').data('url'); }
        //open email
        window.location.href ="mailto:?Subject=" + encodeURIComponent( subject ) + "&Body=" + encodeURIComponent( body ) + " " + url;
      });
      
    }
  });
  
  //CONTACT FORM
  $("#contact-form").ajaxForm(function() { 
    var $contactFormButton = $("#contact-form .button"),
        successText = $contactFormButton.data('success-text') ? $contactFormButton.data('success-text') : "Done!",
        successClass = $contactFormButton.data('success-class') ? $contactFormButton.data('success-class') : "green",
        defaultText = $contactFormButton.val();
        
    $contactFormButton.attr('value',successText).addClass(successClass);
    
    setTimeout(function(){
      $("#contact-form .button").attr('value',defaultText).removeClass(successClass);
      $("#contact-form")[0].reset();
    },4000);
  });
  
// end on dom ready
});