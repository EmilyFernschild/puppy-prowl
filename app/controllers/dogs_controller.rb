class DogsController < ApplicationController
  before_action :set_dog, only: %i[ show update destroy ]
  # skip_before_action :authorize
  # GET /dogs
  def index
    render json: Dog.all, status: :ok
  end

  # GET /dogs/1
  def show
    render json: @dog, status: :ok
  end

  # POST /dogs
  # modified to only create a new dog when signed in 
  def create
    @dog = @current_user.dogs.create!(dog_params)
    render json: @dog, status: :created
  end

  # PATCH/PUT /dogs/1
  def update
    render json: @dog.update!(dog_params), status: :accepted
  end

  # DELETE /dogs/1
  def destroy
    @dog.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dog
      @dog = Dog.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def dog_params
      params.permit(:dog_image, :dog_name, :gender, :age, :size, :client_id)
    end
end
