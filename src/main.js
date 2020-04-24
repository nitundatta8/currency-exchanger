// user interface logic

import $ from "jquery";
import { CurrencyService } from './../src/currency-service.js';

$(document).ready(function(){
  $("#currencyInfo").click(function(){
    
    let amountUSD = parseInt($("#amount").val());
    console.log(amountUSD+ "    =====================" )
    let typeOfCurrency = $("#convertCurrency").val();
    console.log(typeof typeOfCurrency);
    
    (async () => {
      let currencyService = new CurrencyService();
      const response = await currencyService.getCurrency();
      getResponse(response);
     })();

    function getResponse(response){
      if (response){
        Object.entries(response);
        console.log(Object.values+ "  object")
        $(".display").text("success ");   
      }else{
        $(".error").text("error");
      }
    }

  });
});