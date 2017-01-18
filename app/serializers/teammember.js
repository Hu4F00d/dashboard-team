import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload.forEach(function(item) {
       item.target = item.Target;
       item.active = item.ActiveInd;
       item.firstName = item.FirstName;
       item.lastName = item.LastName;
       item.resource = item.ResourceCD;
       
       delete item.Target;
       delete item.ActiveInd;
       delete item.ResourceCD;
       delete item.FirstName;
       delete item.LastName;
    });
    return this._super(...arguments);
  },
});
