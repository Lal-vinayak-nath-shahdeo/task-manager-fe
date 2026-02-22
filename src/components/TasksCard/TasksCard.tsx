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

export const TasksCard: FC = (): ReactElement => {
  return (
    <Card className="w-full mb-8">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="basis-2/3 leading-8">Card Title</CardTitle>
        <div>
          <Badge className="mr-2" variant="outline">
            22 Feb 2026
          </Badge>
          <Badge className="bg-sky-500" variant="outline">
            Normal
          </Badge>
        </div>
        <Label />
      </CardHeader>
      <CardContent>
        <p>This is the Description of the Task</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex flex-row items-center">
          <Switch id="in-progress" />
          <Label className="ml-4" htmlFor="in-progress">
            In Progress
          </Label>
        </div>
        <Button>Completed</Button>
      </CardFooter>
    </Card>
  );
};
