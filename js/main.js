$(function(){var t=$("#toc");if(!!t.length&&screen.width>999&&$(".mypage").find("h1").length!=0){$("#toc").tocify({context:".mypage",theme:"bootstrap3",selectors:"h1,h2,h3"});var o=$(window),e=$("#toc"),s=e.offset().top;e.toggleClass("sticky-scroll",s>155);o.scroll(function(){s=e.offset().top;e.toggleClass("sticky-scroll",s>155)})}menuHighlight();if(screen.width>500){$(window).scroll(function(){if($(this).scrollTop()){$("#gotop:hidden").stop(true,true).fadeIn()}else{$("#gotop").stop(true,true).fadeOut()}})}});function menuHighlight(){var t=$(".nav li").css("background-color"),o,e,s,i,c,n="rgba(44,108,222,0.9)",r=60;$(".nav li").mousemove(function(a){o=a.pageX-this.offsetLeft;e=a.pageY-this.offsetTop;s=o+" "+e;i="-webkit-gradient(radial, "+s+", 0, "+s+", "+r+", from("+n+"), to(rgba(66,133,244,1.0))), "+t;c="-moz-radial-gradient("+o+"px "+e+"px 45deg, circle, "+n+" 0%, rgba(66,133,244,1.0) "+r+"px)";$(this).css({background:i}).css({background:c})}).mouseleave(function(){$(this).css({background:t})})}