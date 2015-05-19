var PaymentAdjustmentTransactions = Backbone.Collection.extend({
    model : PaymentAdjustmentTransaction,
    getTotalAdjustmentAmount : function(){
        return this.reduce(function(result, tran){
            return result + tran.get('amount');
        }, 0);
    },
    applyInvoices : function(invoicesData){
        this
            .filter(function(trans){ 
                return trans.type === 'invoice'; 
            })
            .forEach(function(tran){ 
                    tran.remove();
            });
    }
});