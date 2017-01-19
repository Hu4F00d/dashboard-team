import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
    attrs: {
        duration: 'Duration',
        workDate: 'WorkDate',
        teammemberId: 'TeamMemberId',
        projectId: 'ProjectId'
    }
});
