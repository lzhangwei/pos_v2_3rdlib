function Pos(cart){
  this.cart = cart;
}

Pos.prototype.calSumPrice = function() {

  var cartItemList = this.cart.getCartItemList();
  var sumPrice = 0.00;

  _.forEach(cartItemList,function(cartItem) {
    sumPrice +=  cartItem.smallCal();
  });

  return sumPrice;
};

Pos.prototype.calSavePrice = function() {

  var cartItemList = this.cart.getCartItemList();
  var savePrice = 0.00;

  _.forEach(cartItemList,function(cartItem) {
    if(cartItem.promotionNum > 0){
      savePrice +=  cartItem.promotionNum * cartItem.item.price;
    }
  });

  return savePrice;
};

Pos.prototype.titlePrint = function() {

  var date = moment(new Date()).format("YYYY年MM月DD日 HH:mm:ss");

  var result = '***<没钱赚商店>购物清单***\n' + '打印时间：' + date + '\n';

  return result;
};

Pos.prototype.commonPrint = function() {

  var result = '----------------------\n';

  _.forEach(this.cart.getCartItemList(),function(cartItem) {
    result += '名称：' + cartItem.item.name
              + '，数量：' + cartItem.num + cartItem.item.unit
              + '，单价：' + cartItem.item.price.toFixed(2)
              + '(元)，小计：' + cartItem.smallCal().toFixed(2)
              + '(元)\n';
    this.sumPrice +=  cartItem.smallCal();
  });

  return result;
};

Pos.prototype.givePrint = function() {

  var result = '----------------------\n挥泪赠送商品：\n';

  _.forEach(this.cart.getCartItemList(),function(cartItem) {
    if(cartItem.promotionNum > 0){
      result += '名称：' + cartItem.item.name + '，数量：'
                + cartItem.promotionNum + cartItem.item.unit
                + '\n';
      this.savePrice +=  cartItem.promotionNum * cartItem.item.price;
    }
  });

  return result;
};

Pos.prototype.pricePrint = function(sumPrice, savePrice) {

  var result = '----------------------\n'
             + '总计：' + sumPrice.toFixed(2) + '(元)\n'
             + '节省：' + savePrice.toFixed(2) + '(元)\n'
             + '**********************';
  return result;
};
