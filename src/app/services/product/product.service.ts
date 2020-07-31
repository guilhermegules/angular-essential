import { Product } from './../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(message: string, isError = false): void {
    this.snackBar.open(message, '✕', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['message__error'] : ['message__success'],
    });
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.apiUrl}/products`, product).pipe(
      map(value => value),
      catchError(err => this.errorHandler(err)),
    );
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/products`);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.apiUrl}/products/${id}`);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${environment.apiUrl}/products/${product.id}`, product);
  }

  removeProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`${environment.apiUrl}/products/${id}`);
  }

  private errorHandler(error: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return error;
  }
}
