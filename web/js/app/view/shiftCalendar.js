(function(Backbone, window) {
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
                var $departmentLane = this.$el.find('.' + shift.get('department').name);
                var $shift = $(new ShiftBarView({model: shift}).render().el);
                $departmentLane.append($shift);
//console.log($shift);
                $shift.css({
                    'left': dateToPixels(shift.get('start')) + 'px',
                    'width': (dateToPixels(shift.get('end')) - dateToPixels(shift.get('start'))) + 'px'
                })
            }, this);

            applyBehaviour();

            return this;
        }
    });

    var ShiftBarView = Backbone.View.extend({
        tagName: "div",
        className: "shift",
        template: _.template('<%= department.name %> - <%= name %>'),

        render:function (eventName) {
    console.log('ShiftBarView.render id: ' + this.model.get('id'));
    //console.log(this.model.toJSON());
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }
    });

    function dateToPixels(date) {
        var d = new Date(date);
        var pixels = d.getHours() * 30;
        if (d.getMinutes()) {
            pixels += 15;
        }

        return pixels;
    }

    function applyBehaviour() {
        $('.shift').draggable({
          axis: "x",
          containment: "parent",
        //  grid: [25, 0],
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

    window.Teambeat = window.Teambeat || {};
    window.Teambeat.App = window.Teambeat.App || {};
    window.Teambeat.App.View = window.Teambeat.App.View || {};

    window.Teambeat.App.View.ShiftCalendar = ShiftCalendarView;
})(Backbone, window);
