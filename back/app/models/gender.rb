class Gender < ApplicationRecord
  has_one :gender_high_note
  has_one :high_note, through: :gender_high_note, source: :note
  has_one :gender_low_note
  has_one :low_note, through: :gender_low_note, source: :note
  has_many :users
end
