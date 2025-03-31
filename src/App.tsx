import 'normalize.css';
import * as SC from './App.style';
import { useState, useCallback, useMemo } from 'react';
import { DATA, TaskInterface } from './data';
import { Input } from './components/ui/Input/Input';
import { TaskItem } from './components/elements/TaskItem/TaskItem';
import { Filters, FilterType } from './components/elements/Filters/Filters';
import { Button } from './components/ui/Button/Button';

export const App = () => {
  const [tasks, setTasks] = useState<TaskInterface[]>(DATA);
  const [filter, setFilter] = useState<FilterType>('all');

  const toggleTask = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, isCompleted: !task.isCompleted } : task)),
    );
  }, []);

  const onClearCompletedTasks = () => {
    setTasks((prev) => prev.filter((task) => !task.isCompleted));
  };

  const currentTasksCount = tasks.filter((task) => !task.isCompleted).length;

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filter === 'all') return true;
      if (filter === 'active') return !task.isCompleted;
      if (filter === 'completed') return task.isCompleted;
      return true;
    });
  }, [tasks, filter]);

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
          <Button onClick={onClearCompletedTasks} label="Clear completed" />
        </SC.Footer>
      </SC.CentralBlock>
    </SC.Container>
  );
};
