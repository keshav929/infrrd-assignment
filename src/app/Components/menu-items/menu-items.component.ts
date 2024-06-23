import { Component } from '@angular/core';
import { MENU_ITEMS, menuItemConfig } from '../../Config/menu.config';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [NgFor, MenuItemComponent],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.css'
})
export class MenuItemsComponent {
  menuItems: menuItemConfig = MENU_ITEMS;

  constructor() {
    console.log(MENU_ITEMS);
  }
}
