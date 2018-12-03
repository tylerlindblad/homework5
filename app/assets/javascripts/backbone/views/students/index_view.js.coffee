Homework2.Views.Students ||= {}

class Homework2.Views.Students.IndexView extends Backbone.View
  template: JST["backbone/templates/students/index"]

  initialize: () ->
    @collection.bind('reset', @addAll)

  addAll: () =>
    @collection.each(@addOne)

  addOne: (student) =>
    view = new Homework2.Views.Students.StudentView({model : student})
    @$("tbody").append(view.render().el)

  render: =>
    @$el.html(@template(students: @collection.toJSON() ))
    @addAll()

    return this
