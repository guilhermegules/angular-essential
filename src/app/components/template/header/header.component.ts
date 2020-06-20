import { HeaderService } from './../../../services/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  get title(): string {
    return this.headerService.getHeaderData.title;
  }

  get icon(): string {
    return this.headerService.getHeaderData.icon;
  }

  get route(): string {
    return this.headerService.getHeaderData.route;
  }
}
