import { Component, input, output } from '@angular/core';
import { Task } from '../../../models/task.model';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'tr[app-card]',
  standalone: true,
  imports: [CheckboxModule, FormsModule, ButtonModule, RouterModule],
  templateUrl: './card.html',
})
export class Card {
  task = input.required<Task>();

  toggle = output<string>();
  remove = output<string>();
}