import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AccountComponent } from './pages/account/account.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { HomeComponent } from './pages/home/home.component';
import { UserVerificationComponent } from './pages/user-verification/user-verification.component';

const routes: Routes = [
  { path: "account", component:AccountComponent },
  { path: "forgot-password", component:ForgotPasswordComponent },
  { path: "account/verification", component:UserVerificationComponent },
  { path: "home", component:HomeComponent },
  { path: "home/product", component:ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
