# == Schema Information
#
# Table name: cities
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  state      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  lat        :float
#  lng        :float
#

class City < ApplicationRecord
  validates :name, :state, :lat, :lng, presence: true

  has_many :breweries
  has_many :guides
end
