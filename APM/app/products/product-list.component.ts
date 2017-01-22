import{ Component, OnInit } from '@angular/core'
import {IProduct} from './product'

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
 listFilter: string = 'cart';
 products: IProduct[] = [
     {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    }
 ];
 toggleImage(): void{
     this.showImage = ! this.showImage;
 }
 ngOnInit(): void {
     console.log('In OnInit');
 }
 onRatingClicked(message: string): void{
     this.pageTitle = 'Product List: ' + message;
 }
}