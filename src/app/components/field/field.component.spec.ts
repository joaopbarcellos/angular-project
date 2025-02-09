import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FieldComponent } from './field.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('FieldComponent', () => {
  let component: FieldComponent;
  let fixture: ComponentFixture<FieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, FieldComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldComponent);
    component = fixture.componentInstance;
    component.id = 'testField';
    component.label = 'Test Label';
    component.placeholder = 'Enter text';
    component.type = 'text';
    component.value = '';
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the label correctly', () => {
    const labelElement = fixture.debugElement.query(By.css('label'));
    expect(labelElement.nativeElement.textContent).toContain('Test Label');
  });

  it('should update the value on input event', () => {
    spyOn(component, 'entrada');
    const inputElement = fixture.debugElement.query(By.css('input'));
    inputElement.nativeElement.value = 'New Value';
    inputElement.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.entrada).toHaveBeenCalled();
  });
});
