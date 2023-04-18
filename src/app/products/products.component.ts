import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

  searchText: any;  
  products: any[] = [
    {productName:"Biryani",
  productCat : "z",
  productPrice : 3,
  productImg :"/assets/images/s.png"},
  {productName:"Veggie Bowl",
  productCat : "y",
  productPrice : 7,
  productImg :"/assets/images/vegetarian-means.jpg"},
  {productName:"Cereals",
  productCat : "x",
  productPrice : 9,
  productImg :"/assets/images/s.png"},
  {productName:"Noodles",
  productCat : "a",
  productPrice : 9,
  productImg :"/assets/images/s.png"},
  {productName:"Fried Rice",
  productCat : "b",
  productPrice : 9,
  productImg :"/assets/images/s.png"},
  ]
    

}