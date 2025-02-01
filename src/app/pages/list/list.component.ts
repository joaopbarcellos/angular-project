import { Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { ListService } from '../../services/list.service';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-list',
  imports: [TableComponent, TitleComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  headers = ['Nome', 'Login'];
  items: ResponseType[] = [];

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.listService.list().subscribe(
      data => this.items = data
    );
  }
}
