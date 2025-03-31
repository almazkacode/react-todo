import { useState } from 'react';
import Input from '../Input/Input';
import * as SC from './Main.style';
import { DATA, TaskInterface } from '../../data';

export const Main: React.FC = () => {
  const [tasks, setTasks] = useState<TaskInterface[]>(DATA);

  console.log(tasks);

  return (
    <SC.Container>
      <SC.CentralBlock>
        <SC.Title>todos</SC.Title>
        <Input setTasks={setTasks} />
      </SC.CentralBlock>
    </SC.Container>
  );
};
