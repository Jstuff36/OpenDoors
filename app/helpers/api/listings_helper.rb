module Api::ListingsHelper

  def user_list(city)
    users = Api::Users.where(city: city)
    render json: users
  end

end
