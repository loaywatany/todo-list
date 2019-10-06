import { Component, OnInit } from '@angular/core';
import { ITodoList } from './../models/todo-list';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  contentList: string;
  allList: ITodoList[] = [
    {
      content: 'creat new project'
    }
  ];


  constructor() { }

  ngOnInit() {
  }
  addNewList() {
    const newList: ITodoList = {
      content: this.contentList
    }
    if ( this.contentList != ''){
    this.allList.push(newList);
    this.contentList = '';
  }

  }

  deleteList(index: number) {
    this.allList.splice(index, 1);
  }
}
