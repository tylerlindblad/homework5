(function() {
  var base,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  (base = Homework2.Views).Courses || (base.Courses = {});

  Homework2.Views.Courses.NewView = (function(superClass) {
    extend(NewView, superClass);

    NewView.prototype.template = JST["backbone/templates/courses/new"];

    NewView.prototype.events = {
      "submit #new-course": "save"
    };

    function NewView(options) {
      NewView.__super__.constructor.call(this, options);
      this.model = new this.collection.model();
      this.model.bind("change:errors", (function(_this) {
        return function() {
          return _this.render();
        };
      })(this));
    }

    NewView.prototype.save = function(e) {
      e.preventDefault();
      e.stopPropagation();
      this.model.unset("errors");
      return this.collection.create(this.model.toJSON(), {
        success: (function(_this) {
          return function(course) {
            _this.model = course;
            return window.location.hash = "/" + _this.model.id;
          };
        })(this),
        error: (function(_this) {
          return function(course, jqXHR) {
            return _this.model.set({
              errors: $.parseJSON(jqXHR.responseText)
            });
          };
        })(this)
      });
    };

    NewView.prototype.render = function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.$("form").backboneLink(this.model);
      return this;
    };

    return NewView;

  })(Backbone.View);

}).call(this);