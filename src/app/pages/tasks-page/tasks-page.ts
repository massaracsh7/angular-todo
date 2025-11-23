import { Component, computed, inject } from '@angular/core';
import { TasksService } from '../../core/tasks-service';
import { TaskTable } from '../../shared/components/task-table/task-table';



@Component({
  selector: 'app-tasks-page',
  imports: [TaskTable],
  templateUrl: './tasks-page.html',
  styleUrl: './tasks-page.css',
})
export class TasksPage {
  tasksService = inject(TasksService);
  tasks = computed(() => this.tasksService.tasks());
  toggle = (id: string) => this.tasksService.toggle(id);
  remove = (id: string) => this.tasksService.remove(id);
}
