# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Note.create!([
#   { name: 'C4', frequency: 261.63 },
#   { name: 'D4', frequency: 293.66 },
#   { name: 'E4', frequency: 329.63 },
#   { name: 'F4', frequency: 349.23 },
#   { name: 'G4', frequency: 392.00 },
#   { name: 'A4', frequency: 440.00 },
#   { name: 'B4', frequency: 493.88 }
# ])

# Gender.create!([
#   { name: '男性' },
#   { name: '女性' }
# ])

Mode.create!([
  { name: '通常' },
  { name: 'ハモり' },
  { name: '練習' }
])

Difficulty.create!([
  { name: '簡単' },
  { name: '普通' },
  { name: '難しい' }
])