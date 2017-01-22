import { Component} from '@angular/core';
import { ProductService } from './products/product.service'

@Component({
    selector: 'pm-app',
    template: `
    <div><h1>{{pageTitle}}</h1>
        <div>My First Component</div>
        <pm-products></pm-products>
    </div>
    `,
    //Required by Injection, all ancestor have access to this Service
    providers: [ ProductService ]
})
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}