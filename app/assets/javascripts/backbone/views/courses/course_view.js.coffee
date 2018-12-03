Homework2.Views.Courses ||= {}

class Homework2.Views.Courses.CourseView extends Backbone.View
  template: JST["backbone/templates/courses/course"]

  events:
    "click .destroy" : "destroy"

  tagName: "tr"

  destroy: () ->
    @model.destroy()
    this.remove()

    return false

  render: ->
    @$el.html(@template(@model.toJSON() ))
    return this
