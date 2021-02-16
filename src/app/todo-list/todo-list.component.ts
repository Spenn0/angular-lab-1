import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  toDoList: Todo[] = [
    {
      task: 'record',
      completed: true,
    },
    {
      task: 'exercise',
      completed: true,
    },
    {
      task: 'write',
      completed: false,
    },
    {
      task: 'apply to jobs as a front end developer',
      completed: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleTask = (task: Todo): void => {
    task.completed = !task.completed;
  };

  deleteTask = (index: number): void => {
    this.toDoList.splice(index, 1);
  };

  // onSubmit = () => {};
  // setSearchTerm = (form: NgForm) => {
  //   console.log(form.form.value.term);
  //   this.searchTerm = form.form.value.term;
  // };

  filter = (term: string): Todo[] => {
    return this.toDoList.filter((item) => {
      let currentItem = item.task.toLowerCase().trim();
      return currentItem.includes(term.toLowerCase().trim());
    });
  };
  //   addTask = (form: NgForm): void => {
  //     console.log(form);
  //     let newTask: Todo = {
  //       task: form.form.value.task,
  //       completed: form.form.value.task === 'false',
  //     };
  //     this.toDoList.push(newTask);
  //   };
}
