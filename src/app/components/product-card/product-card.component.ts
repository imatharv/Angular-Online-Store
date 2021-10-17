import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../../services/productService/product-service.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  
  constructor( private service: ProductServiceService, private router: Router ) { }
  
  totalProducts: any = 0;
  products: Array<any> = [];
  product: any

  getAllProducts() {
    this.service.getProducts().subscribe((data:any) => {
      this.products = data["result"];
      this.totalProducts = this.products.length
      console.log(this.products);
    });
  }

  productDetails(product:any) {
    this.product = product
    this.router.navigate(["/home/product"], { state: { data: product } })
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

}
