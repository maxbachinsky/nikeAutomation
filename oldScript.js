(function(){
  var size = "US 13";
  var amount = 1;
  var sizesList = document.getElementsByName("skuAndSize")[0];
  if(sizesList != undefined) {
    for (var i=0; i<sizesList.length; i++){
      if(sizesList.options[i].text == size) {
        document.getElementsByName("skuAndSize")[0].selectedIndex = i;
        break;
      }
    }
    document.getElementById("buyingtools-add-to-cart-button").click();
  }
})()
