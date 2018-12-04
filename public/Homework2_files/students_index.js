(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Homework2.Views.StudentsIndex = (function(superClass) {
    extend(StudentsIndex, superClass);

    function StudentsIndex() {
      return StudentsIndex.__super__.constructor.apply(this, arguments);
    }

    StudentsIndex.prototype.template = JST['students/index'];

    return StudentsIndex;

  })(Backbone.View);

}).call(this);
