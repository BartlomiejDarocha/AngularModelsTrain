export interface TaskMedium {
  id: number;
  name: string;
  date?: Date;
  doneDate?: Date;
  active: boolean;
  done: boolean;
  color: string;
  rate?: number;
}
export interface MediumTaskList {
  id: number;
  listTitle: string;
  createDate: Date;
  completeDate?: Date;
  backgroundColor?: string;
  backgroundImg?: string;
  tasks: Array<TaskMedium>;
}
