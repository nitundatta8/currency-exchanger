// user interface logic

import $ from "jquery";
import { CurrencyService } from './../src/currency-service.js';
import './styles.css';

$(document).ready(function(){
  $("#typeInput").hide();
 
  $("#convertCurrency").change(function(){
   // let typeOfCurrency;
  let   typeOfCurrency = $("#convertCurrency").val();
    
    if(typeOfCurrency === "Others"){
      $("#typeInput").show();
      
    }else{
      $("#typeInput").hide();
    }

  });
  
  
  $("#currencyInfo").click(function(){
    
    let amountUSD = parseInt($("#amount").val());
    let typeOfCurrency = $("#convertCurrency").val();
    let typeInput = $("#otherCurType").val();

    if(typeOfCurrency==="Others"){
      typeOfCurrency = typeInput;
    }
    
    
    (async () => {
      let currencyService = new CurrencyService();
      const response = await currencyService.getCurrency();
      getResponse(response,amountUSD,typeOfCurrency);
     })();
     
    function getResponse(response,amountUSD,typeOfCurrency){
     if (response.result === "success"){
        if( typeof response.conversion_rates[typeOfCurrency] === 'undefined'){
          $(".error").text("The currency doesn't exist");
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