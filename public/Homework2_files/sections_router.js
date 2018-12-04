(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Homework2.Routers.SectionsRouter = (function(superClass) {
    extend(SectionsRouter, superClass);

    function SectionsRouter() {
      return SectionsRouter.__super__.constructor.apply(this, arguments);
    }

    SectionsRouter.prototype.initialize = function(options) {
      this.sections = new Homework2.Collections.SectionsCollection();
      return this.sections.reset(options.sections);
    };

    SectionsRouter.prototype.routes = {
      "new": "newSections",
      "index": "index",
      ":id/edit": "edit",
      ":id": "show",
      ".*": "index"
    };

    SectionsRouter.prototype.newSections = function() {
      this.view = new Homework2.Views.Sections.NewView({
        collection: this.sections
      });
      return $("#sections").html(this.view.render().el);
    };

    SectionsRouter.prototype.index = function() {
      this.view = new Homework2.Views.Sections.IndexView({
        collection: this.sections
      });
      return $("#sections").html(this.view.render().el);
    };

    SectionsRouter.prototype.show = function(id) {
      var sections;
      sections = this.sections.get(id);
      this.view = new Homework2.Views.Sections.ShowView({
        model: sections
      });
      return $("#sections").html(this.view.render().el);
    };

    SectionsRouter.prototype.edit = function(id) {
      var sections;
      sections = this.sections.get(id);
      this.view = new Homework2.Views.Sections.EditView({
        model: sections
      });
      return $("#sections").html(this.view.render().el);
    };

    return SectionsRouter;

  })(Backbone.Router);

}).call(this);
