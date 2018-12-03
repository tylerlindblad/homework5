class Homework2.Models.Student extends Backbone.Model
  paramRoot: 'student'

  defaults:
    name: null
    email: null
    phone: null
    advisor: null

class Homework2.Collections.StudentsCollection extends Backbone.Collection
  model: Homework2.Models.Student
  url: '/students'
