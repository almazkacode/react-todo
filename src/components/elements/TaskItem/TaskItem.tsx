import * as SC from './TaskItem.style';
import { TaskInterface } from '../../../data';

interface TaskItemProps {
  task: TaskInterface;
  toggleTask: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTask }) => {
  return (
    <SC.ItemContainer onClick={() => toggleTask(task.id)}>
      <SC.Checkbox isCompleted={task.isCompleted}>
        {task.isCompleted && <SC.Checkmark>✓</SC.Checkmark>}
      </SC.Checkbox>
      <SC.Text isCompleted={task.isCompleted}>{task.title}</SC.Text>
    </SC.ItemContainer>
  );
};
