import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import data from '../../assets/data/initData.json';
import { UsersWidget } from './users-widget';

describe('Test App', () => {
  test('should show only 3 users', () => {
    const { container } = render(<UsersWidget users={data} />);
    const users = container.getElementsByClassName('name');
    expect(users.length).toBe(3);
  });

  test('should show all users when click view all', () => {
    const { container } = render(<UsersWidget users={data} />);
    fireEvent.click(screen.getByTestId('viewAllButton'));
    const users = container.getElementsByClassName('name');
    expect(users.length).toBe(data.length);
  });

  test('should render user detail after click view', () => {
    render(<UsersWidget users={data} />);
    const buttonsView = screen.getAllByTestId('viewButton');

    expect(screen.queryByTestId('userDetails')).toBeNull();

    fireEvent.click(buttonsView[0]);

    expect(screen.queryByTestId('userDetails')).toBeInTheDocument();
  });

  test('should render properly user detail', () => {
    render(<UsersWidget users={data} />);
    const buttonsView = screen.getAllByTestId('viewButton');
    const firstUser = data[0];

    fireEvent.click(buttonsView[0]);

    const username = screen.getByText(firstUser.name);
    const position = screen.getByText(firstUser.position);
    const phone = screen.getByText(firstUser.phone);
    const url = screen.getByText('https://example.com');
    const email = screen.getByText(firstUser.email);

    expect(username).toBeInTheDocument();
    expect(position).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(url).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
