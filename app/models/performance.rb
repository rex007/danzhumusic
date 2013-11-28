class Performance < ActiveRecord::Base

	scope :current_year,lambda { where("date >= ? AND date <= ?",Date.today.beginning_of_year, Date.today.end_of_year) }
	scope :previous_year, lambda {where("date >= ? AND date <= ?",Date.today.beginning_of_year - 1.year, Date.today.end_of_year - 1.year)}

end
