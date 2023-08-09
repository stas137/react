import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { createContainer } from '../createContainer/createContainer';
import { destroyContainer } from './destroyContainer';

describe('destroyContainer.test', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.error.mockImplementation(() => null);
  });

  afterEach(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.error.mockRestore();
  });

  afterEach(() => {
    document.getElementsByTagName('body')[0].innerHTML = '';
  });

  it('Create container in document.body and destroy', () => {
    const id = 'id';

    createContainer({ id });
    const containerBefore = screen.getByTestId(`${id}`);
    expect(containerBefore).toBeInTheDocument();

    destroyContainer({ id });
    expect(screen.queryByTestId(`${id}`)).toBeNull();
  });

  it('Create container in mount node and destroy', () => {
    const id = 'id';

    render(<div id={`main-${id}`} data-testid={`main-${id}`}></div>);

    const mountNode = screen.getByTestId(`main-${id}`);

    createContainer({ id, mountNode });
    const container = screen.getByTestId(`${id}`);
    expect(container).toBeInTheDocument();

    destroyContainer({ id });
    expect(screen.queryByTestId(`${id}`)).toBeNull();
  });
});
