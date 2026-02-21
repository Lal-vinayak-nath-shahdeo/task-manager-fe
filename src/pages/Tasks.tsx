import { TasksCounter } from '@/components/TasksCounter';
import type { FC, ReactElement } from 'react';

export const Tasks: FC = (): ReactElement => {
  return (
    <section className="flex flex-row w-full p-4 gap-8">
      <section className="flex basis-2/3 justify-center ">
        <div className="flex flex-col w-4/5 p-4">
          <h1 className="text-white font-bold text-2xl mb-8">
            Tasks as on: Saturday, 21 Feb 2026
          </h1>
          <div className="flex justify-around">
            <TasksCounter status="todo" count={12} />
            <TasksCounter status="inProgress" count={10} />
            <TasksCounter status="completed" count={15} />
          </div>
        </div>
      </section>
      <section className="flex basis-1/3 bg-pink-400">
        Create Task Section
      </section>
    </section>
  );
};
