import { HeaderService } from './../../services/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {}

  ngOnInit(): void {
    this.initHeaderService();
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }

  initHeaderService(): void {
    this.headerService.setHeaderData = {
      title: 'Produtos',
      icon: 'storefront',
      route: '/products',
    };
  }
}
