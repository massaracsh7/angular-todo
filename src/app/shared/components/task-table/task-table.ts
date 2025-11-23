import { Component, input, output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Task } from '../../../models/task.model';
import { Card } from '../card/card';

@Component({
  selector: 'app-task-table',
  imports: [TableModule, Card],
  templateUrl: './task-table.html',
  styleUrl: './task-table.css',
})
export class TaskTable {
tasks = input.required<Task[]>();
toggle = output<string>();
remove = output<string>();

}
