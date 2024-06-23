import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.css'
})
export class ConfirmationModalComponent {
  @Input() modalContent: string = '';

  @Output() triggerCancel = new EventEmitter<any>();
  @Output() triggerConfirm = new EventEmitter<any>();


  handleYes(data:any) {
    this.triggerConfirm.emit();
  }

  handleCancel(data: any) {
    this.triggerCancel.emit();
  }
}
