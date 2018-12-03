class Homework2.Routers.StudentsRouter extends Backbone.Router
  initialize: (options) ->
    @students = new Homework2.Collections.StudentsCollection()
    @students.reset options.students

  routes:
    "new"      : "newStudent"
    "index"    : "index"
    ":id/edit" : "edit"
    ":id"      : "show"
    ".*"        : "index"

  newStudent: ->
    @view = new Homework2.Views.Students.NewView(collection: @students)
    $("#students").html(@view.render().el)

  index: ->
    @view = new Homework2.Views.Students.IndexView(collection: @students)
    $("#students").html(@view.render().el)

  show: (id) ->
    student = @students.get(id)

    @view = new Homework2.Views.Students.ShowView(model: student)
    $("#students").html(@view.render().el)

  edit: (id) ->
    student = @students.get(id)

    @view = new Homework2.Views.Students.EditView(model: student)
    $("#students").html(@view.render().el)
