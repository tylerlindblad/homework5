(function() {
  var base,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  (base = Homework2.Views).Students || (base.Students = {});

  Homework2.Views.Students.ShowView = (function(superClass) {
    extend(ShowView, superClass);

    function ShowView() {
      return ShowView.__super__.constructor.apply(this, arguments);
    }

    ShowView.prototype.template = JST["backbone/templates/students/show"];

    ShowView.prototype.render = function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    };

    return ShowView;

  })(Backbone.View);

}).call(this);
