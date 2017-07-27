class Api::TripsController < ApplicationController

  def index
    @trips1 = Trip.where(user_id: trips_params[:id])
    @trips2 = Trip.where(host_id: trips_params[:id])
    @trips = @trips1 + @trips2
  end

  def create
    @trip = Trip.new(trips_params)
    if @trip.save
      render "api/trips/create"
    else
      render json: @trip.errors.full_messages, status: 422
    end

  end

  def update
    @trip = Trip.find(params[:id])
    if @trip.update_attributes(trips_params)
      render "api/trips/update"
    else
      render json: @trip.errors.full_messages, status: 422
    end

  end

  def destroy
    trip = Trip.find(trips_params[:id])
    trip.destroy
  end

  private

  def trips_params
    params.require(:trips).permit(
      :id,
      :host_id,
      :user_id,
      :status,
      :message,
      dates: []
    )
  end

end
