import type { FC, ReactElement } from 'react';
import type { ITaskCounter } from '@/types/taskCounter.interface';
import {
  convertFirstCharacterCapital,
  getTaskColor,
} from '@/utils/stringUtils';

export const TasksCounter: FC<ITaskCounter> = (props): ReactElement => {
  const { status, count } = props;
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`p-6 border-solid border-4 border-${getTaskColor(status)}-500 rounded-full mb-4`}
      >
        <div className="min-w-10 min-h-10 text-center justify-center text-white text-3xl leading-10">
          {count}
        </div>
      </div>
      <div className="text-white text-xl text-center">
        {convertFirstCharacterCapital(status)}
      </div>
    </div>
  );
};
