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
      productImg :"https://images.pexels.com/photos/1751149/pexels-photo-1751149.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
      {productId:2,
      productName:"Avacado",
      productCat : "Fruits",
      productPrice : 29,
      productImg :"https://images.pexels.com/photos/3673762/pexels-photo-3673762.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
      {productId:3,
      productName:"Brown-Bread",
      productCat : "Bread",
      productPrice : 25,
      productImg :"https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
      {productId:4,
      productName:"Corn-flakes",
      productCat : "Cereals",
      productPrice : 210,
      productImg :"https://images.pexels.com/photos/3806760/pexels-photo-3806760.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
      {productId:5,
      productName:"Cow-Milk",
      productCat : "Milk",
      productPrice : 20,
      productImg :"https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
      {productId:6,
      productName:"Tomato",
      productCat : "Vegetables",
      productPrice : 55,
      productImg :"https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
      {productId:7,
      productName:"Apple",
      productCat : "Fruits",
      productPrice : 35,
      productImg :"https://images.pexels.com/photos/209439/pexels-photo-209439.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
      {productId:8,
      productName:"Multigrain-Bread",
      productCat : "Oats Banana Bread",
      productPrice : 25,
      productImg :"https://images.pexels.com/photos/4193800/pexels-photo-4193800.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
      {productId:9,
      productName:"Oats",
      productCat : "Cereals",
      productPrice : 15,
      productImg :"https://images.pexels.com/photos/1080105/pexels-photo-1080105.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
      {productId:10,
      productName:"Eggs",
      productCat : "Eggs",
      productPrice : 10,
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