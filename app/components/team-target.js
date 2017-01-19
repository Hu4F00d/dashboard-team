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
        
        
        let subTotal = 0,
            totalHours = 0;
            
        let monthlyCalendars = this.get('calendars');
            
        this.get('teammembers').forEach(function(teammember) {
            subTotal += teammember.get('target');
        });
        let total = subTotal + this.get('updatedValue');
        this.set('teamTarget', total);
        
        monthlyCalendars.forEach(function(calendar) {
            totalHours += calendar.get('duration');
        });
        totalHours = Math.round(totalHours * 100) / 100;
        
        this.set('hoursWorked', totalHours);
    }
});
