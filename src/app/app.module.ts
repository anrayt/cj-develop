import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './components/product-list/product.service';

import { FirebaseModule } from './firebase';

import { SwiperModule } from 'angular2-useful-swiper';
import { MnFullpageModule } from 'ngx-fullpage';
import { MenuComponent } from './menu/menu.component';
import { SectionListComponent } from './section-list/section-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    MenuComponent,
    SectionListComponent,
    HomePageComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'cj-develop'}),
    FormsModule,
    HttpModule,
    FirebaseModule,
    SwiperModule,
    MnFullpageModule.forRoot()
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
