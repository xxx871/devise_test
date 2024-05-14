class Api::V1::Auth::GithubController < ApplicationController
  def create
    user_data = params.require(:user).permit(:email, :name, :id, :image)
    user = User.find_or_create_by(email: user_data[:email]) do |user|
      user.name = user_data[:name]
      user.password = SecureRandom.hex(10)
    end

    if user.persisted?
      # Devise Token Authのヘルパーを使ってトークンを生成
      token = user.create_new_auth_token

      # トークンをレスポンスヘッダーにセット
      response.headers.merge!(token)

      render json: { status: 'success', data: user }
    else
      render json: { status: 'error', message: user.errors.full_messages }, status: :unprocessable_entity
    end
  end
end
