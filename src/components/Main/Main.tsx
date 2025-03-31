import { useState } from 'react';
import { Input } from '../Input/Input';
import { TaskItem } from '../TaskItem/TaskItem';
import * as SC from './Main.style';
import { DATA, TaskInterface } from '../../data';

export const Main: React.FC = () => {
  const [tasks, setTasks] = useState<TaskInterface[]>(DATA);

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, isCompleted: !task.isCompleted } : task)),
    );
  };

  return (
    <SC.Container>
      <SC.CentralBlock>
        <SC.Title>todos</SC.Title>
        <Input setTasks={setTasks} />
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
        ))}
      </SC.CentralBlock>
    </SC.Container>
  );
};
