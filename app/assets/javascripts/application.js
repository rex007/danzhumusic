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
//= require foundation
//= require transition
//= require turbolinks
//= require ckeditor/init
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

		// admin panel animation-- news

	$('.news_admin_button').on('click', function(e){
		var adminPanel = $('.admin_panel'),
			up_arrow = $('.up_arrow');
		e.preventDefault()
		up_arrow.animate({'top':'0px'})
		adminPanel.animate({height: ["toggle","swing"]});
		if(adminPanel.is(':visible')){
			up_arrow.animate({'top':'-=11px'})
		}
		$('#icon_new').on('click',function(){
			var img = $('#icon_new img'),
				img_other = $('#icon_edit, #icon_destroy');
			img_other.fadeOut(150);
			img.addClass('rotate').animate({
				'width': '60%',
				'height': '60%'
			},100).transition({rotate: '2080deg'},150).fadeOut(100);
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


