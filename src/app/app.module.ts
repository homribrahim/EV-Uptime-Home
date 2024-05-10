import { SignupComponent } from './components/signup/signup.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/loginSupplier/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpSupplierComponent } from './components/sign-up-supplier/sign-up-supplier.component';
import { DashboardComponent } from './components/supplierDashboard/dashboard/dashboard.component';
import { HeaderComponent } from './components/supplierDashboard/header/header.component';
import { SideNavComponent } from './components/supplierDashboard/side-nav/side-nav.component';
import { MainComponent } from './components/supplierDashboard/main/main.component';
import { AppointementsComponent } from './components/supplierDashboard/appointements/appointements.component';
import { BrandsComponent } from './components/supplierDashboard/brandsMagazine/brands/brands.component';
import { PluggersComponent } from './components/supplierDashboard/pluggers/pluggers.component';
import { AddBrandComponent } from './components/supplierDashboard/brandsMagazine/add-brand/add-brand.component';
import { AddModelComponent } from './components/supplierDashboard/brandsMagazine/add-model/add-model.component';
import { AddPluggerComponent } from './components/supplierDashboard/pluggers/add-plugger/add-plugger.component';
import { ModelsComponent } from './components/supplierDashboard/brandsMagazine/models/models.component';
import { HeaderClientComponent } from './components/clientDashboard/header-client/header-client.component';
import { MainClientComponent } from './components/clientDashboard/main-client/main-client.component';
import { SideNavClientComponent } from './components/clientDashboard/side-nav-client/side-nav-client.component';
import { DashboardClientComponent } from './components/clientDashboard/dashboard-client/dashboard-client.component';
import { AppointementsClientComponent } from './components/clientDashboard/appointements-client/appointements-client.component';
import { LoginClientComponent } from './components/login-client/login-client.component';

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
    HeaderClientComponent,
    MainClientComponent,
    SideNavClientComponent,
    DashboardClientComponent,
    AppointementsClientComponent,
    LoginClientComponent,
 
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
