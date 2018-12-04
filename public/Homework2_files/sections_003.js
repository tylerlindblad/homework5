(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Homework2.Models.Sections = (function(superClass) {
    extend(Sections, superClass);

    function Sections() {
      return Sections.__super__.constructor.apply(this, arguments);
    }

    Sections.prototype.paramRoot = 'section';

    Sections.prototype.defaults = {
      course: null,
      semester: null,
      number: null,
      room_number: null
    };

    return Sections;

  })(Backbone.Model);

  Homework2.Collections.SectionsCollection = (function(superClass) {
    extend(SectionsCollection, superClass);

    function SectionsCollection() {
      return SectionsCollection.__super__.constructor.apply(this, arguments);
    }

    SectionsCollection.prototype.model = Homework2.Models.Sections;

    SectionsCollection.prototype.url = '/sections';

    return SectionsCollection;

  })(Backbone.Collection);

}).call(this);
