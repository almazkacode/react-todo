import { useState } from 'react';
import { Input } from '../ui/Input/Input';
import { TaskItem } from '../elements/TaskItem/TaskItem';
import * as SC from './Main.style';
import { DATA, TaskInterface } from '../../data';
import { Filters, FilterType } from '../elements/Filters/Filters';

export const Main: React.FC = () => {
  const [tasks, setTasks] = useState<TaskInterface[]>(DATA);
  const [filter, setFilter] = useState<FilterType>('all');

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, isCompleted: !task.isCompleted } : task)),
    );
  };

  const onClearCompletedTasks = () => {
    setTasks((prev) => prev.filter((task) => !task.isCompleted));
  };

  const currentTasksCount = tasks.filter((task) => !task.isCompleted).length;

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.isCompleted;
    if (filter === 'completed') return task.isCompleted;
    return true;
  });

  return (
    <SC.Container>
      <SC.CentralBlock>
        <SC.Title>todos</SC.Title>
        <Input setTasks={setTasks} />
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
        ))}
        <SC.Footer>
          <SC.FooterText>{currentTasksCount} items left</SC.FooterText>
          <Filters filter={filter} setFilter={setFilter} />
          <SC.ClearButton onClick={onClearCompletedTasks}>Clear completed</SC.ClearButton>
        </SC.Footer>
      </SC.CentralBlock>
    </SC.Container>
  );
};
