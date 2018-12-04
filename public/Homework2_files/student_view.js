(function() {
  var base,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  (base = Homework2.Views).Students || (base.Students = {});

  Homework2.Views.Students.StudentView = (function(superClass) {
    extend(StudentView, superClass);

    function StudentView() {
      return StudentView.__super__.constructor.apply(this, arguments);
    }

    StudentView.prototype.template = JST["backbone/templates/students/student"];

    StudentView.prototype.events = {
      "click .destroy": "destroy"
    };

    StudentView.prototype.tagName = "tr";

    StudentView.prototype.destroy = function() {
      this.model.destroy();
      this.remove();
      return false;
    };

    StudentView.prototype.render = function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    };

    return StudentView;

  })(Backbone.View);

}).call(this);
