import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

  searchText: any;  
  products: any[] = [
    {productName:"Greens",
  productCat : "z",
  productPrice : 3,
  productImg :"/assets/images/s.png"},
  {productName:"Avacado",
  productCat : "y",
  productPrice : 7,
  productImg :"/assets/images/s.png"},
  {productName:"Bread",
  productCat : "x",
  productPrice : 9,
  productImg :"/assets/images/s.png"},
  {productName:"Cereals",
  productCat : "a",
  productPrice : 9,
  productImg :"/assets/images/s.png"},
  {productName:"Dairy Products",
  productCat : "b",
  productPrice : 9,
  productImg :"/assets/images/s.png"},

  ]
  
  

}