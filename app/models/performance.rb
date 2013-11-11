class Performance < ActiveRecord::Base

	scope :current_year,lambda { where("date >= ? AND date <= ?",Time.zone.now.beginning_of_year, Time.zone.now.end_of_year) }
	scope :next_year, lambda {where("date >= ? AND date <= ?",Time.zone.now.beginning_of_year + 1.year, Time.zone.now.end_of_year + 1.year)}
end
