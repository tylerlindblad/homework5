class Homework2.Models.Enrollment extends Backbone.Model
  paramRoot: 'enrollment'

  defaults:
    section: null
    student: null

class Homework2.Collections.EnrollmentsCollection extends Backbone.Collection
  model: Homework2.Models.Enrollment
  url: '/enrollments'
