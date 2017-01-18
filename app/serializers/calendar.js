import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload.forEach(function(item) {
       item.duration = item.Duration;
       item.projectId = item.ProjectId;
       item.workDate = item.WorkDate;
       item.teammmember = item.TeamMemberId;
       
       delete item.Duration;
       delete item.ProjectId;
       delete item.WorkDate;
       delete item.TeamMemberId;
       
       
    });
    console.log(payload)
    return this._super(...arguments);
  },
});
