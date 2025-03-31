import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect } from 'vitest';
import { App } from '../src/App';

describe('Фильтрация', () => {
  test('Фильтрация задач', async () => {
    render(<App />);

    const input = screen.getByPlaceholderText('What needs to be done?');

    await userEvent.type(input, 'Отправить посылку{enter}');
    await userEvent.type(input, 'Покормить кота{enter}');

    const checkboxes = screen.getAllByRole('checkbox');
    await userEvent.click(checkboxes[checkboxes.length - 1]);

    // "All"
    expect(screen.getByText('Покормить кота')).toBeInTheDocument();
    expect(screen.getByText('Отправить посылку')).toBeInTheDocument();

    // "Active"
    await userEvent.click(screen.getByRole('button', { name: 'Active' }));
    expect(screen.queryByText('Покормить кота')).not.toBeInTheDocument();
    expect(screen.getByText('Отправить посылку')).toBeInTheDocument();

    // "Completed"
    await userEvent.click(screen.getByRole('button', { name: 'Completed' }));
    expect(screen.getByText('Покормить кота')).toBeInTheDocument();
    expect(screen.queryByText('Отправить посылку')).not.toBeInTheDocument();
  });
});
