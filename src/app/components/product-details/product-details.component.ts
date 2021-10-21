import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: any;

  constructor( private router: Router ) {
    this.product = this.router.getCurrentNavigation()?.extras.state;
    (this.product)
  }

  ngOnInit(): void {
  }

}
