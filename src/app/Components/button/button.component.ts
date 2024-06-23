import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() name: string = '';
  @Input() classAttribute: string = '';
  @Input() disabled?: boolean = false;

  @Output() clickEvent = new EventEmitter<any>();

  triggerClick(event: any): void {
    this.clickEvent.emit(event);
  }
}
