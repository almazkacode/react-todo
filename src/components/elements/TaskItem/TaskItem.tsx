import * as SC from './TaskItem.style';
import { TaskInterface } from '../../../data';
import React from 'react';

interface TaskItemProps {
  task: TaskInterface;
  toggleTask: (id: string) => void;
}

export const TaskItem = React.memo(({ task, toggleTask }: TaskItemProps) => {
  return (
    <SC.ItemContainer onClick={() => toggleTask(task.id)}>
      <SC.Checkbox isCompleted={task.isCompleted} role="checkbox">
        {task.isCompleted && <SC.Checkmark>✓</SC.Checkmark>}
      </SC.Checkbox>
      <SC.Text isCompleted={task.isCompleted}>{task.title}</SC.Text>
    </SC.ItemContainer>
  );
});
