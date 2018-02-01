import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() model: any
  filterText: string
  filteredModel: any;

  constructor() { }

  ngOnInit() {
    console.log(this.model);

    if (!this.model) {
      this.model = [
        new Todo({ id: 1, title: "Learn Angular" }),
        new Todo({
          id: 2, title: "Learn fundamental React and master modern webdevelopment by building single page application",
          completed: true, edit: false, bookmarked: false
        }),
        new Todo({ id: 3, title: "Learn basic HapiJS", completed: false, edit: false, bookmarked: false })
      ];

    }
    this.filteredModel = this.model;
  }

  generateKey(obj) {
    return Object.keys(obj).map((key) => { return key });
  }

  generateArray(obj) {
    return Object.keys(obj).map((key) => { return obj[key] });
  }

  filter() {
    console.log("Filter: ", this.filterText);
    let filteredList = this.model.filter((data) => {
      let search = this.filterText.toLowerCase();
      var values = Object.values(data);
      var flag = false;
      values.forEach((val) => {
        if (val.toString().toLowerCase().indexOf(search) > -1) {
          flag = true;
          return;
        }
      });
      if (flag) return data;
    });
    console.log("Filtered records: ", filteredList);
    this.filteredModel = filteredList;
  }
}
