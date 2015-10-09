class CreateBenches < ActiveRecord::Migration
  def change
    create_table :benches do |t|
      t.string :description, null: false
      t.decimal :lat, null: false
      t.decimal :lng, null: false

      t.timestamps null: false
    end
  end
end
