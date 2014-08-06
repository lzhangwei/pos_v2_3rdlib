function Cart(barcodelist){

  var init = function(barcodelist, cartItemList) {

    _.forEach(barcodelist, function(barcodes) {

      var items = loadAllItems();

      var item = _.find(items, {'barcode':barcodes});

      var cartItem = new CartItem(item, 1);
      cartItemList.push(cartItem);

    });

    var cartItemArry = _.groupBy(cartItemList, function(cartitem) {
      return cartitem.item.barcode;
    });

    cartItemList.splice(0, cartItemList.length);

    _.forEach(cartItemArry, function(cartItemt) {

      var cartItem = new CartItem(cartItemt[0].item, cartItemt.length);
      cartItemList.push(cartItem);
    });

  };

  this.cartItemList = [];

  init(barcodelist, this.cartItemList);
}

Cart.prototype.getCartItemList = function() {
  return this.cartItemList;
};
