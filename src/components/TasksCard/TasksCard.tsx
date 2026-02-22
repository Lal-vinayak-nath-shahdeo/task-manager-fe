import type { FC, ReactElement } from 'react';
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
import { getTaskColor } from '@/utils/stringUtils';

export const TasksCard: FC<ITask> = (props: ITask): ReactElement => {
  const { title, description, status, priority, dueDate } = props;
  const formattedDate = new Date(dueDate).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  return (
    <Card className="w-full mb-8">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="basis-2/3 leading-8">{title}</CardTitle>
        <div className="flex">
          <Badge className="mr-2" variant="outline">
            {formattedDate}
          </Badge>
          <Badge className={`bg-${getTaskColor(status)}-500`} variant="outline">
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
          <Switch id="in-progress" checked={status === 'inProgress'} />
          <Label className="ml-4" htmlFor="in-progress">
            {status}
          </Label>
        </div>
        <Button>{status}</Button>
      </CardFooter>
    </Card>
  );
};
