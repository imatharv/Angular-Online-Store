import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AccountComponent } from './pages/account/account.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { HomeComponent } from './pages/home/home.component';
import { UserVerificationComponent } from './pages/user-verification/user-verification.component';

const routes: Routes = [
  { path: "account", component:AccountComponent },
  { path: "forgot-password", component:ForgotPasswordComponent },
  { path: "account/verification", component:UserVerificationComponent },
  { path: "home", component:HomeComponent, children: [
      {
        path: '',
        component: ProductCardComponent, 
      },
      {
        path: 'product',
        component: ProductDetailsComponent, 
      },
      // {
      //   path: 'wishlist',
      //   component: ChildBComponent, 
      // },
      // {
      //   path: 'cart',
      //   component: ChildBComponent, 
      // }
  ] },

  // { path: "home/product", component:ProductDetailsComponent },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
