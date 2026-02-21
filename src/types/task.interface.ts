export type status = 'todo' | 'inProgress' | 'completed';

export interface ITask {
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

export const DefaultTaskStatus = 'white';

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];
