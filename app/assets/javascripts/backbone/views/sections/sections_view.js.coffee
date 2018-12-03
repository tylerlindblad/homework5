Homework2.Views.Sections ||= {}

class Homework2.Views.Sections.SectionsView extends Backbone.View
  template: JST["backbone/templates/sections/sections"]

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
