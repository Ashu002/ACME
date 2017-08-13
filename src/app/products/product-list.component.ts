import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
    //selector: 'pm-products',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit{

    /* private _productServiice;

    constructor(productService: ProductService){
        this._productServiice = productService;
    } */

    //Short-cut of the above code
    constructor(private _productServiice: ProductService){ // much readable

    }
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    ImageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    errorMessage: string;
    products: IProduct[];
    toggleImage(): void{
        console.log('you clicked the show image button', this.showImage);
        this.showImage = !this.showImage;
    };

    ngOnInit(): void{
        console.log('The product list component has initialized');
        this._productServiice.getProducts()
                    .subscribe(
                        products => this.products = products,
                        error => this.errorMessage = <any>error
                    );
    }

    onRatingClicked(msg: string): void{
        this.pageTitle = 'Product  List : ' + msg;
    }
}