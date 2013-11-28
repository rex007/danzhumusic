class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :load


  def load
  	@blogs=Blog.all
  	@blog = Blog.new
  	@performances = Performance.all
  	@performance = Performance.new
  end


  

end
