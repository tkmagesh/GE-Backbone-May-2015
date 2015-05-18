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

