(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Homework2.Routers.StudentsRouter = (function(superClass) {
    extend(StudentsRouter, superClass);

    function StudentsRouter() {
      return StudentsRouter.__super__.constructor.apply(this, arguments);
    }

    StudentsRouter.prototype.initialize = function(options) {
      this.students = new Homework2.Collections.StudentsCollection();
      return this.students.reset(options.students);
    };

    StudentsRouter.prototype.routes = {
      "new": "newStudent",
      "index": "index",
      ":id/edit": "edit",
      ":id": "show",
      ".*": "index"
    };

    StudentsRouter.prototype.newStudent = function() {
      this.view = new Homework2.Views.Students.NewView({
        collection: this.students
      });
      return $("#students").html(this.view.render().el);
    };

    StudentsRouter.prototype.index = function() {
      this.view = new Homework2.Views.Students.IndexView({
        collection: this.students
      });
      return $("#students").html(this.view.render().el);
    };

    StudentsRouter.prototype.show = function(id) {
      var student;
      student = this.students.get(id);
      this.view = new Homework2.Views.Students.ShowView({
        model: student
      });
      return $("#students").html(this.view.render().el);
    };

    StudentsRouter.prototype.edit = function(id) {
      var student;
      student = this.students.get(id);
      this.view = new Homework2.Views.Students.EditView({
        model: student
      });
      return $("#students").html(this.view.render().el);
    };

    return StudentsRouter;

  })(Backbone.Router);

}).call(this);
