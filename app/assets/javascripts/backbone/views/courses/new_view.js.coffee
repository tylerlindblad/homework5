Homework2.Views.Courses ||= {}

class Homework2.Views.Courses.NewView extends Backbone.View
  template: JST["backbone/templates/courses/new"]

  events:
    "submit #new-course": "save"

  constructor: (options) ->
    super(options)
    @model = new @collection.model()

    @model.bind("change:errors", () =>
      this.render()
    )

  save: (e) ->
    e.preventDefault()
    e.stopPropagation()

    @model.unset("errors")

    @collection.create(@model.toJSON(),
      success: (course) =>
        @model = course
        window.location.hash = "/#{@model.id}"

      error: (course, jqXHR) =>
        @model.set({errors: $.parseJSON(jqXHR.responseText)})
    )

  render: ->
    @$el.html(@template(@model.toJSON() ))

    this.$("form").backboneLink(@model)

    return this
