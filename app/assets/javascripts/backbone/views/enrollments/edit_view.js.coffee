Homework2.Views.Enrollments ||= {}

class Homework2.Views.Enrollments.EditView extends Backbone.View
  template: JST["backbone/templates/enrollments/edit"]

  events:
    "submit #edit-enrollment": "update"

  update: (e) ->
    e.preventDefault()
    e.stopPropagation()

    @model.save(null,
      success: (enrollment) =>
        @model = enrollment
        window.location.hash = "/#{@model.id}"
    )

  render: ->
    @$el.html(@template(@model.toJSON() ))

    this.$("form").backboneLink(@model)

    return this
