class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.location = ["change this"]
    if @user.save
      sign_in(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  private

  def user_params
    params.require(:user).permit(
      :email,
      :password,
      :firstname,
      :lastname,
      :city,
      :country,
      :age,
      :occupation,
      :about,
      # location: [],
      languages: []
    )
  end

end
