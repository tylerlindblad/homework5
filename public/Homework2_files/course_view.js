(function() {
  var base,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  (base = Homework2.Views).Courses || (base.Courses = {});

  Homework2.Views.Courses.CourseView = (function(superClass) {
    extend(CourseView, superClass);

    function CourseView() {
      return CourseView.__super__.constructor.apply(this, arguments);
    }

    CourseView.prototype.template = JST["backbone/templates/courses/course"];

    CourseView.prototype.events = {
      "click .destroy": "destroy"
    };

    CourseView.prototype.tagName = "tr";

    CourseView.prototype.destroy = function() {
      this.model.destroy();
      this.remove();
      return false;
    };

    CourseView.prototype.render = function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    };

    return CourseView;

  })(Backbone.View);

}).call(this);
