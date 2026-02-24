export type status = 'todo' | 'inProgress' | 'completed';

export interface ITask {
  _id?: string;
  title: string;
  description: string;
  status: status;
  priority: 'low' | 'normal' | 'high';
  dueDate: string;
}

export const TaskStatus = {
  todo: 'red',
  inProgress: 'blue',
  completed: 'green',
} as const;

export const PriorityStatus = {
  high: 'red',
  normal: 'blue',
  low: 'green',
} as const;

export const DefaultColor = 'white';
