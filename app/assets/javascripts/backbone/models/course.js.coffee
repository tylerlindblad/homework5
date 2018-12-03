class Homework2.Models.Course extends Backbone.Model
  paramRoot: 'course'

  defaults:
    name: null
    department: null
    number: null
    credit_hours: null

class Homework2.Collections.CoursesCollection extends Backbone.Collection
  model: Homework2.Models.Course
  url: '/courses'
