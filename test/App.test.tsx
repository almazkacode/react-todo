import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, beforeEach, expect } from 'vitest';
import { App } from '../src/App';

describe('Список задач', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('Приложение рендерится и отображает заголовок', () => {
    expect(screen.getByText('todos')).toBeInTheDocument();
  });

  test('Добавление новой задачи', async () => {
    const input = screen.getByPlaceholderText('What needs to be done?');
    await userEvent.type(input, 'Покормить кота{enter}');

    expect(screen.getByText('Покормить кота')).toBeInTheDocument();
  });

  test('Очистка выполненных задач', async () => {
    const input = screen.getByPlaceholderText('What needs to be done?');
    await userEvent.type(input, 'Заказать продукты{enter}');

    const checkboxes = screen.getAllByRole('checkbox');
    await userEvent.click(checkboxes[checkboxes.length - 1]);

    await userEvent.click(screen.getByRole('button', { name: 'Clear completed' }));

    expect(screen.queryByText('Заказать продукты')).not.toBeInTheDocument();
  });
});
