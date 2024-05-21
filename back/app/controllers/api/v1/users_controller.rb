module Api
  module V1
    class UsersController < ApplicationController
      before_action :authenticate_api_v1_user!

      def show
        @user = current_api_v1_user
        render json: {
          id: @user.id,
          name: @user.name,
          email: @user.email,
          gender: @user.gender&.name,  # ここでgenderがオブジェクトか確認
          created_at: @user.created_at,
          updated_at: @user.updated_at,
          user_high_note: @user.high_note&.name,  # ここでhigh_noteがオブジェクトか確認
          user_low_note: @user.low_note&.name,  # ここでlow_noteがオブジェクトか確認
          scores: @user.scores.map { |score| 
            {
              id: score.id,
              mode: score.mode.name,
              difficulty: score.difficulty.name,
              score: score.score
            }
          }
        }
      end

      def update
        @user = current_api_v1_user

        # Update user attributes
        @user.assign_attributes(user_params)

        # Update related models
        if params[:user][:gender].present?
          gender = Gender.find_by(name: params[:user][:gender])
          @user.gender = gender
        else
          @user.gender = @user.gender
        end

        if params[:user][:high_note].present?
          high_note = Note.find_by(name: params[:user][:high_note])
          @user.high_note = high_note
        else
          @user.high_note = @user.high_note
        end

        if params[:user][:low_note].present?
          low_note = Note.find_by(name: params[:user][:low_note])
          @user.low_note = low_note
        else
          @user.low_note = @user.low_note
        end

        if @user.save
          render json: {
            id: @user.id,
            name: @user.name,
            email: @user.email,
            gender: @user.gender&.name,  # 更新されたデータを返す
            user_high_note: @user.high_note&.name,  # 更新されたデータを返す
            user_low_note: @user.low_note&.name,  # 更新されたデータを返す
            updated_at: @user.updated_at
          }, status: :ok
        else
          render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      def random_note
        user = current_api_v1_user
        high_note = user.high_notes.first
        low_note = user.low_notes.first

        if high_note && low_note
          notes = Note.where(id: low_note.id..high_note.id).where.not("name LIKE ?", "%#%")
        elsif user.gender
          gender_id = user.gender_id
          gender_high_note = GenderHighNote.find_by(gender_id: gender_id)
          gender_low_note = GenderLowNote.find_by(gender_id: gender_id)
          if gender_high_note && gender_low_note
            notes = Note.where(id: gender_low_note.note_id..gender_high_note.note_id).where.not("name LIKE ?", "%#%")
          else
            render json: { error: 'Gender note range not set' }, status: :unprocessable_entity and return
          end
        else
          render json: { error: 'User note range or gender not set' }, status: :unprocessable_entity and return
        end

        random_note = notes.sample
        render json: random_note
      end

      private

      def user_params
        params.require(:user).permit(:name, :email)
      end
    end
  end
end
