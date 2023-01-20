import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  
  ngOnInit(): void {
  }

names = Array();  //je declare tous les noms dans un tableau
    constructor() {
        this.names =  this.getNames();
    }
    getNames() {
        return [
            { 'name': 'kouakou' },
            { 'name': 'kouassi' },
            { 'name': 'yves' },
            { 'name':'armand'}
        ];
    }
}
