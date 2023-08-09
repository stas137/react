import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { PORTAL_ERROR, Portal } from './Portal';

describe('Portal.test', () => {
  it('Create portal with content', () => {
    const id = 'portal';

    const { debug } = render(
      <>
        <div id={id} data-testid={id}></div>
        <Portal id={id}>Text</Portal>
      </>
    );

    debug();

    const container = screen.getByTestId(id);

    expect(container).toContainHTML('Text');
  });

  it('Create portal throw an error when container is missing in markup', () => {
    const id = 'portal';

    expect(() => render(<Portal id={id}>Text</Portal>)).toThrow(PORTAL_ERROR);
  });
});
