(function() {
  var base,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  (base = Homework2.Views).Enrollments || (base.Enrollments = {});

  Homework2.Views.Enrollments.EnrollmentView = (function(superClass) {
    extend(EnrollmentView, superClass);

    function EnrollmentView() {
      return EnrollmentView.__super__.constructor.apply(this, arguments);
    }

    EnrollmentView.prototype.template = JST["backbone/templates/enrollments/enrollment"];

    EnrollmentView.prototype.events = {
      "click .destroy": "destroy"
    };

    EnrollmentView.prototype.tagName = "tr";

    EnrollmentView.prototype.destroy = function() {
      this.model.destroy();
      this.remove();
      return false;
    };

    EnrollmentView.prototype.render = function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    };

    return EnrollmentView;

  })(Backbone.View);

}).call(this);
