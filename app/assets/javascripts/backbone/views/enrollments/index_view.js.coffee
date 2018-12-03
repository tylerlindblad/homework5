Homework2.Views.Enrollments ||= {}

class Homework2.Views.Enrollments.IndexView extends Backbone.View
  template: JST["backbone/templates/enrollments/index"]

  initialize: () ->
    @collection.bind('reset', @addAll)

  addAll: () =>
    @collection.each(@addOne)

  addOne: (enrollment) =>
    view = new Homework2.Views.Enrollments.EnrollmentView({model : enrollment})
    @$("tbody").append(view.render().el)

  render: =>
    @$el.html(@template(enrollments: @collection.toJSON() ))
    @addAll()

    return this
