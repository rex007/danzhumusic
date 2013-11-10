# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/


iconHover = ->
	new_normal = $('#icon_new img:first-child')
	new_hover = $('#icon_new img:last-child')
	edit_normal = $('#icon_edit img:first-child')
	edit_hover = $('#icon_edit img:last-child')
	destroy_normal = $('#icon_destroy img:first-child')
	destroy_hover = $('#icon_destroy img:last-child')

	new_normal.on('mouseenter',->
		new_hover.fadeIn(200))
	new_normal.on('mouseleave', ->
		new_hover.fadeOut(900))

	edit_normal.on('mouseenter',->
		edit_hover.fadeIn(200))
	edit_normal.on('mouseleave', ->
		edit_hover.fadeOut(900))

	destroy_normal.on('mouseenter',->
		destroy_hover.fadeIn(200))
	destroy_normal.on('mouseleave', ->
		destroy_hover.fadeOut(900))

newsPanel = ->
	alert "dela"

iconHover()