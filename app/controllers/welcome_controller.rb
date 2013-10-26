class WelcomeController < ApplicationController

	
  def index
  	@blogs = Blog.all.order("created_at DESC").limit(2)
  	@blog = Blog.new
  end

  def new
  	@blog = Blog.new
  end

end