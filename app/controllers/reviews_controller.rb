class ReviewsController < ApplicationController
  before_action :set_review, only: %i[ show update destroy ]
  skip_before_action :authorize
  # GET /reviews
  def index
    render json: Review.all, status: :ok
  end

  # GET /reviews/1
  def show
    render json: @review, status: :ok
  end

  # POST /reviews
  def create
    @review = Review.create!(review_params)
    render json: @review, status: :created
  end

  # PATCH/PUT /reviews/1
  # def update
  #   if @review.update(review_params)
  #     render json: @review
  #   else
  #     render json: @review.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /reviews/1
  def destroy
    @review.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def review_params
      params.permit(:client_id, :walker_id, :date, :comment)
    end
end
