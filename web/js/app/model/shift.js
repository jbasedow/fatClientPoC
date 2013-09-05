(function(Backbone, window) {
    var Shift = Backbone.Model.extend({
        initialize: function() {
        },
        defaults: {
            id: 0,
            department: {
                name: ''
            },
            num_employees: 0,
            start: 0,
            end: 0
        }
    });

    var ShiftCollection = Backbone.Collection.extend({
        model: Shift,
        url: '/api/shifts.json'
    });

    window.Teambeat = window.Teambeat || {};
    window.Teambeat.App = window.Teambeat.App || {};
    window.Teambeat.App.Model = window.Teambeat.App.Model || {};

//    window.Teambeat.App.Model.Shift = Shift;
    window.Teambeat.App.Model.ShiftCollection = ShiftCollection;
})(Backbone, window);
