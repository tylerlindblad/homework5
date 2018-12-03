class Homework2.Routers.CoursesRouter extends Backbone.Router
  initialize: (options) ->
    @courses = new Homework2.Collections.CoursesCollection()
    @courses.reset options.courses

  routes:
    "new"      : "newCourse"
    "index"    : "index"
    ":id/edit" : "edit"
    ":id"      : "show"
    ".*"        : "index"

  newCourse: ->
    @view = new Homework2.Views.Courses.NewView(collection: @courses)
    $("#courses").html(@view.render().el)

  index: ->
    @view = new Homework2.Views.Courses.IndexView(collection: @courses)
    $("#courses").html(@view.render().el)

  show: (id) ->
    course = @courses.get(id)

    @view = new Homework2.Views.Courses.ShowView(model: course)
    $("#courses").html(@view.render().el)

  edit: (id) ->
    course = @courses.get(id)

    @view = new Homework2.Views.Courses.EditView(model: course)
    $("#courses").html(@view.render().el)
