import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { ProductsComponent } from './Pages/products/products.component';
import { LoginComponent } from './Pages/login/login.component';
import { BookingComponent } from './Pages/booking/booking.component';
import { LocationComponent } from './Pages/location/location.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { PrimengComponentsModule } from 'src/assets/primeng-components/primeng-components.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    BookingComponent,
    LocationComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
