class Homework2.Routers.EnrollmentsRouter extends Backbone.Router
  initialize: (options) ->
    @enrollments = new Homework2.Collections.EnrollmentsCollection()
    @enrollments.reset options.enrollments

  routes:
    "new"      : "newEnrollment"
    "index"    : "index"
    ":id/edit" : "edit"
    ":id"      : "show"
    ".*"        : "index"

  newEnrollment: ->
    @view = new Homework2.Views.Enrollments.NewView(collection: @enrollments)
    $("#enrollments").html(@view.render().el)

  index: ->
    @view = new Homework2.Views.Enrollments.IndexView(collection: @enrollments)
    $("#enrollments").html(@view.render().el)

  show: (id) ->
    enrollment = @enrollments.get(id)

    @view = new Homework2.Views.Enrollments.ShowView(model: enrollment)
    $("#enrollments").html(@view.render().el)

  edit: (id) ->
    enrollment = @enrollments.get(id)

    @view = new Homework2.Views.Enrollments.EditView(model: enrollment)
    $("#enrollments").html(@view.render().el)
