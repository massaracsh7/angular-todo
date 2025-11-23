import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { 
    path: 'tasks', 
    loadComponent: () => import('./pages/tasks-page/tasks-page').then(m => m.TasksPage)
  },
//   { 
//     path: 'add-task', 
//     loadComponent: () => import('./pages/add-task.page').then(m => m.AddTaskPage)
//   },
//   { 
//     path: 'categories/:category', 
//     loadComponent: () => import('./pages/category.page').then(m => m.CategoryPage)
//   }
];
