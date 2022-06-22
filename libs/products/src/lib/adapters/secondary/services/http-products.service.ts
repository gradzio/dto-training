import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { GetsAllProductDtoPort } from '../../../application/ports/secondary/dto/gets-all-product.dto-port';
import { RemovesProductDtoPort } from '../../../application/ports/secondary/dto/removes-product.dto-port';
import { AddsProductDtoPort } from '../../../application/ports/secondary/dto/adds-product.dto-port';
import { ProductDTO } from '../../../application/ports/secondary/dto/product.dto';

@Injectable()
export class HttpProductsService
  implements GetsAllProductDtoPort, RemovesProductDtoPort, AddsProductDtoPort
{
  private _data = [
    { id: 1, name: 'T-Shirt', price: 30 },
    { id: 2, name: 'Jacket', price: 100 },
  ];
  constructor() {}

  getAll(): Observable<ProductDTO[]> {
    return of(this._data);
  }

  remove(id: number): Observable<void> {
    this._data = this._data.filter((dto) => dto.id !== id);
    return of(void 0);
  }

  add(product: Omit<ProductDTO, 'id'>): Observable<void> {
    this._data.push({ ...product, id: this._data.length + 1 });
    return of(void 0);
  }
}
