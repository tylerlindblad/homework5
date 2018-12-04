(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Homework2.Models.Course = (function(superClass) {
    extend(Course, superClass);

    function Course() {
      return Course.__super__.constructor.apply(this, arguments);
    }

    Course.prototype.paramRoot = 'course';

    Course.prototype.defaults = {
      name: null,
      department: null,
      number: null,
      credit_hours: null
    };

    return Course;

  })(Backbone.Model);

  Homework2.Collections.CoursesCollection = (function(superClass) {
    extend(CoursesCollection, superClass);

    function CoursesCollection() {
      return CoursesCollection.__super__.constructor.apply(this, arguments);
    }

    CoursesCollection.prototype.model = Homework2.Models.Course;

    CoursesCollection.prototype.url = '/courses';

    return CoursesCollection;

  })(Backbone.Collection);

}).call(this);
