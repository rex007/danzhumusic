class ContactController < ApplicationController

	def new
		@contact=Contact.new
	end

	def create
		@contact=Contact.new(params[:contact])
		@contact.request = request
		if @contact.deliver
			flash.now[:error]=nill
			flash.now[:notice]= "Thank your for your message!"
		else
			flash.now[:error]= "Cannot send message"
			render :new
		end
	end
end
