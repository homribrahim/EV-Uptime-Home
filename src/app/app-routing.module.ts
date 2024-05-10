import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpSupplierComponent } from './components/sign-up-supplier/sign-up-supplier.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppointementsComponent } from './components/appointements/appointements.component';
import { BrandsComponent } from './components/brandsMagazine/brands/brands.component';
import { PluggersComponent } from './components/pluggers/pluggers.component';
import { AddBrandComponent } from './components/brandsMagazine/add-brand/add-brand.component';
import { AddModelComponent } from './components/brandsMagazine/add-model/add-model.component';
import { AddPluggerComponent } from './components/pluggers/add-plugger/add-plugger.component';
import { ModelsComponent } from './components/brandsMagazine/models/models.component';




const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'supsignup', component: SignUpSupplierComponent },
  { path: 'home', component: HomeComponent },
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
