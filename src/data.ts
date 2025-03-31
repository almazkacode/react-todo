export interface TaskInterface {
  id: string;
  title: string;
  isCompleted: boolean;
}

export const DATA: TaskInterface[] = [
  {
    id: '1',
    title: 'Тестовое задание',
    isCompleted: false,
  },
  {
    id: '2',
    title: 'Прекрасный код',
    isCompleted: true,
  },
  {
    id: '3',
    title: 'Покрытие тестами',
    isCompleted: false,
  },
];
