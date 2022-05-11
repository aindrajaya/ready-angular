import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos', //to export on the index html tag
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  //Declaring variables by using Typescript model
  todos:Todo[] | undefined;
  inputTodo:string = "";

  constructor() { }

  //Initialization data, componentDidMount in React
  ngOnInit(): void {
    this.todos = [
      {content: 'First Todo', completed: false},
      {content: 'Second Todo', completed: false}
    ]
  }

  //Component did update
  toggleDone(id: number){
    this.todos?.map((v, i) => {
      if(i == id) v.completed = !v.completed;
      return v;
    })
  }

  deleteTodo(id: number){
    this.todos = this.todos?.filter((v, i) => i !== id);
  }

  //Component did update
  addTodo(){
    this.todos?.push({
      content: this.inputTodo,
      completed: false
    })
    this.inputTodo = ""
  }
}
