import { TasksCard } from '@/components/TasksCard/TasksCard';
import { TasksCounter } from '@/components/TasksCounter/TasksCounter';
import { TaskSidebar } from '@/components/TaskSidebar/TaskSidebar';
import { useFetchTask } from '@/hooks/UseFetchTask.hook';
import type { ITask } from '@/types/task.interface';
import type { FC, ReactElement } from 'react';

export const Tasks: FC = (): ReactElement => {
  const { data } = useFetchTask();

  return (
    <section className="flex flex-row w-full p-4 gap-8">
      <section className="flex basis-2/3 justify-center ">
        <div className="flex flex-col w-4/5 p-4">
          <h1 className="text-white font-bold text-2xl mb-8">
            Tasks as on:{' '}
            {new Date().toLocaleString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </h1>
          <div className="flex justify-around mb-12">
            <TasksCounter
              status="todo"
              count={
                data && data.meta && 'todoTasks' in data.meta
                  ? (data.meta.todoTasks as number)
                  : 0
              }
            />
            <TasksCounter
              status="inProgress"
              count={
                data && data.meta && 'inProgressTasks' in data.meta
                  ? (data.meta.inProgressTasks as number)
                  : 0
              }
            />
            <TasksCounter
              status="completed"
              count={
                data && data.meta && 'completedTasks' in data.meta
                  ? (data.meta.completedTasks as number)
                  : 0
              }
            />
          </div>
          {data &&
            Array.isArray(data.data) &&
            data.data.every(
              (item): item is ITask =>
                '_id' in item &&
                'title' in item &&
                'description' in item &&
                'dueDate' in item &&
                'priority' in item &&
                'status' in item
            ) &&
            data.data.map((task) => {
              return (
                <TasksCard
                  key={task._id}
                  _id={task._id}
                  title={task.title}
                  description={task.description}
                  dueDate={task.dueDate}
                  priority={task.priority}
                  status={task.status}
                />
              );
            })}
        </div>
      </section>
      <section className="flex basis-1/3">
        <TaskSidebar />
      </section>
    </section>
  );
};
