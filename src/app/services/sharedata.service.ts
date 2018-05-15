import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Product } from '../model/product.model';

@Injectable()
export class SharedataService {

  private dataSource = new BehaviorSubject<any>(new Product());
  currentData = this.dataSource.asObservable();

  constructor() { }

  changeData(data: any) {
    this.dataSource.next(data)
  }


}
