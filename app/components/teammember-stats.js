import Ember from 'ember';

export default Ember.Component.extend({
    targetValue: 0,
    tagName: 'tr',
    classNameBindings: ['workedEnough:worked-enough-individual'],
    classNames: ['individual-stats'],    
    hoursWorked: 0,
    workedEnough: Ember.computed('targetNewValue', 'hoursWorked', function() {
        return this.get('targetNewValue') <= this.get('hoursWorked') ? true : false;
    }),
    didReceiveAttrs() {
        this._super(...arguments);
        let teammemberTarget = this.get('teammember.target');
        this.set('targetNewValue', teammemberTarget);
        
        let teammemberOwnId = this.get('teammember.id');
        let myMonthlyCalendars = this.get('calendars');
        
        let myCalendars = myMonthlyCalendars.filter(function(calendar) {
            let teammemberId = calendar.get('teammemberId');
            
            return teammemberOwnId == teammemberId;
        });
        
        let total = 0;
        
        myCalendars.forEach(function(calendar) {
           total += calendar.get('duration');
        });
        
        total = Math.round(total * 100) / 100;
        
        this.set('hoursWorked', total);
       
    },
    actions: {
        updateTarget(e) {
            // Crear data a enviar
            let xmlData = `<TeamMember xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://schemas.datacontract.org/2004/07/TargetRevenue.Models">
            <ActiveInd>${this.get('teammember.active')}</ActiveInd>
            <FirstName>${this.get('teammember.firstName')}</FirstName>
            <Id>${this.get('teammember.id')}</Id>
            <LastName>${this.get('teammember.lastName')}</LastName>
            <ResourceCD>${this.get('teammember.resource')}</ResourceCD>
            <Target>${this.get('targetValue')}</Target>
            </TeamMember>`;
            // Hacer request
            
            Ember.$.ajax({
                type: "PUT",
                contentType: "application/xml",
                dataType: "xml",
                url: `http://targetrevenue.azurewebsites.net/api/teammembers/${this.get('teammember.id')}`,
                data: xmlData,
                success: function() {

                }
            });
            let newValue = Number(this.get('targetValue'));
            if (typeof newValue === "number" && isNaN(newValue) === false) {
                this.set('targetNewValue', newValue);
                this.set('targetValue', 0);
            }
        }
    }
});
