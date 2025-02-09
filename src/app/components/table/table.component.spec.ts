import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { Component } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
@Component({
  selector: 'app-mock-host',
  template: '<app-table [headers]="testHeaders" [items]="testItems"></app-table>'
})
class MockHostComponent {
  testHeaders = ['Name', 'Age', 'City'];
  testItems = [
    { id: 1, Name: 'Alice', Age: 25, City: 'New York' },
    { id: 2, Name: 'Bob', Age: 30, City: 'Los Angeles' }
  ];
}

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableComponent, MockHostComponent, HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render table headers', () => {
    component.headers = ['Name', 'Age', 'City'];
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const headers = compiled.querySelectorAll('th');
    expect(headers.length).toBe(3);
    expect(headers[0].textContent).toContain('Name');
    expect(headers[1].textContent).toContain('Age');
    expect(headers[2].textContent).toContain('City');
  });

  it('should render table rows correctly', () => {
    component.items = [
      { id: 1, Name: 'Alice', Age: 25, City: 'New York' },
      { id: 2, Name: 'Bob', Age: 30, City: 'Los Angeles' }
    ];
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('tbody tr');
    expect(rows.length).toBe(2);
    expect(rows[0].textContent).toContain('Alice');
    expect(rows[1].textContent).toContain('Bob');
  });
});
