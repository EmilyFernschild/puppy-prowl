class AppointmentsController < ApplicationController
  skip_before_action :authorize
  # GET /appointments
  def index
    render json: Appointment.all, status: :ok
  end

  # GET /appointments/1
  def show
    render json: set_appointment, status: :ok
  end

  # POST /appointments
  def create
    appointments = @current_user.appointments.create!(appointment_params)
    render json: @current_user.appointments, status: :created
  end

  # PATCH/PUT /appointments/1
  def update
    appointment = set_appointment.update!(appointment_params)
    render json: appointment, status: :accepted
  end

  # DELETE /appointments/1
  # dependent on login? 
  def destroy
    set_appointment.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_appointment
      Appointment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def appointment_params
      params.permit(:client_id, :walker_id, :number_of_dogs, :group_walks, :appointment)
    end
end
