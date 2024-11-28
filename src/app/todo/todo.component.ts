import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  tasks: Task[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({
        id: Date.now(),
        title: this.newTask,
        completed: false,
      });
      this.newTask = '';
    }
  }

  toggleTask(id: number) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) task.completed = !task.completed;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
}

