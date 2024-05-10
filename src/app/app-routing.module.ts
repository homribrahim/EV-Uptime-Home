import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/loginSupplier/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignUpSupplierComponent } from './components/sign-up-supplier/sign-up-supplier.component';
import { DashboardComponent } from './components/supplierDashboard/dashboard/dashboard.component';
import { AppointementsComponent } from './components/supplierDashboard/appointements/appointements.component';
import { BrandsComponent } from './components/supplierDashboard/brandsMagazine/brands/brands.component';
import { PluggersComponent } from './components/supplierDashboard/pluggers/pluggers.component';
import { AddBrandComponent } from './components/supplierDashboard/brandsMagazine/add-brand/add-brand.component';
import { AddModelComponent } from './components/supplierDashboard/brandsMagazine/add-model/add-model.component';
import { AddPluggerComponent } from './components/supplierDashboard/pluggers/add-plugger/add-plugger.component';
import { ModelsComponent } from './components/supplierDashboard/brandsMagazine/models/models.component';
import { DashboardClientComponent } from './components/clientDashboard/dashboard-client/dashboard-client.component';
import { AppointementsClientComponent } from './components/clientDashboard/appointements-client/appointements-client.component';
import { LoginClientComponent } from './components/login-client/login-client.component';





const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loginClient', component: LoginClientComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'supsignup', component: SignUpSupplierComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboardClient', component: DashboardClientComponent,
  children: [
    { path: 'appointements', component: AppointementsClientComponent },
  ]
   },

  { path: 'dashboard', component: DashboardComponent,
  children: [
    { path: 'appointements', component: AppointementsComponent },
    { path: 'brands', component: BrandsComponent },
    { path: 'brands/add-brand', component: AddBrandComponent },
    { path: 'brands/add-model', component: AddModelComponent },
    { path: "brands/:id/models", component: ModelsComponent },
    { path: 'pluggers', component: PluggersComponent },
    { path: 'pluggers/add-plugger', component: AddPluggerComponent },


  ]
   },
/*   { path: '**', component: NotFoundComponent },
 */];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
