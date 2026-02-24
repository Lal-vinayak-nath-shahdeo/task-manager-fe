import {
  DefaultColor,
  PriorityStatus,
  TaskStatus,
  type status,
} from '@/types/task.interface';

function convertFirstCharacterCapital(text: string | undefined): string {
  if (!text) return '';
  const newText = text.toUpperCase().charAt(0).toUpperCase() + text.slice(1);
  return newText;
}

const getTaskColor = (status: status | undefined): string => {
  // Check if the status exists in our map, otherwise return 'white'
  return TaskStatus[status as keyof typeof TaskStatus] ?? DefaultColor;
};

const getPriorityColor = (priority: string | undefined) => {
  return (
    PriorityStatus[priority as keyof typeof PriorityStatus] ?? DefaultColor
  );
};

export { convertFirstCharacterCapital, getTaskColor, getPriorityColor };
