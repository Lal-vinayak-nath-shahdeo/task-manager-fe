import type { FC, ReactElement } from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export const UserProfile: FC<{ firstName: string }> = (props): ReactElement => {
  const { firstName } = props;
  return (
    <div className="flex flex-col w-full items-center p-8">
      {' '}
      <Avatar className={`mb-4 ${cn('h-24', 'w-24')}`}>
        <AvatarFallback
          className={`text-2xl font-semibold ${cn('bg-violet-600', 'dark:bg-violet-600')}`}
        >
          {firstName.slice(0, 1).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <h4>Hello, {firstName}</h4>
    </div>
  );
};
