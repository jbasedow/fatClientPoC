var Shift = Backbone.Model.extend({
    initialize: function() {
    },
    defaults: {
        id: 0,
        department: '',
        numberOfEmployees: 0,
        start: 0,
        end: 0
    }
});

var ShiftCollection = Backbone.Collection.extend({
    model: Shift,
    url: '/api/shifts.json'
});

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
    template: _.template('<td><%= id %></td><td><%= name %></td><td><%= department %></td><td><%= numberOfEmployees %></td><td><%= start %></td><td><%= end %></td>'),

    render:function (eventName) {
console.log('ShiftRowView.render id: ' + this.model.get('id'));
//console.log(this.model.toJSON());
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    }
});

var ShiftCalendarView = Backbone.View.extend({
    el : '.day',

    initialize: function () {
console.log('ShiftCalendarView.initialize');
        this.model.bind("reset", this.render, this);
    },

    render: function(eventName) {
console.log('ShiftCalendarView.render');
//console.log(this.model.toJSON());
        _.each(this.model.models, function (shift) {
            var $departmentLane = this.$el.find('.' + shift.get('department'));
            var $shift = $(new ShiftBarView({model: shift}).render().el);
            $departmentLane.append($shift);
//console.log($shift);
            $shift.css({
                'left': dateToPixels(shift.get('start')) + 'px',
                'width': (dateToPixels(shift.get('end')) - dateToPixels(shift.get('start'))) + 'px'
            })
        }, this);

        applayBehaviour();

        return this;
    }
});

var ShiftBarView = Backbone.View.extend({
    tagName: "div",
    className: "shift",
    template: _.template('<%= department %> - <%= name %>'),

    render:function (eventName) {
console.log('ShiftBarView.render id: ' + this.model.get('id'));
//console.log(this.model.toJSON());
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    }
});


var shifts = new ShiftCollection();
new ShiftPlanView({model: shifts});
new ShiftCalendarView({model: shifts});
shifts.fetch({reset: true});

function applayBehaviour() {
    $('.shift').draggable({
        axis: "x",
        containment: "parent",
        grid: [25, 0],
    //    handle: ".drag-handle",
        start: function() {
            console.log('started dragging at ' + $(this).css('left'));
        },
        stop: function() {
            console.log('stopped dragging at ' + $(this).css('left'));
        }
    });

    $('.shift').resizable({
    //    axis: "x",
        containment: "parent",
        grid: 25,
        handles: "w, e",
        start: function() {
            console.log('started resizing at ' + $(this).css('left'));
        },
        stop: function() {
            console.log('stopped resizing at ' + $(this).css('left'));
        }
    });
}

function dateToPixels(date) {
    var d = new Date(date);
    var pixels = d.getHours() * 30;
    if (d.getMinutes()) {
        pixels += 15;
    }

    return pixels;
}
