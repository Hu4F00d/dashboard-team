import DS from 'ember-data';

export default DS.Model.extend({
    duration: DS.attr('number'),
    projectId: DS.attr('number'),
    workDate: DS.attr('date'),
    teammemberId: DS.attr('number')
});
