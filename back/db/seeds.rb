# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# ActiveRecord::Base.connection.execute("SET CONSTRAINTS ALL DEFERRED")
# GenderLowNote.delete_all
# GenderHighNote.delete_all

# Note.delete_all

# Note.create!([
#   { frequency: 97.999, ja_note_name: 'ソ2', en_note_name: 'G2' },
#   { frequency: 103.826, ja_note_name: 'ソ#2', en_note_name: 'G#2' },
#   { frequency: 110.000, ja_note_name: 'ラ2', en_note_name: 'A2' },
#   { frequency: 116.541, ja_note_name: 'ラ#2', en_note_name: 'A#2' },
#   { frequency: 123.471, ja_note_name: 'シ2', en_note_name: 'B2' },
#   { frequency: 130.813, ja_note_name: 'ド3', en_note_name: 'C3' },
#   { frequency: 138.591, ja_note_name: 'ド#3', en_note_name: 'C#3' },
#   { frequency: 146.832, ja_note_name: 'レ3', en_note_name: 'D3' },
#   { frequency: 155.563, ja_note_name: 'レ#3', en_note_name: 'D#3' },
#   { frequency: 164.814, ja_note_name: 'ミ3', en_note_name: 'E3' },
#   { frequency: 174.614, ja_note_name: 'ファ3', en_note_name: 'F3' },
#   { frequency: 184.997, ja_note_name: 'ファ#3', en_note_name: 'F#3' },
#   { frequency: 195.998, ja_note_name: 'ソ3', en_note_name: 'G3' },
#   { frequency: 207.652, ja_note_name: 'ソ#3', en_note_name: 'G#3' },
#   { frequency: 220.000, ja_note_name: 'ラ3', en_note_name: 'A3' },
#   { frequency: 233.082, ja_note_name: 'ラ#3', en_note_name: 'A#3' },
#   { frequency: 246.942, ja_note_name: 'シ3', en_note_name: 'B3' },
#   { frequency: 261.626, ja_note_name: 'ド4', en_note_name: 'C4' },
#   { frequency: 277.183, ja_note_name: 'ド#4', en_note_name: 'C#4' },
#   { frequency: 293.665, ja_note_name: 'レ4', en_note_name: 'D4' },
#   { frequency: 311.127, ja_note_name: 'レ#4', en_note_name: 'D#4' },
#   { frequency: 329.628, ja_note_name: 'ミ4', en_note_name: 'E4' },
#   { frequency: 349.228, ja_note_name: 'ファ4', en_note_name: 'F4' },
#   { frequency: 369.994, ja_note_name: 'ファ#4', en_note_name: 'F#4' },
#   { frequency: 391.995, ja_note_name: 'ソ4', en_note_name: 'G4' },
#   { frequency: 415.305, ja_note_name: 'ソ#4', en_note_name: 'G#4' },
#   { frequency: 440.000, ja_note_name: 'ラ4', en_note_name: 'A4' },
#   { frequency: 466.164, ja_note_name: 'ラ#4', en_note_name: 'A#4' },
#   { frequency: 493.883, ja_note_name: 'シ4', en_note_name: 'B4' },
#   { frequency: 523.251, ja_note_name: 'ド5', en_note_name: 'C5' },
#   { frequency: 554.365, ja_note_name: 'ド#5', en_note_name: 'C#5' },
#   { frequency: 587.330, ja_note_name: 'レ5', en_note_name: 'D5' },
#   { frequency: 622.254, ja_note_name: 'レ#5', en_note_name: 'D#5' },
#   { frequency: 659.255, ja_note_name: 'ミ5', en_note_name: 'E5' },
#   { frequency: 698.456, ja_note_name: 'ファ5', en_note_name: 'F5' },
#   { frequency: 739.989, ja_note_name: 'ファ#5', en_note_name: 'F#5' },
#   { frequency: 783.991, ja_note_name: 'ソ5', en_note_name: 'G5' },
#   { frequency: 830.609, ja_note_name: 'ソ#5', en_note_name: 'G#5' },
#   { frequency: 880.000, ja_note_name: 'ラ5', en_note_name: 'A5' },
#   { frequency: 932.328, ja_note_name: 'ラ#5', en_note_name: 'A#5' },
#   { frequency: 987.767, ja_note_name: 'シ5', en_note_name: 'B5' },
#   { frequency: 1046.502, ja_note_name: 'ド6', en_note_name: 'C6' }
# ])

