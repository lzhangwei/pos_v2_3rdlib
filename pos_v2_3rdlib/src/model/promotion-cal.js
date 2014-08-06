function PromotionCal() {

  // var init = function(promotionType, promotion) {
  //
  //   var allPromotions = loadPromotions();
  //
  //   for(var i=0; i < allPromotions.length; i++){
  //
  //     if(allPromotions[i].type === promotionType){
  //
  //       promotion = allPromotions[i];
  //       break;
  //
  //     }
  //   }
  // };

  this.promotion ;

  //init(promotionType, this.promotion);
}

PromotionCal.prototype.init = function(promotionType) {

  var allPromotions = loadPromotions();

  var promotiont;

  _.forEach(allPromotions,function(apromotion) {

    if(apromotion.type === promotionType){

      promotiont = apromotion;
      //break;

    }
  });

  this.promotion = promotiont;

};

PromotionCal.prototype.cartItemPromotionnum = function(cartItem) {

  var barcodeslist = this.promotion.barcodes;

  _.forEach(barcodeslist, function(abarcodes) {

    if(cartItem.getBarcode() === abarcodes) {

      cartItem.promotionNum = parseInt(cartItem.num / 3);

    }

  });

};
