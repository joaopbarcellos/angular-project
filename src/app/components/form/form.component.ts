import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-form',
  imports: [FieldComponent, ButtonComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() fields: { id: string; label: string; placeholder: string, value: string, type: string }[] = [];
  @Output() formSubmit = new EventEmitter<any>();


  entradaDados(field: { id: string; label: string; placeholder: string, value: string }){
    console.log(field)
    //this.fields.find(f => f.id === field.id)!.value = field.value;
  }

  submit(){
    const data = this.fields.reduce((acc: any, field: any) => {
      acc[field.id] = field.value;
      return acc;
    }, {});

    this.formSubmit.emit(data);
  }
}
