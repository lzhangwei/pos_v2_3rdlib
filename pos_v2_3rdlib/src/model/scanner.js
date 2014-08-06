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

    for(var j = 0; j < (itemSpilt[1] || 1); j++){
      barcodelist.push(itemSpilt[0]);
    }

  });

  return barcodelist;
};
