import { computed, Injectable, signal } from '@angular/core';
import { Task, Categories, Priority } from '../models/task.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  public tasks = signal<Task[]>([
    {
      id: '0',
      name: 'FirstTask',
      priority: Priority.Low,
      category: Categories.Work,
      isDone: false
    },
    {
      id: '1',
      name: 'SecondTask',
      priority: Priority.High,
      category: Categories.Study,
      isDone: true
    },
  ]);

  filterCategory = (cat: Categories) => computed(() => this.tasks().filter((item) => item.category === cat))

  toggle(id: string) {
    this.tasks.update((list) =>
      list.map((t) =>
        t.id === id ? { ...t, isDone: !t.isDone } : t
      )
    );
  };

  remove(id: string) {
    this.tasks.update((list) =>
      list.filter((t) => t.id !== id
      )
    );
  };

  create(task: Omit<Task, 'id'>) {
    const newTask: Task = {
      ...task,
      id: uuidv4(),
    }
    this.tasks.update((list) => [...list, newTask])
  }

}