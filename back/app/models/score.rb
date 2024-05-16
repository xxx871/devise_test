class Score < ApplicationRecord
  validates :user_id, uniqueness: { scope: [:mode_id, :difficulty_id], message: 'should have one score per mode and difficulty' }

  belongs_to :user
  belongs_to :mode
  belongs_to :difficulty
end
