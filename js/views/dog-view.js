DogView = Backbone.View.extend({
	el: '#dog',
	events: {
		'click #set': 'setName'
	},
	setName: function() {
		var name = $('#name').val();
		this.model.set({name: name});
	},
	render: function() {
		this.$el.html(this.model.get('name'));
	}
});