(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Homework2.Models.Enrollment = (function(superClass) {
    extend(Enrollment, superClass);

    function Enrollment() {
      return Enrollment.__super__.constructor.apply(this, arguments);
    }

    Enrollment.prototype.paramRoot = 'enrollment';

    Enrollment.prototype.defaults = {
      section: null,
      student: null
    };

    return Enrollment;

  })(Backbone.Model);

  Homework2.Collections.EnrollmentsCollection = (function(superClass) {
    extend(EnrollmentsCollection, superClass);

    function EnrollmentsCollection() {
      return EnrollmentsCollection.__super__.constructor.apply(this, arguments);
    }

    EnrollmentsCollection.prototype.model = Homework2.Models.Enrollment;

    EnrollmentsCollection.prototype.url = '/enrollments';

    return EnrollmentsCollection;

  })(Backbone.Collection);

}).call(this);
