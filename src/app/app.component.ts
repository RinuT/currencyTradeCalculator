import { Component } from '@angular/core';
import { CurrencyService } from './common/services/currency.service';
import { Currency } from './common/model/currency';
@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  title = 'app';
  result;
  status:string="";
  serverCheck:boolean;
  _currency:Currency
  constructor(private currencyService:CurrencyService){

  this.serverCheck=false;
  }

  convertCurrency($event){

    this.getRate($event);
    
    setInterval(()=>{
      this.getRate($event);
    },10000);
        
  }

  getRate($event){
    this._currency.amount=$event['amount'];
    this._currency.type=event["currency"];
    this.currencyService.convertCurrency(this._currency).subscribe(response=>this.result=response.amount,
    error =>{this.status="Please check Server Connection";
  this.serverCheck=true;});
  }


}
