(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Homework2.Models.Student = (function(superClass) {
    extend(Student, superClass);

    function Student() {
      return Student.__super__.constructor.apply(this, arguments);
    }

    Student.prototype.paramRoot = 'student';

    Student.prototype.defaults = {
      name: null,
      email: null,
      phone: null,
      advisor: null
    };

    return Student;

  })(Backbone.Model);

  Homework2.Collections.StudentsCollection = (function(superClass) {
    extend(StudentsCollection, superClass);

    function StudentsCollection() {
      return StudentsCollection.__super__.constructor.apply(this, arguments);
    }

    StudentsCollection.prototype.model = Homework2.Models.Student;

    StudentsCollection.prototype.url = '/students';

    return StudentsCollection;

  })(Backbone.Collection);

}).call(this);
