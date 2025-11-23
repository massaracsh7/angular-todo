export enum Categories {
  Study = "Учёба",
  Work = "Работа",
  Home = "Дом"
}

export enum Priority {
  Low = "низкий",
  Medium = "средний",
  High = "высокий"
}

export interface Task {
  id: string;
  name: string;
  priority: Priority;
  category: Categories;
  isDone: boolean;
}