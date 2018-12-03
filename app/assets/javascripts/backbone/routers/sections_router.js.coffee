class Homework2.Routers.SectionsRouter extends Backbone.Router
  initialize: (options) ->
    @sections = new Homework2.Collections.SectionsCollection()
    @sections.reset options.sections

  routes:
    "new"      : "newSections"
    "index"    : "index"
    ":id/edit" : "edit"
    ":id"      : "show"
    ".*"        : "index"

  newSections: ->
    @view = new Homework2.Views.Sections.NewView(collection: @sections)
    $("#sections").html(@view.render().el)

  index: ->
    @view = new Homework2.Views.Sections.IndexView(collection: @sections)
    $("#sections").html(@view.render().el)

  show: (id) ->
    sections = @sections.get(id)

    @view = new Homework2.Views.Sections.ShowView(model: sections)
    $("#sections").html(@view.render().el)

  edit: (id) ->
    sections = @sections.get(id)

    @view = new Homework2.Views.Sections.EditView(model: sections)
    $("#sections").html(@view.render().el)
