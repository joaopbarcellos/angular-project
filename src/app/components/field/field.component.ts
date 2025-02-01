import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-field',
  imports: [FormsModule],
  templateUrl: './field.component.html',
  styleUrl: './field.component.css'
})
export class FieldComponent {
  @Input("id") id!: string;
  @Input("placeholder") placeholder!: string;
  @Input("label") label!: string;
  @Input("value") value?: string;
  @Input("type") type!: string;

  @Output() newInput = new EventEmitter<any>();

  entrada() {
    this.newInput.emit(this);
  }
}
