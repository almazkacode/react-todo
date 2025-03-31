import * as SC from './Input.style';
import { useState } from 'react';
import { TaskInterface } from '../../../data';

interface InputProps {
  setTasks: React.Dispatch<React.SetStateAction<TaskInterface[]>>;
}

export const Input: React.FC<InputProps> = ({ setTasks }) => {
  const [value, setValue] = useState<string>('');

  const addTask = (title: string) => {
    if (!title.trim()) return;
    setTasks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title,
        isCompleted: false,
      },
    ]);
    setValue('');
  };

  return (
    <SC.InputContainer>
      <SC.InputField
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTask(value)}
        placeholder="What needs to be done?"
      />
    </SC.InputContainer>
  );
};
