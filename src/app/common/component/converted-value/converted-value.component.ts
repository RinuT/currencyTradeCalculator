import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'convertor-widget',
  templateUrl: './converted-value.component.html',
  styleUrls: ['./converted-value.component.css']
})
export class ConvertorWidget implements OnInit {

  @Output('getConvertionData') convertionData = new EventEmitter();
  
  currencies;
  selectedCurrency;
  amount;

  constructor() { 
    this.amount=0;
    this.selectedCurrency="";
    this.currencies = [
      {'id':1, 'name':'INR'},
      {'id':2, 'name':'CAD'},
      {'id':3, 'name':'GBP'}
    ]
  }

  
  ngOnInit() {
  }

  sendConvertData(){
    
    let dataToEmit ={
      'currency':this.selectedCurrency,
      'amount'  :this.amount      
    };
    this.convertionData.emit(dataToEmit);
    

  }
}