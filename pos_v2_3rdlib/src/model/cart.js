function Cart(barcodelist) {

    var init = function (barcodelist, cartItemList) {

        _.forEach(barcodelist, function (barcodeobject) {

            var items = loadAllItems();

            var item = _.find(items, {'barcode': barcodeobject.barcode});

            var cartItem = new CartItem(item, barcodeobject.quantity);
            cartItemList.push(cartItem);
        });

        for(var i = 0; i < cartItemList.length; i++){
            for(var j = 0; j < i; j++){
                if(cartItemList[i].item.barcode === cartItemList[j].item.barcode){
                    cartItemList[j].num += cartItemList[i].num;
                    cartItemList.splice(i, 1);
                    i--;
                    break;
                }
            }
        }

    };

    this.cartItemList = [];

    init(barcodelist, this.cartItemList);
}

Cart.prototype.getCartItemList = function () {
    return this.cartItemList;
};
