(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Homework2.Routers.CoursesRouter = (function(superClass) {
    extend(CoursesRouter, superClass);

    function CoursesRouter() {
      return CoursesRouter.__super__.constructor.apply(this, arguments);
    }

    CoursesRouter.prototype.initialize = function(options) {
      this.courses = new Homework2.Collections.CoursesCollection();
      return this.courses.reset(options.courses);
    };

    CoursesRouter.prototype.routes = {
      "new": "newCourse",
      "index": "index",
      ":id/edit": "edit",
      ":id": "show",
      ".*": "index"
    };

    CoursesRouter.prototype.newCourse = function() {
      this.view = new Homework2.Views.Courses.NewView({
        collection: this.courses
      });
      return $("#courses").html(this.view.render().el);
    };

    CoursesRouter.prototype.index = function() {
      this.view = new Homework2.Views.Courses.IndexView({
        collection: this.courses
      });
      return $("#courses").html(this.view.render().el);
    };

    CoursesRouter.prototype.show = function(id) {
      var course;
      course = this.courses.get(id);
      this.view = new Homework2.Views.Courses.ShowView({
        model: course
      });
      return $("#courses").html(this.view.render().el);
    };

    CoursesRouter.prototype.edit = function(id) {
      var course;
      course = this.courses.get(id);
      this.view = new Homework2.Views.Courses.EditView({
        model: course
      });
      return $("#courses").html(this.view.render().el);
    };

    return CoursesRouter;

  })(Backbone.Router);

}).call(this);
