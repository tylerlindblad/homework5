class Homework2.Models.Sections extends Backbone.Model
  paramRoot: 'section'

  defaults:
    course: null
    semester: null
    number: null
    room_number: null

class Homework2.Collections.SectionsCollection extends Backbone.Collection
  model: Homework2.Models.Sections
  url: '/sections'
