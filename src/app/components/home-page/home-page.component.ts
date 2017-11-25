import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MnFullpageService } from 'ngx-fullpage';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {
  service: MnFullpageService;

  constructor(service: MnFullpageService) {
    this.service = service;
  }

  moveToContactForm() {
    this.service.moveTo(4);
  }

  ngOnInit() {
  }

}
