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
      "PaymentAdjustmentTransactions": null
    };

var paymentDetail = new PaymentDetail(paymentDetailsData);

/*
paymentDetail.addTransaction(new PaymentAdjustmentTransaction({id : 1, amount : 1000}));

paymentDetail.addTransaction(new PaymentAdjustmentTransaction({id : 2, amount : 1000}));

paymentDetail.addTransaction(new PaymentAdjustmentTransaction({id : 3, amount : 3000}));
*/

/*var paymentAdjTransactions = new PaymentAdjustmentTransactions()

paymentAdjTransactions.add(new PaymentAdjustmentTransaction({id : 1, amount : 1000}));

paymentAdjTransactions.add(new PaymentAdjustmentTransaction({id : 2, amount : 2000}));

paymentAdjTransactions.add(new PaymentAdjustmentTransaction({id : 3, amount : 3000}));*/

//=======================================================
/*

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
      "Imbalance": 0,
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

paymentDetail.PaymentAdjustmentTransactions.add(new PaymentAdjustmentTransaction({id : 1, amount : 1000}));

paymentDetail.PaymentAdjustmentTransactions.add(new PaymentAdjustmentTransaction({id : 2, amount : 2000}));

paymentDetail.PaymentAdjustmentTransactions.add(new PaymentAdjustmentTransaction({id : 3, amount : 3000}));

paymentDetail.get("imbalance") //=> 94000

*/
