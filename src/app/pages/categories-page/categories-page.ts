import { Component, computed, inject } from '@angular/core';
import { input } from '@angular/core';
import { TasksService } from '../../core/tasks-service';
import { Categories } from '../../models/task.model';
import { TaskTable } from '../../shared/components/task-table/task-table';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categories-page',
  imports: [TaskTable,RouterModule],
  templateUrl: './categories-page.html',
  styleUrl: './categories-page.css',
})
export class CategoriesPage {
  category = input.required<Categories>();
  tasksService = inject(TasksService);
  tasks = computed(() => this.tasksService.filterCategory(this.category())());
  toggle = (id: string) => this.tasksService.toggle(id);
  remove = (id: string) => this.tasksService.remove(id);
}
