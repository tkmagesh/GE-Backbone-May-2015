var PaymentAdjustmentTransaction = Backbone.RelationalModel.extend({
    defaults :{
        type : "invoice",
        instrumentId : 0,
        date : new Date(),
        amount : 0
    }
});