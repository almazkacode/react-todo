import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';
import { TaskItem } from '../src/components/elements/TaskItem/TaskItem';
import { TaskInterface } from '../src/data';

const mockTask: TaskInterface = { id: '5', title: 'Тесты', isCompleted: false };

describe('Задача', () => {
  test('Отображает текст задачи', () => {
    render(<TaskItem task={mockTask} toggleTask={vi.fn()} />);
    expect(screen.getByText('Тесты')).toBeInTheDocument();
  });

  test('Вызывает toggleTask при клике на чекбокс', async () => {
    const toggleTaskMock = vi.fn();
    render(<TaskItem task={mockTask} toggleTask={toggleTaskMock} />);

    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);

    expect(toggleTaskMock).toHaveBeenCalledWith('5');
  });
});
