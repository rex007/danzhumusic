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
//= require ckeditor/init
//= require foundation
//= require transition
//= require turbolinks
//= require_tree .

$(function(){ $(document).foundation(); });


// intro header animation

$(document).ready(function(){
	var first_logo = $('.start_logo'),
		second_logo = $('.start_name');
	window.setTimeout(function(){
		first_logo.addClass('header_logo1');
		second_logo.addClass('header_logo2');
	},500);

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
		// admin panel animation-- news

	$('.news_admin_button').on('click', function(e){
		var	up_arrow = $('.up_arrow'),
	   		img_first = $('#icon_new img:first-child'),
			img_second = $('#icon_new img:last-child'),
			img_other = $('#icon_edit, #icon_destroy'),
			news_form = $('#news_form'),
			img_new = img_first, img_second;
		e.preventDefault()
		up_arrow.animate({'top':'0px'})
		adminPanel.animate({height: ["toggle","swing"]});
		if(adminPanel.is(':visible')){
			up_arrow.animate({'top':'-=11px'})
		}
		if(img_new.is(':hidden')){
				news_form.hide('fast');
				img_new.removeClass('rotate').transition({rotate: '0deg'}).show();
				console.log('is hidden');
		}
		$('#icon_new').on('click',function(){
			img_other.fadeOut(150);
			img_first.addClass('rotate').animate({
				'width': '60%',
				'height': '60%'
			},100).transition({rotate: '2080deg'},150).fadeOut(100);
			img_second.animate({
				'width': '65%',
				'height': '65%'
			},100).transition({rotate: '-5080deg'},200).fadeOut(200)
			news_form.show('slow');
		});
	});


});


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


