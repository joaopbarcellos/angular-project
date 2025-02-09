import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@Component({
  selector: 'app-field',
  template: '<input [id]="id" [placeholder]="placeholder" [value]="value" [type]="type" (input)="newInput.emit($event)">'  
})
class MockFieldComponent {
  @Input() id!: string;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() value!: string;
  @Input() type!: string;
  @Output() newInput = new EventEmitter<Event>();
}

@Component({
  selector: 'app-button',
  template: '<button (click)="submit.emit()">{{ message }}</button>'
})
class MockButtonComponent {
  @Input() message!: string;
  @Output() submit = new EventEmitter<void>();
}

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComponent, MockFieldComponent, MockButtonComponent, HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.fields = [
      { id: 'name', label: 'Name', placeholder: 'Enter name', value: '', type: 'text' }
    ];
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render fields', () => {
    const fieldElements = fixture.debugElement.queryAll(By.css('app-field'));
    expect(fieldElements.length).toBe(1);
  });

  it('should render submit button', () => {
    const buttonElement = fixture.debugElement.query(By.css('app-button'));
    expect(buttonElement).toBeTruthy();
  });

  it('should call submit method when button is clicked', () => {
    spyOn(component, 'submit');
    const buttonElement = fixture.debugElement.query(By.css('app-button'));
    buttonElement.triggerEventHandler('submit', null);
    expect(component.submit).toHaveBeenCalled();
  });
});
