class WalkersController < ApplicationController
  before_action :set_walker, only: %i[ show update destroy ]
  skip_before_action :authorize
  # GET /walkers
  def index
    render json: Walker.all, status: :ok
  end

  # GET /walkers/1
  def show
    render json: @walker
  end

  # POST /walkers
  def create
    @walker = Walker.create!(walker_params)
    render json: @walker, status: :created
  end

  # PATCH/PUT /walkers/1
  # def update
  #   @walker.update!(walker_params)
  #   render json: @walker, status: :accepted
  # end

  # DELETE /walkers/1
  def destroy
    @walker.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_walker
      @walker = Walker.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def walker_params
      params.permit(:walker_name, :walker_email, :location, :rates, :services)
    end
end
