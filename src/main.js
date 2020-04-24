// user interface logic

import $ from "jquery";
import { CurrencyService } from './../src/currency-service.js';

$(document).ready(function(){
  //$("#typeInput").hide();
  $("#currencyInfo").click(function(){
    let typeOfCurrency;
    let amountUSD = parseInt($("#amount").val());
    typeOfCurrency = $("#convertCurrency").val();
    
    if(typeOfCurrency === "Others"){
      //$("#typeInput").show();
      typeOfCurrency = $("#type").val();
    }
    
    
    
    (async () => {
      let currencyService = new CurrencyService();
      const response = await currencyService.getCurrency();
      console.log("========   " + response);
      getResponse(response,amountUSD,typeOfCurrency);
     })();
     
    function getResponse(response,amountUSD,typeOfCurrency){
     if (response.result === "success"){
        if(response.conversion_rates[typeOfCurrency] === null){
          $(".error").text("the currency is doesn't exist");
        }else{
          let totalAmout = (amountUSD *response.conversion_rates[typeOfCurrency]);
          $(".display").text(`${amountUSD} USD = ${totalAmout} ${typeOfCurrency}`);  
        }
         
      }else{
        $(".error").text("Server Error");
      }
    }

  });
});