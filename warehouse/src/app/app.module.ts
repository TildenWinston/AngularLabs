import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ReceiveProductComponent } from './receiving/receive-product.component';
import { ShipOrderComponent } from './shipping/ship-order.component';
import { OrdersToShipComponent } from './shipping/orders-to-ship.component';
import { routing } from './app.router';
import { FormsModule } from "@angular/forms";
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ListOfOrdersComponent } from './shipping/list-of-orders/list-of-orders.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InventoryComponent,
    ReceiveProductComponent,
    ShipOrderComponent,
    OrdersToShipComponent,
    ContactUsComponent,
    ListOfOrdersComponent,
    
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
