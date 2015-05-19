var PaymentDetail = Backbone.Model.extend({
    url : 'http://localhost:3000/PaymentDetails/1',
    intialize : function(){
    },
    addTransaction : function(transaction){
        this.get('PaymentAdjustmentTransactions').add(transaction);
    },
    initialize : function(){
        /*var paymentAdjustmentTransactions = new PaymentAdjustmentTransactions();
        this.listenTo(paymentAdjustmentTransactions, 'add', this.adjustImbalance);
        this.listenTo(paymentAdjustmentTransactions, 'remove', this.adjustImbalance);
        this.set('PaymentAdjustmentTransactions', paymentAdjustmentTransactions);*/
    },
    adjustImbalance : function(){
        var imbalanceAmount = this.get('Amount') - this.get('PaymentAdjustmentTransactions').getTotalAdjustmentAmount();
        this.set('Imbalance', imbalanceAmount);
    },
    allocateInvoice : function(invoiceData){
        
    }
});


