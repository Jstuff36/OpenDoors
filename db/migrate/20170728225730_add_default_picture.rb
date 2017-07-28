class AddDefaultPicture < ActiveRecord::Migration[5.1]
  def change
    change_column_default(:users, :picture, "https://res.cloudinary.com/dax5cdjeh/image/upload/v1501282474/batman-for-facebook_va9pxm.jpg")
  end
end
