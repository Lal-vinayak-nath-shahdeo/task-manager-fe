import { TasksCard } from '@/components/TasksCard/TasksCard';
import { TasksCounter } from '@/components/TasksCounter/TasksCounter';
import type { FC, ReactElement } from 'react';

export const Tasks: FC = (): ReactElement => {
  return (
    <section className="flex flex-row w-full p-4 gap-8">
      <section className="flex basis-2/3 justify-center ">
        <div className="flex flex-col w-4/5 p-4">
          <h1 className="text-white font-bold text-2xl mb-8">
            Tasks as on: Saturday, 22 Feb 2026
          </h1>
          <div className="flex justify-around mb-12">
            <TasksCounter status="todo" count={12} />
            <TasksCounter status="inProgress" count={10} />
            <TasksCounter status="completed" count={15} />
          </div>
          <TasksCard
            title="Task Title"
            description="Task Description"
            dueDate={'2025-01-01T12:00:00.000Z'}
            priority="low"
            status="todo"
          />
          <TasksCard
            title="Task Title"
            description="Task Description"
            dueDate={'2025-01-01T12:00:00.000Z'}
            priority="normal"
            status="inProgress"
          />
          <TasksCard
            title="Task Title"
            description="Task Description"
            dueDate={'2025-01-01T12:00:00.000Z'}
            priority="high"
            status="completed"
          />
        </div>
      </section>
      <section className="flex basis-1/3 bg-pink-400">
        Create Task Section
      </section>
    </section>
  );
};
