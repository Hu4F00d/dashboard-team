import DS from 'ember-data';

export default DS.Model.extend({
    duration: DS.attr('number'),
    projectId: DS.attr('number'),
    workDate: DS.attr('date'),
    teammember: DS.belongsTo('teammember', {async: true})
});
