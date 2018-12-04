(function() {
  var base,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  (base = Homework2.Views).Sections || (base.Sections = {});

  Homework2.Views.Sections.IndexView = (function(superClass) {
    extend(IndexView, superClass);

    function IndexView() {
      this.render = bind(this.render, this);
      this.addOne = bind(this.addOne, this);
      this.addAll = bind(this.addAll, this);
      return IndexView.__super__.constructor.apply(this, arguments);
    }

    IndexView.prototype.template = JST["backbone/templates/sections/index"];

    IndexView.prototype.initialize = function() {
      return this.collection.bind('reset', this.addAll);
    };

    IndexView.prototype.addAll = function() {
      return this.collection.each(this.addOne);
    };

    IndexView.prototype.addOne = function(sections) {
      var view;
      view = new Homework2.Views.Sections.SectionsView({
        model: sections
      });
      return this.$("tbody").append(view.render().el);
    };

    IndexView.prototype.render = function() {
      this.$el.html(this.template({
        sections: this.collection.toJSON()
      }));
      this.addAll();
      return this;
    };

    return IndexView;

  })(Backbone.View);

}).call(this);
