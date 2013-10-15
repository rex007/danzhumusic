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
//= require turbolinks
//= require ckeditor/init
//= require_tree .

$(function(){ $(document).foundation(); });


// intro header animation

$(document).ready(function(){
	var first_logo = $('.start_logo1'),
		second_logo = $('.start_logo2');
	window.setTimeout(function(){
		first_logo.addClass('header_logo1');
		second_logo.addClass('header_logo2');
	},500);
});

// function bgChange(){

// 	$('.header_bg1').each(function(index){
// 		$(this).hide();
// 		$(this).delay(9000 * index).fadeIn(12000).fadeOut(10000);
// 	});
// 	setTimeout(bgChange, 55000);
// }

// bgChange();

$(function(){
	var current = 0

	$imgs = $('.header_bg1');
	imgAmount = $imgs.length;

	$($imgs.hide().get(Math.floor(Math.random() * $('.header_bg1:hidden').length))).show();

	window.setInterval(swapImages, 6500);

	function swapImages() {
		var $currentImg = $('.header_bg1:visible');
		var $nextImg = $('.header_bg1:hidden').eq(Math.floor(Math.random() * $('.header_bg1:hidden').length)); 
			speed = 7000;

		$currentImg.fadeOut(speed);
		$nextImg.fadeIn(speed);
	}

});