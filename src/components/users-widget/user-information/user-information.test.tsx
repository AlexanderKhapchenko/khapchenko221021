import React from 'react';

import { render, screen } from '@testing-library/react';

import { UserInformation } from './user-information';

describe('Test App', () => {
  test('should render user information properly', () => {
    render(<UserInformation title="Title" info="some-info" type="phone" />);
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('some-info')).toBeInTheDocument();
  });
});
