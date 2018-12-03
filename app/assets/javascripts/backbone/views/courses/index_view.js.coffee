Homework2.Views.Courses ||= {}

class Homework2.Views.Courses.IndexView extends Backbone.View
  template: JST["backbone/templates/courses/index"]

  initialize: () ->
    @collection.bind('reset', @addAll)

  addAll: () =>
    @collection.each(@addOne)

  addOne: (course) =>
    view = new Homework2.Views.Courses.CourseView({model : course})
    @$("tbody").append(view.render().el)

  render: =>
    @$el.html(@template(courses: @collection.toJSON() ))
    @addAll()

    return this
