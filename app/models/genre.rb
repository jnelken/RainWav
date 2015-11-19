class Genre < ActiveRecord::Base

  validates :genre, presence: true, uniqueness: true

  has_many :tracks

end
