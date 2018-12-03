Homework2.Views.Sections ||= {}

class Homework2.Views.Sections.IndexView extends Backbone.View
  template: JST["backbone/templates/sections/index"]

  initialize: () ->
    @collection.bind('reset', @addAll)

  addAll: () =>
    @collection.each(@addOne)

  addOne: (sections) =>
    view = new Homework2.Views.Sections.SectionsView({model : sections})
    @$("tbody").append(view.render().el)

  render: =>
    @$el.html(@template(sections: @collection.toJSON() ))
    @addAll()

    return this
