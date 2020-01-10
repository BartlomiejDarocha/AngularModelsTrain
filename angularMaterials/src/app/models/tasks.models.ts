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
