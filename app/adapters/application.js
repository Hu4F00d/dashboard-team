import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'http://targetrevenue.azurewebsites.net/api',
});
