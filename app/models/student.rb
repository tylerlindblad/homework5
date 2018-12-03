class Student < ActiveRecord::Base
  has_many :enrollments, dependent: :delete_all
  has_many :sections, through: :enrollments
end
