class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    before_action :authorize

    def authorize
        @current_user = Client.find_by(id: session[:client_id])
        render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    end

    private

    def render_not_found error
        render json: {error: "#{error.model} not found" }, status: :not_found
    end

    def render_unprocessable_entity invalid
        render json: {errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
