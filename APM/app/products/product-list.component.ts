import{ Component, OnInit } from '@angular/core'
import {IProduct} from './product'
import { ProductService } from './product.service'

@Component({
    //directive: can be used in html tags, replace the template content
    selector: 'pm-products',
    // to use component-reletive path instead of abslute path
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit {
    //interpolation :bind to html {{pageTittle}}, from component class property to an element property
 pageTitle: string = 'Product List';
 imageWidth: number = 50;
 imageMargin: number = 2;
 showImage: boolean = false;
 listFilter: string = '';
 products: IProduct[] = [];
 errorMessage: string;

//initicated a private variable _productService and assign to ProductService
 constructor (private _productService: ProductService) {

 }

 toggleImage(): void{
     this.showImage = ! this.showImage;
 }
 ngOnInit(): void {
     console.log('In OnInit');
     //subscribe the return of getProducts to products, and set this.products value to the return data
     this._productService.getProducts()
        .subscribe(products => this.products = products,
                error => this.errorMessage = <any>error);
 }
 onRatingClicked(message: string): void{
     this.pageTitle = 'Product List: ' + message;
 }
}