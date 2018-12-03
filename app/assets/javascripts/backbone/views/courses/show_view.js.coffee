Homework2.Views.Courses ||= {}

class Homework2.Views.Courses.ShowView extends Backbone.View
  template: JST["backbone/templates/courses/show"]

  render: ->
    @$el.html(@template(@model.toJSON() ))
    return this
