var fs = require('fs');

fs.readFile('db.json',{encoding : 'utf8'}, function(err,dataStr){
    var data = JSON.parse(dataStr);
    data.Invoices.forEach(function(invoice){
        invoice.Amount = parseFloat(invoice.Amount);
        invoice.TransAmt = parseFloat(invoice.TransAmt);
    });
    fs.writeFile("db.json", JSON.stringify(data));
});
console.log("done");