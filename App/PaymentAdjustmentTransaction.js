var PaymentAdjustmentTransaction = Backbone.Model.extend({
    defaults :{
        id : 0,
        type : "invoice",
        instrumentId : 0,
        date : new Date(),
        amount : 0
    }
});