class Api::V1::Auth::CallbackController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    user = User.find_or_initialize_by(provider: params[:provider], uid: params[:uid])
    user.email = params[:email]
    user.name = params[:name]
    user.password = Devise.friendly_token[0, 20] if user.new_record?

    if user.save
      render json: { status: 'success', data: user }, status: :ok
    else
      render json: { status: 'error', errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end
end