export interface TaskMedium {
  id: number;
  name: string;
  date?: Date;
  active: boolean;
  description?: string;
  done: boolean;
  color: string;
  rate?: number;
}
