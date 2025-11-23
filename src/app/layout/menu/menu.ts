import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button'; 
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, MenubarModule, RouterModule, ButtonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  items: MenuItem[] = [
    { label: 'Главная', routerLink: '/tasks', icon: 'pi pi-home' },
    { label: 'Добавить задачу', routerLink: '/add-task', icon: 'pi pi-plus' },
    {
      label: 'Категории',
      icon: 'pi pi-tags',
      items: [
        { label: 'Учёба', routerLink: ['/categories', 'Учёба'] },
        { label: 'Работа', routerLink: ['/categories', 'Работа'] },
        { label: 'Дом', routerLink: ['/categories', 'Дом'] },
      ],
    },
  ];
}
