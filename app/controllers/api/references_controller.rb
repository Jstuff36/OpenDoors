class Api::ReferencesController < ApplicationController

  def index
    @references = Reference.where(host_id: references_params[:host_id])
    render "api/references/index"
  end

  def create
    @reference = Reference.new(references_params)
    if @reference.save
      render "api/references/create"
    else
      render json: @reference.errors.full_messages, status: 422
    end
  end

  private

  def references_params
    params.require(:reference).permit(
      :id,
      :host_id,
      :user_id,
      :comment
    )
  end

end
