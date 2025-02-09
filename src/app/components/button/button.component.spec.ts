import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    component.message = 'ENVIAR';
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct message', () => {
    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.nativeElement.textContent).toContain('ENVIAR');
  });

  it('should call onSubmit when clicked', () => {
    spyOn(component, 'onSubmit');
    const buttonElement = fixture.debugElement.query(By.css('button'));
    buttonElement.triggerEventHandler('click', null);
    expect(component.onSubmit).toHaveBeenCalled();
  });
});
