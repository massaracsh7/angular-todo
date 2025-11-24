import { Component, inject } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Button } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TasksService } from '../../core/tasks-service';
import { Categories, Priority, Task } from '../../models/task.model';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-add-task-page',
  templateUrl: './add-task-page.html',
  styleUrl: './add-task-page.css',
  imports: [DialogModule, Button, SelectModule, ReactiveFormsModule, InputTextModule, FloatLabelModule],
})
export class AddTaskPage {
  tasksService = inject(TasksService);
  fb = inject(FormBuilder);
  router = inject(Router);

  visible = false;

  categories = Object.values(Categories).map((c) => ({ label: c, value: c }));
  priorities = Object.values(Priority).map((p) => ({ label: p, value: p }));

  taskForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    category: [Categories.Study],
    priority: [Priority.Low],
    isDone: [false],
  });

  showDialog() {
    this.visible = true;
  }

  addTask() {
    if (this.taskForm.valid) {
      const newTask: Omit<Task, 'id'> = this.taskForm.value;
      this.tasksService.create(newTask);
      this.visible = false;
      this.router.navigate(['/']);
    }
  }
}
