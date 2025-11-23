import { Component, inject } from '@angular/core';
import { TasksService } from '../../core/tasks-service';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';



@Component({
  selector: 'app-tasks-page',
  imports: [TableModule, FormsModule, CheckboxModule],
  templateUrl: './tasks-page.html',
  styleUrl: './tasks-page.css',
})
export class TasksPage {
  tasksService = inject(TasksService);
  tasks = this.tasksService.tasks;
  toggle = this.tasksService.toggle;
}
