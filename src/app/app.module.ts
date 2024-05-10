import { SignupComponent } from './components/signup/signup.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpSupplierComponent } from './components/sign-up-supplier/sign-up-supplier.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MainComponent } from './components/main/main.component';
import { AppointementsComponent } from './components/appointements/appointements.component';
import { BrandsComponent } from './components/brandsMagazine/brands/brands.component';
import { PluggersComponent } from './components/pluggers/pluggers.component';
import { AddBrandComponent } from './components/brandsMagazine/add-brand/add-brand.component';
import { AddModelComponent } from './components/brandsMagazine/add-model/add-model.component';
import { AddPluggerComponent } from './components/pluggers/add-plugger/add-plugger.component';
import { ModelsComponent } from './components/brandsMagazine/models/models.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LandingPageComponent, 
    NotFoundComponent,
    HomeComponent,
    SignUpSupplierComponent,
    DashboardComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    AppointementsComponent,
    BrandsComponent,
    PluggersComponent,
    AddBrandComponent,
    AddModelComponent,
    AddPluggerComponent,
    ModelsComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
 
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
