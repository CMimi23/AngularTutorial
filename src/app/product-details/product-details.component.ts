import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product, products} from "../products";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  productDetails : Product | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const productRouteParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(productRouteParams.get("productId"));

    this.productDetails = products.find(product => product.id === productIdFromRoute);
  }
}
