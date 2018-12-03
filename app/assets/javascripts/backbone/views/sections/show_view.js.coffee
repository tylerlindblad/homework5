Homework2.Views.Sections ||= {}

class Homework2.Views.Sections.ShowView extends Backbone.View
  template: JST["backbone/templates/sections/show"]

  render: ->
    @$el.html(@template(@model.toJSON() ))
    return this
