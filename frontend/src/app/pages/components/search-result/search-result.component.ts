import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from 'src/app/global/services/category/category.service';
import { CartService } from 'src/app/global/services/cart/cart.service';
import { MainCategory, SubCategory, Product } from 'src/app/global/models/category/category.model';
import { CartItemModel } from 'src/app/global/models/cart/cart.model';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  products: any[] = [];
  query: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private categoryService: CategoryService,
    private cartService: CartService // Inject the CartService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.query = params['query'];
      this.fetchProducts();
    });
  }

  private fetchProducts(): void {
    this.http.get<any[]>('assets/products.json').subscribe(
      data => {
        this.products = data.filter(product =>
          product.Name.toLowerCase().includes(this.query.toLowerCase())
        );
      },
      error => console.error('Error loading products', error)
    );
  }

  // Method to add product to cart
  addToCart(product: Product): void {
    const cartItem = new CartItemModel({
      NameID: product.NameID,
      Name: product.Name,
      Price: product.Price,
      Amount: 1, // Default quantity to add
      ImagePath: product.ImagePath,
      selected: false
    });

    this.cartService.add(cartItem).subscribe(
      (addedProduct) => {
        // alert(`Successfully added ${product.Name} to the cart`); // Show an alert
        console.log(`Product added to cart: ${addedProduct.Name}`);
      },
      (error) => {
        console.error('Error adding product to cart', error);
      }
    );
  }
}
