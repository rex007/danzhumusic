class ContactController < ApplicationController
	before_action :set_contact, only: [:show, :edit, :update, :destroy]


	def new
		@contacts = Contact.all
		@contact = Contact.new
	end

	def create
		@contact = Contact.new(contact_params)

		NotificationsMailer.new_message(@message).deliver
		redirect_to root_path
	end

	private

	def set_contact
		@contact = Contact.find(params[:id])
	end

	def contact_params
		params.require(:contact).permit(:name, :email, :subject) 
	end
	
end
