class WelcomeController < ApplicationController


  def index
  	@blogs = Blog.all.order("created_at DESC").limit(2)
  	@performances = Performance.all.limit(3)
  end

end