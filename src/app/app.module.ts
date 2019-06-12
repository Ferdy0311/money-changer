import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { CurrencyMaskModule } from "ng2-currency-mask";
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "ng2-currency-mask/src/currency-mask.config";

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "center",
  allowNegative: true,
  decimal: ",",
  precision: 0,
  prefix: "Rp ",
  suffix: "",
  thousands: "."
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CurrencyMaskModule
  ],
  providers: [ 
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
