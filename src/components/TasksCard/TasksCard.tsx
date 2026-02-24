import { useEffect, useState, type FC, type ReactElement } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '../ui/label';
import { Button } from '@/components/ui/button';
import type { ITask } from '@/types/task.interface';
import { getPriorityColor } from '@/utils/stringUtils';
import { useUpdateTask } from '@/hooks/UseUpdateTask.hook';
import { useQueryClient } from '@tanstack/react-query';

export const TasksCard: FC<ITask> = (props: ITask): ReactElement => {
  const { title, description, status, priority, dueDate, _id } = props;
  const { mutate } = useUpdateTask();
  const [progress, setProgress] = useState(false);
  const queryClient = useQueryClient();
  const formattedDate = new Date(dueDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  useEffect(() => {
    if (status === 'inProgress') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setProgress(true);
    }
  }, [status, _id]);

  function handleProgressChange(value: boolean) {
    if (status !== 'completed') {
      setProgress(value);
      if (_id) {
        mutate({ _id: _id, status: value ? 'inProgress' : 'todo' });
        queryClient.invalidateQueries({
          queryKey: ['fetch-tasks'],
          refetchType: 'all',
        });
      }
    }
  }
  function handleTaskCompleted() {
    if (_id) {
      mutate({ _id: _id, status: 'completed' });
      queryClient.invalidateQueries({
        queryKey: ['fetch-tasks'],
        refetchType: 'all',
      });
    }
    setProgress(false);
  }
  return (
    <Card className="w-full mb-8">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="basis-2/3 leading-8">{title}</CardTitle>
        <div className="flex ml-auto mr-0">
          <Badge className="mr-2" variant="outline">
            {formattedDate}
          </Badge>
          <Badge
            className={`bg-${getPriorityColor(priority)}-500`}
            variant="outline"
          >
            {priority}
          </Badge>
        </div>
        <Label />
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex flex-row items-center">
          {status !== 'completed' && (
            <>
              <Switch
                id="in-progress"
                checked={progress}
                onCheckedChange={handleProgressChange}
              />
              <Label className="ml-4" htmlFor="in-progress">
                In Progress
              </Label>
            </>
          )}
        </div>
        <Button onClick={handleTaskCompleted}>Complete</Button>
      </CardFooter>
    </Card>
  );
};
