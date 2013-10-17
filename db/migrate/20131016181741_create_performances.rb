class CreatePerformances < ActiveRecord::Migration
  def change
    create_table :performances do |t|
      t.date :date
      t.string :location
      t.text :description

      t.timestamps
    end
  end
end
