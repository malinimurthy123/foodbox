import { Injectable } from "@angular/core";
import { RouterModule} from "@angular/router";

export interface ArrayType{
    productId:number,
    productName: string,
    productCat : string,
    productPrice : number,
    productImg : string,
  }
  
@Injectable({
    providedIn: 'root'
})

export class SearchService{
    
    private cartList: ArrayType[] = [];
     mail : string = 'consumer@gmail.com';
     pass : string = 'consumer1';
    private productList: ArrayType[]= [
        {productId:1,
        productName:"Greens",
      productCat : "Vegetables",
      productPrice : 11,
      productImg :"https://cdn.shopify.com/s/files/1/0439/9857/6805/products/image_8782f529-9343-4853-ae51-d7607bb89c59.jpg?v=1599899234"},
      {productId:2,
      productName:"Avacado",
      productCat : "Fruits",
      productPrice : 59,
      productImg :"https://cdn.shopify.com/s/files/1/0439/9857/6805/products/image_7c1f6198-fa01-4eb4-9be5-7f22015cb003_540x.jpg?v=1599173975"},
      {productId:3,
      productName:"Brown-Bread",
      productCat : "Bread",
      productPrice : 45,
      productImg :"https://cdn.shopify.com/s/files/1/0439/9857/6805/products/Capture_8e231c6e-0317-4120-801e-0c3988d1363b_460x.jpg?v=1599697260"},
      {productId:4,
      productName:"Corn-flakes",
      productCat : "Cereals",
      productPrice : 11,
      productImg :"https://cdn.shopify.com/s/files/1/0439/9857/6805/products/download_92_300x.jpg?v=1611291171"},
      {productId:5,
      productName:"Buffalo-Milk",
      productCat : "Milk",
      productPrice : 10,
      productImg :"https://cdn.shopify.com/s/files/1/0439/9857/6805/products/image_47905a95-964c-48d0-a73d-ff76391ebc5c_720x.jpg?v=1598299502"},
      {productId:6,
      productName:"Tomato",
      productCat : "Vegetables",
      productPrice : 25,
      productImg :"https://cdn.shopify.com/s/files/1/0439/9857/6805/products/image_4b43459b-d00e-4ae1-a471-dc5cb7288f9f_720x.jpg?v=1599896778"},
      {productId:7,
      productName:"Apple",
      productCat : "Fruits",
      productPrice : 65,
      productImg :"https://cdn.shopify.com/s/files/1/0439/9857/6805/products/image_aee47e89-edcd-4e29-914b-f89ae419f594_720x.jpg?v=1607231737"},
      {productId:8,
      productName:"Multigrain-Bread",
      productCat : "Oats Banana Bread",
      productPrice : 50,
      productImg :"https://cdn.shopify.com/s/files/1/0439/9857/6805/products/image_70695614-fc9a-41ec-bb84-ffbcfa40f466_720x.jpg?v=1601270485"},
      {productId:9,
      productName:"Oats",
      productCat : "Cereals",
      productPrice : 21,
      productImg :"https://cdn.shopify.com/s/files/1/0439/9857/6805/products/image_7f210b4d-7ae7-468b-848a-ab18c5873fa5_720x.jpg?v=1598246432"},
      {productId:10,
      productName:"Eggs",
      productCat : "Eggs",
      productPrice : 30,
      productImg :"https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    
    ];
  
    changepwd(pwd:string)
    {
      this.pass = pwd;
    }
    getpwd(){
      return this.pass;
    }
    getProducts():ArrayType[] {

        return this.productList;
    }
    deleteProduct(id: number) {
      const index = this.productList.findIndex(
        product => product.productId === id
      )

      if(index >= 0){
        this.productList.splice(index,1);
      }
      
    }
    addProduct(newproduct : ArrayType){
      this.productList.push(newproduct);
    }
    GoToAdmin(){}
    addCartProduct(cartItems : ArrayType){
      this.cartList.push(cartItems);
    }
    getCartProducts():ArrayType[] {

      return this.cartList;
    }
    onAddCartProduct(addpro : ArrayType){
      this.cartList.push(addpro);
    }
}
