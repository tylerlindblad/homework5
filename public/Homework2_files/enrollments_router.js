(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Homework2.Routers.EnrollmentsRouter = (function(superClass) {
    extend(EnrollmentsRouter, superClass);

    function EnrollmentsRouter() {
      return EnrollmentsRouter.__super__.constructor.apply(this, arguments);
    }

    EnrollmentsRouter.prototype.initialize = function(options) {
      this.enrollments = new Homework2.Collections.EnrollmentsCollection();
      return this.enrollments.reset(options.enrollments);
    };

    EnrollmentsRouter.prototype.routes = {
      "new": "newEnrollment",
      "index": "index",
      ":id/edit": "edit",
      ":id": "show",
      ".*": "index"
    };

    EnrollmentsRouter.prototype.newEnrollment = function() {
      this.view = new Homework2.Views.Enrollments.NewView({
        collection: this.enrollments
      });
      return $("#enrollments").html(this.view.render().el);
    };

    EnrollmentsRouter.prototype.index = function() {
      this.view = new Homework2.Views.Enrollments.IndexView({
        collection: this.enrollments
      });
      return $("#enrollments").html(this.view.render().el);
    };

    EnrollmentsRouter.prototype.show = function(id) {
      var enrollment;
      enrollment = this.enrollments.get(id);
      this.view = new Homework2.Views.Enrollments.ShowView({
        model: enrollment
      });
      return $("#enrollments").html(this.view.render().el);
    };

    EnrollmentsRouter.prototype.edit = function(id) {
      var enrollment;
      enrollment = this.enrollments.get(id);
      this.view = new Homework2.Views.Enrollments.EditView({
        model: enrollment
      });
      return $("#enrollments").html(this.view.render().el);
    };

    return EnrollmentsRouter;

  })(Backbone.Router);

}).call(this);
