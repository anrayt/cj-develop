import { Component, Input, Output, ViewEncapsulation } from '@angular/core';
import { MnFullpageOptions, MnFullpageService } from 'ngx-fullpage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
    controlArrows: false,
    slidesNavigation: true,
    scrollingSpeed: 1000,
    menu: '.menu',
    css3: true,
    anchors: [
      'menuAnchor1', 'menuAnchor2', 'menuAnchor3',
      'menuAnchor4', 'menuAnchor5', 'menuAnchor6'
    ]
  });
}
