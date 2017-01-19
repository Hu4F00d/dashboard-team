import Ember from 'ember';


export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            calendars: this.store.findAll('calendar'),
            teammembers: this.store.findAll('teammember')
        });
    }
    
});
        