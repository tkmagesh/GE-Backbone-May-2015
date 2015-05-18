var PaymentDetail = Backbone.Model.extend({
    url : 'http://localhost:3000/PaymentDetails/1',
    intialize : function(){
    }
});

var paymentDetailsData = {
      "id": 1,
      "BankNo": "Q20",
      "Batch": "0123",
      "PaymentNo": "WC804-122914",
      "PaymnetDate": "13-11-2014",
      "CMI": "C",
      "CMINo": "999999999",
      "BatchDate": "28-06-2014",
      "Name": "165-PRE AUT",
      "Currency": "USD",
      "Model": "Prime",
      "Imbalance": -100000,
      "Amount": 100000,
      "PaymentAdjustmentTransactions": [
        {
          "type": "invoice",
          "id": 201,
          "Amount": 10000
        }
      ]
    };

var paymentDetail = new PaymentDetail(paymentDetailsData);

var PaymentAdjustmentTransaction = Backbone.Model.extend({
    defaults :{
        id : 0,
        type : "invoice",
        instrumentId : 0,
        date : new Date(),
        amount : 0
    }
});

var PaymentAdjustmentTransactions = Backbone.Collection.extend({
    model : PaymentAdjustmentTransaction,
    getTotalAdjustmentAmount : function(){
        return this.reduce(function(result, tran){
            return result + tran.get('amount');
        }, 0);
    }
});

var paymentAdjTransactions = new PaymentAdjustmentTransactions()

paymentAdjTransactions.add(new PaymentAdjustmentTransaction({id : 1, amount : 1000}));

paymentAdjTransactions.add(new PaymentAdjustmentTransaction({id : 2, amount : 2000}));

paymentAdjTransactions.add(new PaymentAdjustmentTransaction({id : 3, amount : 3000}));

