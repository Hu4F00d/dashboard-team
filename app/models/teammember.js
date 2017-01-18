import DS from 'ember-data';

export default DS.Model.extend({
    target: DS.attr('number'),
    active: DS.attr('boolean'),
    resource: DS.attr('string'),
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    calendars: DS.hasMany('calendar')
});

