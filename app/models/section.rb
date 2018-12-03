class Section < ActiveRecord::Base
  belongs_to :course
  has_many :enrollments
  has_many :students, through: :enrollments
  def secNum
    "#{course.name} #{number} #{semester}"
  end
end

