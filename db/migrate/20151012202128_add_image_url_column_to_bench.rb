class AddImageUrlColumnToBench < ActiveRecord::Migration
  def change
    add_column :benches, :image_url, :string, default: "http://placecorgi.com/500/500", null: false
  end
end
