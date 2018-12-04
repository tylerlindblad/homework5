(function() {
  var base,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  (base = Homework2.Views).Sections || (base.Sections = {});

  Homework2.Views.Sections.SectionsView = (function(superClass) {
    extend(SectionsView, superClass);

    function SectionsView() {
      return SectionsView.__super__.constructor.apply(this, arguments);
    }

    SectionsView.prototype.template = JST["backbone/templates/sections/sections"];

    SectionsView.prototype.events = {
      "click .destroy": "destroy"
    };

    SectionsView.prototype.tagName = "tr";

    SectionsView.prototype.destroy = function() {
      this.model.destroy();
      this.remove();
      return false;
    };

    SectionsView.prototype.render = function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    };

    return SectionsView;

  })(Backbone.View);

}).call(this);
