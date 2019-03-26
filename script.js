$(document).ready(function(){
	var meF = 0;
	$(".header_search_box img").on("click",function(){
		$(".search_bar").toggleClass("active");
		if (meF == 0) {
			$(this).find("img").attr("src","images/close_icon.png");
			meF = 1;
		}
		else {
			$(this).find("img").attr("src","images/search.png");
			meF = 0;
		}
	})
})


$(function() {
    $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
        if  (scroll > 10){
        	$('header').addClass("fixed");
        }else {
        	$('header').removeClass("fixed");
        }
    });
});