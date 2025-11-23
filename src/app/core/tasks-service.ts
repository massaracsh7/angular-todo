import { Injectable, signal } from '@angular/core';
import { Task, Categories } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  public tasks = signal<Task[]>([
    {
      id: '0',
      name: 'FirstTask',
      priority: 'низкий',
      category: Categories.Work,
      isDone: false
    },
        {
      id: '1',
      name: 'SecondTask',
      priority: 'высокий',
      category: Categories.Study,
      isDone: true
    },
  ]);
}