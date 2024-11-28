import { Injectable } from '@angular/core';
import { Task } from './todo/models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  toggleTask(id: number) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) task.completed = !task.completed;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
}

