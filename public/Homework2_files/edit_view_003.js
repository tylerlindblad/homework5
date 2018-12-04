(function() {
  var base,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  (base = Homework2.Views).Courses || (base.Courses = {});

  Homework2.Views.Courses.EditView = (function(superClass) {
    extend(EditView, superClass);

    function EditView() {
      return EditView.__super__.constructor.apply(this, arguments);
    }

    EditView.prototype.template = JST["backbone/templates/courses/edit"];

    EditView.prototype.events = {
      "submit #edit-course": "update"
    };

    EditView.prototype.update = function(e) {
      e.preventDefault();
      e.stopPropagation();
      return this.model.save(null, {
        success: (function(_this) {
          return function(course) {
            _this.model = course;
            return window.location.hash = "/" + _this.model.id;
          };
        })(this)
      });
    };

    EditView.prototype.render = function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.$("form").backboneLink(this.model);
      return this;
    };

    return EditView;

  })(Backbone.View);

}).call(this);
