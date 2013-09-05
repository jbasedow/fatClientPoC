(function(Backbone, window) {
    var ShiftPlanView = Backbone.View.extend({
        el : '#container',

        initialize: function () {
console.log('ShiftPlanView.initialize');
            this.model.bind("reset", this.render, this);
        },

        render: function(eventName) {
console.log('ShiftPlanView.render');
//console.log(this.model.toJSON());
            _.each(this.model.models, function (shift) {
                this.$el.append(new ShiftRowView({model: shift}).render().el);
            }, this);

            return this;
        }
    });

    var ShiftRowView = Backbone.View.extend({
        tagName: "tr",
        template: _.template('<td><%= id %></td><td><%= name %></td><td><%= department.name %></td><td><%= num_employees %></td><td><%= start %></td><td><%= end %></td>'),

        render:function (eventName) {
console.log('ShiftRowView.render id: ' + this.model.get('id'));
//console.log(this.model.toJSON());
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }
    });

    window.Teambeat = window.Teambeat || {};
    window.Teambeat.App = window.Teambeat.App || {};
    window.Teambeat.App.View = window.Teambeat.App.View || {};

    window.Teambeat.App.View.ShiftTable = ShiftPlanView;
})(Backbone, window);
