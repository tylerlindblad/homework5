Homework2.Views.Sections ||= {}

class Homework2.Views.Sections.EditView extends Backbone.View
  template: JST["backbone/templates/sections/edit"]

  events:
    "submit #edit-sections": "update"

  update: (e) ->
    e.preventDefault()
    e.stopPropagation()

    @model.save(null,
      success: (sections) =>
        @model = sections
        window.location.hash = "/#{@model.id}"
    )

  render: ->
    @$el.html(@template(@model.toJSON() ))

    this.$("form").backboneLink(@model)

    return this
