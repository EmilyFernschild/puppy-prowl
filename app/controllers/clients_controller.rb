class ClientsController < ApplicationController
  before_action :set_client, only: %i[ show update destroy ]
  skip_before_action :authorize, only: :show
  skip_before_action :authorize, only: :create
  # GET /clients
  # def index
  #   @clients = Client.all

  #   render json: @clients
  # end

  # GET /clients/1
  def show
    render json: @client, status: :ok
  end

   # for autologin feat
   def user
    render json: @current_user
  end

  # POST /clients
  # modified for signup feat 
  def create
    @client = Client.create!(client_params)
    session[:client_id] = @client.id
    render json: @client, status: :created
  end

  # PATCH/PUT /clients/1
  def update
    @client.update!(client_params)
    render json: @client, status: :accepted
  end

  # DELETE /clients/1
  def destroy
    @client.destroy
    head.no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_client
      @client = Client.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def client_params
      params.permit(:client_name, :username, :password_digest, :email, :address, :phone_number)
    end
end
