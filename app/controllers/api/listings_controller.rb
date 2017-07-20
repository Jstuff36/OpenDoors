class Api::ListingsController < ApplicationController

  include Api::ListingsHelper

  def index
    #Can I combine these two statements into two?
    # @listings = Users.all
    # @litings_filterd = @listing.where(city: params[:city])

    # @listings_filtered = user_list(params[:city])
    @listings_filtered = User.find_by_location(listing_params[:city])

    if @listings_filtered
      render "api/listings/index"
    else
      render @listings.errors.full_messages, status: 404
    end

  end

  def show
    @listing = User.find(listing_params[:id])
    if @listing
      render "api/listings/show"
    else
      render @listings.errors.full_messages, status: 404
    end
  end

  private

  def listing_params
    params.require(:user).permit(
      :id,
      :city,
      :email
    )
  end

end
