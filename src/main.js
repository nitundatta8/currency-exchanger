// user interface logic

import $ from "jquery";
import { CurrencyServicee } from './../src/currency-service.js';

$(document).ready(function(){
  $("#currencyInfo").click(function(){


    (async () => {
      let currencyService = new CurrencyServicee();
      const response = await currencyService.getCurrency();
      getResponse(response);
    })();

    function getResponse(response){
      if (response){

      }else{
        
      }
    }

  });
});