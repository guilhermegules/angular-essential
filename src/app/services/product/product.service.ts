import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(message: string): void {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  AddProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.apiUrl}/products`, product);
  }
}
