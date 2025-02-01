import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input("message") message!: string;
  @Output() click = new EventEmitter<any>();

  submit() {
    this.click.emit();
  }
}
