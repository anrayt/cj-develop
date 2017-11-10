import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgClass } from '@angular/common';
import { MenuItem } from './menu-item';

@Component({
  selector: '[menu]',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent {
  
  @Input() public menuItems: MenuItem[] = [
    new MenuItem("Купить", "menuAnchor1", true),
    new MenuItem("Информация", "menuAnchor2", false),
    new MenuItem("Товары", "menuAnchor3", false),
    new MenuItem("Картинки", "menuAnchor4", false),
    new MenuItem("О Нас", "menuAnchor5", false),
    new MenuItem("Контакты", "menuAnchor6", false),
  ];

}
