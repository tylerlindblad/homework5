Homework2.Views.Courses ||= {}

class Homework2.Views.Courses.EditView extends Backbone.View
  template: JST["backbone/templates/courses/edit"]

  events:
    "submit #edit-course": "update"

  update: (e) ->
    e.preventDefault()
    e.stopPropagation()

    @model.save(null,
      success: (course) =>
        @model = course
        window.location.hash = "/#{@model.id}"
    )

  render: ->
    @$el.html(@template(@model.toJSON() ))

    this.$("form").backboneLink(@model)

    return this
