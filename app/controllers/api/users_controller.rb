class Api::UsersController < ApplicationController

  def index
    @user = User.all
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def update
    @user = User.find(params[:id])
    debugger;
    if @user.update_attributes(user_params)
      render "api/users/show"
    else
      render json: @user.error.full_messages, status: 422
    end
  end



  private

  def user_params
    params.require(:user).permit(
      :id,
      :email,
      :password,
      :firstname,
      :lastname,
      :city,
      :country,
      :age,
      :occupation,
      :about,
      :sex,
      :zipcode,
      :address,
      location: [],
      languages: []
    )
  end

end
