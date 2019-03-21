import { RouterModule } from "@angular/router"; 
import { AppComponent } from "./app.component";
import { OrdersToShipComponent } from "./shipping/orders-to-ship.component";
import { ReceiveProductComponent } from "./receiving/receive-product.component";
import { ShipOrderComponent } from "./shipping/ship-order.component";
import { InventoryComponent } from "./inventory/inventory.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";

const routes = [
    {path: "", component: DashboardComponent},
    {path: "ship", component: OrdersToShipComponent},
    {path: "receive", component: ReceiveProductComponent},
    {path: "ship/:orderID", component: ShipOrderComponent},
    {path: "inventory", component: InventoryComponent},
    {path: "contact", component: ContactUsComponent},
    

];

export const routing = RouterModule.forRoot(routes);