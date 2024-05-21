# app/controllers/api/v1/scores_controller.rb
module Api
  module V1
    class ScoresController < ApplicationController
      before_action :authenticate_api_v1_user!

      def create
        score = current_api_v1_user.scores.new(score_params)
        if score.save
          render json: score, status: :created
        else
          render json: { errors: score.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def score_params
        params.require(:score).permit(:mode_id, :difficulty_id, :score)
      end
    end
  end
end
