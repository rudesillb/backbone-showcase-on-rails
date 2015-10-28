var app = app || {};

app.ShowcaseView = Backbone.View.extend({
  el: '#shows',

  events: {
    'click #add': 'addShow'
  },

  // fill in with your collection setup
  initialize: function() {
    this.collection = new app.Showcase();
    this.collection.fetch({reset: true});
    this.render();

    this.listenTo(this.collection, 'add', this.renderShow);
    this.listenTo(this.collection, 'reset', this.render);
  },

  // fill in
  render: function() {
    this.collection.each(function(show){
      this.renderShow(show)
    }, this)
  },

  // fill in
  renderShow: function(show) {
    var view = new app.ShowView({model: show});
    $('#shows').append(view.render().el);
  },

  // fill in
  addShow: function(event) {
    event.preventDefault();
    var data = {};
    // debugger

    $('#addShow').children().each(function(index,input) {
    var $input = $(input);
    // var validInput = input.localName !== 'input' && input.localName !== 'text';
    // if (validInput || input.type === 'submit') { return true; }
    if ($input.val() !== '') {
        data[input.name] = $input.val();
      }
    });

    this.collection.create(data);

  }
})
