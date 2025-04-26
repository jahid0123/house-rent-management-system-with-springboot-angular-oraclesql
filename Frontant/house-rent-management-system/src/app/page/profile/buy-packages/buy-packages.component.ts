import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-buy-packages',
  imports: [NgFor],
  templateUrl: './buy-packages.component.html',
  styleUrl: './buy-packages.component.css'
})
export class BuyPackagesComponent {

  packages = [
    { name: 'Basic Package', credit: 100, bonus: '10 Credit', price: 100 },
    { name: 'Silver Package', credit: 300, bonus: '30 Credit', price: 280 },
    { name: 'Premium Package', credit: 400, bonus: '30 Credit', price: 350 },
    { name: 'Gold Package', credit: 500, bonus: '50 Credit', price: 430 },
    { name: 'Diamond Package', credit: 700, bonus: '50 Credit', price: 600 },
    { name: 'Super Special Package', credit: 1000, bonus: '70 Credit', price: 800 },
  ];
  

}
