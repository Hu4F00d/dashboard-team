import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['overall-stats'],
    workedEnough: Ember.computed('teamTarget', 'hoursWored', function() {
        return this.get('teamTarget') <= this.get('hoursWorked') ? true : false;
    }),
    teamTarget: 0,
    hoursWorked: 0,
    didReceiveAttrs() {
        this._super(...arguments);
        
        
        let total = 0,
            totalHours = 0;
            
        let monthlyCalendars = this.get('calendars').filter(function(calendar) {
            
            let calendarDate = new Date(calendar.get('workDate'));
            let currentDate = new Date();
            let calendarMonth = calendarDate.getMonth();
            let currentMonth = currentDate.getMonth();
            
            return calendarMonth === currentMonth;  
        });
            
        this.get('teammembers').forEach(function(teammember) {
            total += teammember.get('target');
        });
        this.set('teamTarget', total);
        
        monthlyCalendars.forEach(function(calendar) {
            totalHours += calendar.get('duration');
        });
        totalHours = Math.round(totalHours * 100) / 100;
        
        this.set('hoursWorked', totalHours);
    }
});
