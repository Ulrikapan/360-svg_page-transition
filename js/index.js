	$(document).ready(function(){
     var el = $('.transition-360-wrap');
		  $('.back-btn').on('click', function(e){
        e.preventDefault();
        
        el.fadeOut();
        
        $('.img-wrap').removeClass('transform-to-360');
        setTimeout(function(){
	        	el.removeClass('active');
	        },1000)
        $(this).fadeOut();
        $('.welcome-btn').delay(800).fadeIn();
      // $('.img-wrap').removeClass('transform-to-360');
      // setTimeout(function(){
      // el.addClass('active')
      // },50)
      })
	    $('.welcome-btn').on('click', function(e){
	        e.preventDefault();
	        el.show();
          $(this).fadeOut();
          $('.back-btn').delay(2500).fadeIn();
	        $('.img-wrap').addClass('transform-to-360');
	        setTimeout(function(){
	        	el.addClass('active')
	        },50)

	    })
	    // 轉場360 end


	   	function transition360size(){
		    var windowW = $(window).width(),
	   			windowH = $(window).height(),
	   			el = $('.transition-360-wrap svg');

	   		if(windowW > windowH && windowW > 1260){
	   			el.css({'width': '200vh', 'height': 'auto'});
	   		}else if(windowW > windowH && windowW <= 1260){
	   			el.css({'width': '200vh', 'height': 'auto'});
	   		}else{
	   			el.css({'height': '200vh', 'width': 'auto'});
	   		}
	   	}
	   	transition360size();

	})