# ActiveRecord::Base.connection.execute("SET CONSTRAINTS ALL IMMEDIATE")

GenderHighNote.create!([
  { gender_id: 1, note_id: 32 },
  { gender_id: 2, note_id: 39 },
])

GenderLowNote.create!([
  { gender_id: 1, note_id: 8 },
  { gender_id: 2, note_id: 18 },
])

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

# Mode.create!([
#   { name: '通常' },
#   { name: 'ハモり' },
#   { name: '練習' }
# ])

# Difficulty.create!([
#   { name: '簡単' },
#   { name: '普通' },
#   { name: '難しい' }
# ])


# Note.create!([
#   { name: 'C4', frequency: 261.63 },
#   { name: 'D4', frequency: 293.66 },
#   { name: 'E4', frequency: 329.63 },
#   { name: 'F4', frequency: 349.23 },
#   { name: 'G4', frequency: 392.00 },
#   { name: 'A4', frequency: 440.00 },
#   { name: 'B4', frequency: 493.88 }
# ])


# frequency: 27.500, ja_note_name:ラ0,      en_note_name: A0
# frequency: 29.135, ja_note_name:ラ#0,     en_note_name: A#0
# frequency: 30.868, ja_note_name:シ0,      en_note_name: B0
# frequency: 32.703, ja_note_name:ド1,      en_note_name: C1
# frequency: 34.648, ja_note_name:ド#1,     en_note_name: C#1
# frequency: 36.708, ja_note_name:レ1,      en_note_name: D1
# frequency: 38.891, ja_note_name:レ#1,     en_note_name: D#1
# frequency: 41.203, ja_note_name:ミ1,      en_note_name: E1
# frequency: 43.654, ja_note_name:ファ1,    en_note_name: F1
# frequency: 46.249, ja_note_name:ファ#1,   en_note_name: F#1
# frequency: 48.999, ja_note_name:ソ1,      en_note_name: G1
# frequency: 51.913, ja_note_name:ソ#1,     en_note_name: G#1
# frequency: 55.000, ja_note_name:ラ1,      en_note_name: A1
# frequency: 58.270, ja_note_name:ラ#1,     en_note_name: A#1
# frequency: 61.735, ja_note_name:シ1,      en_note_name: B1
# frequency: 65.406, ja_note_name:ド2,      en_note_name: C2	
# frequency: 69.296, ja_note_name:ド#2,     en_note_name: C#2	
# frequency: 73.416, ja_note_name:レ2,      en_note_name: D2	
# frequency: 77.782, ja_note_name:レ#2,     en_note_name: D#2	
# frequency: 82.407, ja_note_name:ミ2,      en_note_name: E2	
# frequency: 87.307, ja_note_name:ファ2,    en_note_name: F2	
# frequency: 92.499, ja_note_name:ファ#2,   en_note_name: F#2	
# frequency: 97.999, ja_note_name:ソ2,      en_note_name: G2	
# frequency: 103.826, ja_note_name:ソ#2,    en_note_name: G#2	
# frequency: 110.000, ja_note_name:ラ2,     en_note_name: A2	
# frequency: 116.541, ja_note_name:ラ#2,    en_note_name: A#2	
# frequency: 123.471, ja_note_name:シ2,     en_note_name: B2	
# frequency: 130.813, ja_note_name:ド3,     en_note_name: C3	
# frequency: 138.591, ja_note_name:ド#3,    en_note_name: C#3	
# frequency: 146.832, ja_note_name:レ3,     en_note_name: D3	
# frequency: 155.563, ja_note_name:レ#3,    en_note_name: D#3	
# frequency: 164.814, ja_note_name:ミ3,     en_note_name: E3	
# frequency: 174.614, ja_note_name:ファ3,   en_note_name: F3	
# frequency: 184.997, ja_note_name:ファ#3,  en_note_name: F#3	
# frequency: 195.998, ja_note_name:ソ3,     en_note_name: G3	
# frequency: 207.652, ja_note_name:ソ#3,    en_note_name: G#3	
# frequency: 220.000, ja_note_name:ラ3,     en_note_name: A3	
# frequency: 233.082, ja_note_name:ラ#3,    en_note_name: A#3	
# frequency: 246.942, ja_note_name:シ3,     en_note_name: B3	
# frequency: 261.626, ja_note_name:ド4,     en_note_name: C4	
# frequency: 277.183, ja_note_name:ド#4,    en_note_name: C#4	
# frequency: 293.665, ja_note_name:レ4,     en_note_name: D4	
# frequency: 311.127, ja_note_name:レ#4,    en_note_name: D#4	
# frequency: 329.628, ja_note_name:ミ4,     en_note_name: E4	
# frequency: 349.228, ja_note_name:ファ4,   en_note_name: F4	
# frequency: 369.994, ja_note_name:ファ#4,  en_note_name: F#4	
# frequency: 391.995, ja_note_name:ソ4,     en_note_name: G4	
# frequency: 415.305, ja_note_name:ソ#4,    en_note_name: G#4	
# frequency: 440.000, ja_note_name:ラ4,     en_note_name: A4	
# frequency: 466.164, ja_note_name:ラ#4,    en_note_name: A#4	
# frequency: 493.883, ja_note_name:シ4,     en_note_name: B4	
# frequency: 523.251, ja_note_name:ド5,     en_note_name: C5	
# frequency: 554.365, ja_note_name:ド#5,    en_note_name: C#5	
# frequency: 587.330, ja_note_name:レ5,     en_note_name: D5	
# frequency: 622.254, ja_note_name:レ#5,    en_note_name: D#5	
# frequency: 659.255, ja_note_name:ミ5,     en_note_name: E5	
# frequency: 698.456, ja_note_name:ファ5,   en_note_name: F5	
# frequency: 739.989, ja_note_name:ファ#5,  en_note_name: F#5	
# frequency: 783.991, ja_note_name:ソ5,     en_note_name: G5	
# frequency: 830.609, ja_note_name:ソ#5,    en_note_name: G#5	
# frequency: 880.000, ja_note_name:ラ5,     en_note_name: A5	
# frequency: 932.328, ja_note_name:ラ#5,    en_note_name: A#5	
# frequency: 987.767, ja_note_name:シ5,     en_note_name: B5	
# frequency: 1046.502, ja_note_name:ド6,    en_note_name: C6	
# frequency: 1108.731, ja_note_name:ド#6,   en_note_name: C#6	
# frequency: 1174.659, ja_note_name:レ6,    en_note_name: D6	
# frequency: 1244.508, ja_note_name:レ#6,   en_note_name: D#6	
# frequency: 1318.510, ja_note_name:ミ6,    en_note_name: E6	
# frequency: 1396.913, ja_note_name:ファ6,  en_note_name: F6	
# frequency: 1479.978, ja_note_name:ファ#6, en_note_name: F#6	
# frequency: 1567.982, ja_note_name:ソ6,    en_note_name: G6	
# frequency: 1661.219, ja_note_name:ソ#6,   en_note_name: G#6	
# frequency: 1760.000, ja_note_name:ラ6,    en_note_name: A6	
# frequency: 1864.655, ja_note_name:ラ#6,   en_note_name: A#6	
# frequency: 1975.533, ja_note_name:シ6,    en_note_name: B6	
# frequency: 2093.005, ja_note_name:ド7,    en_note_name: C7	
# frequency: 2217.461, ja_note_name:ド#7,   en_note_name: C#7	
# frequency: 2349.318, ja_note_name:レ7,    en_note_name: D7	
# frequency: 2489.016, ja_note_name:レ#7,   en_note_name: D#7	
# frequency: 2637.020, ja_note_name:ミ7,    en_note_name: E7	
# frequency: 2793.826, ja_note_name:ファ7,  en_note_name: F7	
# frequency: 2959.955, ja_note_name:ファ#7, en_note_name: F#7	
# frequency: 3135.963, ja_note_name:ソ7,    en_note_name: G7	
# frequency: 3322.438, ja_note_name:ソ#7,   en_note_name: G#7	
# frequency: 3520.000, ja_note_name:ラ7,    en_note_name: A7	
# frequency: 3729.310, ja_note_name:ラ#7,   en_note_name: A#7	
# frequency: 3951.066, ja_note_name:シ7,    en_note_name: B7	
# frequency: 4186.009, ja_note_name:ド8,    en_note_name: C8

