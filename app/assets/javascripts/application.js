// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-fileupload/basic
//= require jquery-fileupload/vendor/tmpl
//= require ckeditor/init
//= require foundation
//= require transition
//= require turbolinks
//= require_tree .

$(function(){ $(document).foundation(); });


// intro header animation

$(document).ready(function(){

	// administration effekt 

	var admin_jumper = $('.admin_jumper_sign_in, .admin_jumper'),
		adminPanel = $('.admin_panel'),
		admin= $('.administration');
	admin_jumper.on('click', function(){
		var $this = $(this);
		if (admin.hasClass('isDown')){
			admin.animate({'top':'0px'},300)
			admin.removeClass('isDown');
		}else{
			admin.animate({'top':'-45px'},350)
			admin.addClass('isDown')
		}
		adminPanel.hide();
	});

	setInterval(footerLooper,2500)

});
$(window).resize(function(){
	if($(window).width() > 764 ){
		var first_logo = $('.start_logo'),
		second_logo = $('.start_name');
		window.setTimeout(function(){
			first_logo.addClass('header_logo1');
			second_logo.addClass('header_logo2');
		},500);
	}else{
		false;
	}
})

function footerLooper(){
	var logo = $('.footer h6');
	if(logo.hasClass('footer_after')){
		logo.removeClass('footer_after');
	}else{
		logo.addClass('footer_after');
	}
};
// 	// effect for nav
// $(window).resize(function(){
// 	if($(window).width() < 800 ){
// 		$('.large-menu').hide();
// 		$('.content_to_grid').show();
// 	}else{
// 		$('.large-menu').show();
// 		$('.content_to_grid').hide();
// 	}

// });



$(function(){
	var current = 0;

	$imgs = $('.header_bg1');
	imgAmount = $imgs.length;

	$($imgs.hide().get(Math.floor(Math.random() * $('.header_bg1:hidden').length))).show();

	function swapImages() {
		var $currentImg = $('.header_bg1:visible');
		var $nextImg = $('.header_bg1:hidden').eq(Math.floor(Math.random() * $('.header_bg1:hidden').length)); 
			speed = 7000;

		$currentImg.fadeOut(speed);
		$nextImg.fadeIn(speed);
	}

		window.setInterval(swapImages, 7500);

});


