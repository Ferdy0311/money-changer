import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  listMoney = [
    100000,
    50000,
    20000,
    10000,
    5000,
    1000,
    500,
    100,
    50
  ];
  listChange = [];
  moneyAmount;
  constructor() { }

  ngOnInit() {
  }

  generateMoney(){
    this.listChange = [];
    var listChange = this.listChange;
    var moneyAmount = this.moneyAmount;
    this.listMoney.forEach(function (value) {
      var qty;
      var remain;
      
      qty = Math.floor( moneyAmount / value );
      remain = moneyAmount - (value * qty);
      moneyAmount = remain;
      if(qty > 0){
        listChange.push(
          { amount: value, qty: qty, remain: remain }
        );
      }
    });
  }
}
