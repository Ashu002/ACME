import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared/share.module';

import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-details.component';
import {ProductFilterPipe} from './ProductFilterPipe';

import{ProductDetailGuardService} from './product-guard.service';
import{ProductService} from './product.service';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: 'products', component: ProductListComponent},
            {path: 'product/:id',canActivate: [ProductDetailGuardService], component: ProductDetailComponent},
        ])],
    declarations: [
        ProductListComponent, 
        ProductDetailComponent, 
        ProductFilterPipe,
    ],
    providers: [
        ProductService,
        ProductDetailGuardService
    ]
})

export class ProductModule{

}