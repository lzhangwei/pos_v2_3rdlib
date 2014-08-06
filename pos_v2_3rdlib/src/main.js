function printInventory (inputs) {

  var scanner = new BarcodeScanner();
  var barcodelist = scanner.scan(inputs);

  var cart = new Cart(barcodelist);

  var promotioncal = new PromotionCal();
  promotioncal.init('BUY_TWO_GET_ONE_FREE');

  _.forEach(cart.getCartItemList(),function(cartItem) {
    promotioncal.cartItemPromotionnum(cartItem);
  });

  var pos = new Pos(cart);

  console.log(pos.titlePrint() + pos.commonPrint() + pos.givePrint()
              + pos.pricePrint(pos.calSumPrice(), pos.calSavePrice()));

}
