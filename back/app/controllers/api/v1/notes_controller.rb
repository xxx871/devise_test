module Api
  module V1
    class NotesController < ApplicationController
      before_action :authenticate_api_v1_user!

      def index
        @high_notes = current_api_v1_user.high_notes
        @low_notes = current_api_v1_user.low_notes
        render json: { high_notes: @high_notes, low_notes: @low_notes }
      end

      def show
        @high_note = current_api_v1_user.high_notes.find_by(id: params[:id])
        @low_note = current_api_v1_user.low_notes.find_by(id: params[:id])

        if @high_note
          render json: @high_note
        elsif @low_note
          render json: @low_note
        else
          render json: { error: 'Note not found' }, status: :not_found
        end
      end
    end
  end
end
