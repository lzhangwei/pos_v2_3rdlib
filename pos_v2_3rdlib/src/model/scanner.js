function Scanner(){
}

Scanner.prototype.scan = function(inputs) {

};

function BarcodeScanner(){
  Scanner.call(this);
}

BarcodeScanner.prototype.scan = function(inputs) {

  var barcodelist = [];

  _.forEach(inputs, function(input) {

    var itemSpilt = input.split('-');

    barcodelist.push({'barcode':itemSpilt[0],'quantity':(Number(itemSpilt[1]) || 1)});

  });

  return barcodelist;
};
