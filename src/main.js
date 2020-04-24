// user interface logic

import $ from "jquery";
import { CurrencyService } from './../src/currency-service.js';

$(document).ready(function(){
  $("#currencyInfo").click(function(){
    
    let amountUSD = $("#amount").val();
    let typeOfCurrency = $("#convertCurrency").val();

    (async () => {
      let currencyService = new CurrencyService();
      const response = await currencyService.getCurrency();
      console.log("val");
      console.log("respons " + response);
      getResponse(response);
     })();

    function getResponse(response){
      if (response){
        let totalUSD = response.conversion_rates.USD * amountUSD;
        console.log(totalUSD+" -------------------")
        let finalCurrency = totalUSD * `response.conversion_rates.${typeOfCurrency}`;
        $(".display").text("success " + finalCurrency);   
      }else{
        $(".error").text("error");
      }
    }

  });
});