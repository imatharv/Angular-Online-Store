import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ProductDetailsComponent } from '../../components/product-details/product-details.component';

// const routes: Routes = [
//   { path: "home/product", component:ProductDetailsComponent },
// ];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
