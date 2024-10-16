export interface Task {
    id: number;
    name: string;
    date: string;
    description: string;
    completed: boolean;
  }

export interface IPostTask{
    name: string;
    date: string;
    description: string;
}