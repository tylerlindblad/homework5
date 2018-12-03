Homework2.Views.Sections ||= {}

class Homework2.Views.Sections.NewView extends Backbone.View
  template: JST["backbone/templates/sections/new"]

  events:
    "submit #new-sections": "save"

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
      success: (sections) =>
        @model = sections
        window.location.hash = "/#{@model.id}"

      error: (sections, jqXHR) =>
        @model.set({errors: $.parseJSON(jqXHR.responseText)})
    )

  render: ->
    @$el.html(@template(@model.toJSON() ))

    this.$("form").backboneLink(@model)

    return this
