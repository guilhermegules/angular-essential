import { HeaderData } from './../../models/header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private headerData = new BehaviorSubject<HeaderData>({
    title: 'Inicio',
    icon: 'dashboard',
    route: '',
  });

  get getHeaderData(): HeaderData {
    return this.headerData.value;
  }

  // eslint-disable-next-line accessor-pairs
  set setHeaderData(headerData: HeaderData) {
    this.headerData.next(headerData);
  }
}
