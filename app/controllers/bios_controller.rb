class BiosController < ApplicationController
  def index
  	@bio = Bio.all
  end
end
