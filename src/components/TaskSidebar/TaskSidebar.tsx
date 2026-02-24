import type { FC, ReactElement } from 'react';
import { Card } from '../ui/card';
import { UserProfile } from '../UserProfile/UserProfile';
import { CreateTaskForm } from '../CreateTaskForm/CreateTaskForm';
import { Logout } from '../Logout/Logout';
import styles from './style.module.css';
export const TaskSidebar: FC = (): ReactElement => {
  return (
    <section className={`fixed top-4 right-4 ${styles.sidebarHeight}`}>
      <Card className="flex flex-col h-full w-full p-6 justify-between">
        <UserProfile firstName="John" />
        <CreateTaskForm />
        <Logout />
      </Card>
    </section>
  );
};
