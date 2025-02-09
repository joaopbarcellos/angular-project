import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleComponent } from './title.component';
import { By } from '@angular/platform-browser';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    component.title = 'Test Title';
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title', () => {
    const titleElement = fixture.debugElement.query(By.css('h1'));
    expect(titleElement.nativeElement.textContent).toContain('Test Title');
  });

  it('should update the title dynamically', () => {
    component.title = 'Updated Title';
    fixture.detectChanges();
    const titleElement = fixture.debugElement.query(By.css('h1'));
    expect(titleElement.nativeElement.textContent).toContain('Updated Title');
  });
});
