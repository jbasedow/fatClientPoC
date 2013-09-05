(function(Teambeat, window) {
    var shifts = new Teambeat.App.Model.ShiftCollection();
    new window.Teambeat.App.View.ShiftTable({model: shifts});
    new window.Teambeat.App.View.ShiftCalendar({model: shifts});
    shifts.fetch({reset: true});
})(Teambeat, window);
