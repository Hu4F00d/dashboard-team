import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
    attrs: {
        target: 'Target',
        active: 'ActiveInd',
        firstName: 'FirstName',
        lastName: 'LastName',
        resource: 'ResourceCD'
    }
});
