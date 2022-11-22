class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create
    skip_before_action :authorize, only: :destroy
    
    # for login feat
    # client or user ?
    def create
      client = Client.find_by(username: params[:username])
      if user&.authenticate(params[:password])
        session[:client_id] = client.id
        render json: client
      else
        render json: { errors: ["Invalid username or password"] }, status: :unauthorized
      end
    end

    # for logout feat
    def destroy
      session.delete :client_id
      head :no_content
    end
end
