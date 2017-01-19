import Ember from 'ember';

export default Ember.Controller.extend({
    filteredCalendars: Ember.computed('model.calendars', function() {
        let calendars = this.get('model.calendars'),
              currentMonth = new Date().getMonth();
              
        let filteredCalendars = calendars.filter(calendar => {
            return calendar.get('workDate').getMonth() === currentMonth;
        });
        return filteredCalendars;
    }),
    updatedValue: 0,
    targetNewValue: 0,
    actions: {
        updateValue(number) {
            let targetNewValue = this.get('targetNewValue');
            targetNewValue += number;
            this.set('targetNewValue', targetNewValue);
            
            /*
            let updatedValue = this.get('updatedValue'); 
            updatedValue += number;
            this.set('updatedValue', updatedValue);
            */
        }
    }
});
