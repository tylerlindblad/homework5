Homework2.Views.Enrollments ||= {}

class Homework2.Views.Enrollments.NewView extends Backbone.View
  template: JST["backbone/templates/enrollments/new"]

  events:
    "submit #new-enrollment": "save"

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
      success: (enrollment) =>
        @model = enrollment
        window.location.hash = "/#{@model.id}"

      error: (enrollment, jqXHR) =>
        @model.set({errors: $.parseJSON(jqXHR.responseText)})
    )

  render: ->
    @$el.html(@template(@model.toJSON() ))

    this.$("form").backboneLink(@model)

    return this
