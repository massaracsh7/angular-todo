export enum Categories {
  Study = "Учёба",
  Work = "Работа",
  Home = "Дом"
}

export type Priority = 'низкий' | 'средний' | 'высокий';

export interface Task {
  id: string;
  name: string;
  priority: Priority;
  category: Categories;
  isDone: boolean;
}