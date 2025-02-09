import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  standalone: true
})
export class TableComponent {
  @Input() headers: string[] = [];
  @Input() items: any[] = [];

  objectKeys = Object.keys;
}
