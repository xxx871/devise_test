# back/app/controllers/api/v1/notes_controller.rb
module Api
  module V1
    class NotesController < ApplicationController
      def index
        notes = Note.all
        render json: notes
      end

      def show
        note = Note.find_by(id: params[:id])
        if note
          render json: note
        else
          render json: { error: 'Note not found' }, status: :not_found
        end
      end

      def random_note
        notes = if current_api_v1_user.high_notes.any? && current_api_v1_user.low_notes.any?
                  Note.where(id: current_api_v1_user.low_notes.first.id..current_api_v1_user.high_notes.first.id)
                      .where.not("en_note_name LIKE ?", "%#%")
                else
                  gender_range = current_api_v1_user.gender == '男性' ? (1..49) : (50..88) # 例として男性と女性の音域をIDで分ける
                  Note.where(id: gender_range).where.not("en_note_name LIKE ?", "%#%")
                end
        random_note = notes.sample
        render json: random_note
      end
    end
  end
end
