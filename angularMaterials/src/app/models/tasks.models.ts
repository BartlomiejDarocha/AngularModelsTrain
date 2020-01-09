export interface TaskMedium {
  id: number;
  name: string;
  date?: Date;
  doneDate?: Date;
  active: boolean;
  description?: string;
  done: boolean;
  color: string;
  rate?: number;
}
