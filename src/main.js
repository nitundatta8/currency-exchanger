// user interface logic

import $ from "jquery";
import { CurrencyService } from './../src/currency-service.js';

$(document).ready(function(){
  $("#currencyInfo").click(function(){
    
    let amountUSD = parseInt($("#amount").val());
    let typeOfCurrency = $("#convertCurrency").val();
    
    
    (async () => {
      let currencyService = new CurrencyService();
      const response = await currencyService.getCurrency();
      getResponse(response,amountUSD,typeOfCurrency);
     })();
     
    function getResponse(response,amountUSD,typeOfCurrency){
      if (response){
        let totalAmout = (amountUSD *response.conversion_rates[typeOfCurrency]);
        console.log("Dataq:" + totalAmout);
        
        
        $(".display").text(`${amountUSD} USD = ${totalAmout} ${typeOfCurrency}`);   
      }else{
        $(".error").text("error");
      }
    }

  });
});