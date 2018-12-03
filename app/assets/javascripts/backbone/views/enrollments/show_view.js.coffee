Homework2.Views.Enrollments ||= {}

class Homework2.Views.Enrollments.ShowView extends Backbone.View
  template: JST["backbone/templates/enrollments/show"]

  render: ->
    @$el.html(@template(@model.toJSON() ))
    return this
