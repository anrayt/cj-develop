import { Injectable } from '@angular/core';
import { Product } from './product';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  products: Observable<Product[]>;
  constructor(firebaseDB: AngularFireDatabase) {
    this.products = firebaseDB.list<Product>('/items').valueChanges()
   }

  getAllPorducts(): Observable<Product[]> {
    return this.products;
  }

}
