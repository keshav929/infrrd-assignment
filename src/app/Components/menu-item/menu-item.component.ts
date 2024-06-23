import { Component, Input } from '@angular/core';
import { menuItem } from '../../Config/menu.config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {

  @Input() menuItem : menuItem = {
    isLink: false,
    name: 'ABC',
    icon: ''
  };

  constructor() {
    console.log(this.menuItem);
  }
}
